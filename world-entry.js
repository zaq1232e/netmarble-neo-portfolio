/* The router owns navigation. This layer only animates the existing title/world art. */
(() => {
  'use strict';

  const reduceMotion = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  let active = null;

  const hashOf = value => {
    const hash = String(value ?? '').trim();
    return hash ? (hash.startsWith('#') ? hash : '#' + hash) : '';
  };
  const validRect = rect => rect && [rect.left, rect.top, rect.width, rect.height].every(Number.isFinite)
    && rect.width > 0 && rect.height > 0;
  const motionDisabled = () => reduceMotion?.matches
    || document.documentElement.classList.contains('reduced-motion');

  function dispose(entry) {
    if (!entry || entry.disposed) return;
    entry.disposed = true;
    if (active === entry) active = null;
    entry.restorePlane?.();
    entry.overlay.remove();
    for (const animation of entry.animations) {
      try { animation.cancel(); } catch {}
    }
  }
  function cancel() { dispose(active); }

  function viewportSnapshot() {
    const visual = window.visualViewport;
    const snapshot = {
      width:window.innerWidth, height:window.innerHeight,
      clientWidth:document.documentElement.clientWidth,
      clientHeight:document.documentElement.clientHeight,
      visualWidth:visual?.width, visualHeight:visual?.height, scale:visual?.scale
    };
    if (!Object.values(snapshot).every(value => Number.isFinite(value) && value > 0)) return null;
    snapshot.gutter = Math.max(0, snapshot.width - snapshot.clientWidth);
    return snapshot;
  }

  function onViewportResize() {
    if (!active) return;
    const before = active.viewport, after = viewportSnapshot();
    // The newly rendered archive can add a classic vertical scrollbar without
    // changing the screen. VisualViewport width then shrinks by the gutter.
    // Keep the original baseline so repeated events cannot accumulate tolerance.
    const scrollbarOnly = before && after
      && before.width === after.width && before.height === after.height
      && before.clientHeight === after.clientHeight
      && Math.abs(before.visualHeight - after.visualHeight) <= .5
      && Math.abs(before.scale - after.scale) <= .0001
      && Math.abs((before.visualWidth + before.gutter) - (after.visualWidth + after.gutter)) <= 1;
    if (!scrollbarOnly) cancel();
  }

  // Buttons already include the world plane's current pan/transform. The fallback
  // maps intrinsic image percentages through object-fit instead of using the box.
  function imagePoint(source, rect, style, world) {
    const x = Number(world.x), y = Number(world.y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
    const naturalWidth = source.naturalWidth, naturalHeight = source.naturalHeight;
    const fit = style.objectFit || 'fill';
    let width = rect.width, height = rect.height;
    if (fit !== 'fill') {
      let scale = fit === 'cover'
        ? Math.max(rect.width / naturalWidth, rect.height / naturalHeight)
        : Math.min(rect.width / naturalWidth, rect.height / naturalHeight);
      if (fit === 'none') scale = 1;
      if (fit === 'scale-down') scale = Math.min(1, scale);
      width = naturalWidth * scale;
      height = naturalHeight * scale;
    }
    let position = (style.objectPosition || '50% 50%').trim().split(/\s+/);
    if (position.length === 1) position = /^(top|bottom)$/.test(position[0])
      ? ['50%', position[0]] : [position[0], '50%'];
    if (position.length !== 2) return null;
    if (/^(top|bottom)$/.test(position[0])) position.reverse();
    const offset = (token, remaining) => {
      if (token === 'center') return remaining * .5;
      if (token === 'left' || token === 'top') return 0;
      if (token === 'right' || token === 'bottom') return remaining;
      if (/^-?(?:\d+\.?\d*|\.\d+)%$/.test(token)) return remaining * parseFloat(token) / 100;
      if (/^-?(?:\d+\.?\d*|\.\d+)px$/.test(token) || token === '0') return parseFloat(token);
      return NaN;
    };
    const left = offset(position[0], rect.width - width);
    const top = offset(position[1], rect.height - height);
    return Number.isFinite(left) && Number.isFinite(top)
      ? {x:rect.left + left + width * x / 100, y:rect.top + top + height * y / 100} : null;
  }

  const readPoints = element => {
    const points=String(element?.dataset?.points||'').trim().split(/\s+/).map(pair=>pair.split(',').map(Number));
    return points.length>=3&&points.every(pair=>pair.length===2&&pair.every(Number.isFinite))?points:null;
  };
  const tracePoints = (context,points,close=true) => {
    context.beginPath();points.forEach(([x,y],i)=>i?context.lineTo(x,y):context.moveTo(x,y));
    if(close)context.closePath();
  };
  function softMapLayer(source,points,matrix,view,blur,strokeWidth=0) {
    const canvas=document.createElement('canvas');
    canvas.width=source.naturalWidth;canvas.height=source.naturalHeight;
    const c=canvas.getContext('2d');if(!c)throw Error('Map layer unavailable');
    c.save();
    try{
      c.scale(source.naturalWidth/view.width,source.naturalHeight/view.height);
      if(matrix)c.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.e,matrix.f);
      c.filter='blur('+blur+'px)';c.fillStyle='white';c.strokeStyle='white';
      const paths=Array.isArray(points[0]?.[0])?points:[points];
      for(const path of paths){
        tracePoints(c,path,!strokeWidth);
        if(strokeWidth){c.lineWidth=strokeWidth;c.lineJoin='round';c.lineCap='round';c.stroke();}else c.fill();
      }
    }finally{c.restore();}
    c.globalCompositeOperation='source-in';
    c.save();
    try{
      c.scale(source.naturalWidth/view.width,source.naturalHeight/view.height);
      if(matrix)c.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.e,matrix.f);
      c.drawImage(source,0,0,view.width,view.height);
    }finally{c.restore();}
    return canvas;
  }
  function snapshotRaisedIslands(context,source) {
    // Match the live SVG's fixed foundation, soft island layers and bridges.
    // A raw source snapshot would reintroduce the old mountains during entry.
    for(const hole of document.querySelectorAll('.island-base-hole')) {
      const points=readPoints(hole),x=Number(hole.dataset?.x),y=Number(hole.dataset?.y);
      if(!points||!Number.isFinite(x)||!Number.isFinite(y))continue;
      context.save();
      try{
        context.scale(source.naturalWidth/1672,source.naturalHeight/941);
        context.globalCompositeOperation='destination-out';
        context.transform(.97,0,0,.97,x*.03,y*.03);
        tracePoints(context,points);context.fill();
      }finally{context.restore();}
    }
    for(const layer of document.querySelectorAll('.island-cutout')) {
      const svg=layer.ownerSVGElement,view=svg?.viewBox?.baseVal,points=readPoints(layer);
      if(!points||!view||!(view.width>0)||!(view.height>0))continue;
      const outer=svg.getCTM(),inner=layer.getCTM();if(!outer||!inner)continue;
      const matrix=outer.inverse().multiply(inner);
      if(![matrix.a,matrix.b,matrix.c,matrix.d,matrix.e,matrix.f].every(Number.isFinite))continue;
      context.drawImage(softMapLayer(source,points,matrix,view,4),0,0);
    }
    const bridges=Array.from(document.querySelectorAll('.island-fixed-bridge'),readPoints).filter(Boolean);
    if(bridges.length)context.drawImage(softMapLayer(source,bridges,null,{width:1672,height:941},3,34),0,0);
  }

  // Landmarks on the approved sea map: the gate, the courtyard door and the arched bookshelf.
  const landmarks = new Map([
    ['huephoria', {x:59.2, y:30.5}],
    ['comma', {x:14, y:63.4}],
    ['archive', {x:86.6, y:50}]
  ]);

  function landmarkPoint(node, source, rect, style, landmark) {
    const cutout = node?.querySelector?.('.island-cutout');
    const matrix = cutout?.getScreenCTM?.();
    const box = cutout?.ownerSVGElement?.viewBox?.baseVal;
    if (matrix && box?.width > 0 && box.height > 0) {
      const x = box.width * landmark.x / 100;
      const y = box.height * landmark.y / 100;
      const screenX = matrix.a * x + matrix.c * y + matrix.e;
      const screenY = matrix.b * x + matrix.d * y + matrix.f;
      if (Number.isFinite(screenX) && Number.isFinite(screenY)) return {x:screenX, y:screenY};
    }
    return imagePoint(source, rect, style, landmark);
  }

  function boundedPan(offset, origin, span, viewport, size) {
    if (size === 1) return 0;
    const gap = viewport - span * size;
    if (gap > 0) {
      // A letterboxed image grows into its existing margins before panning on this axis.
      const alignment = Math.max(0, Math.min(1, origin / (viewport - span)));
      return gap * alignment - origin;
    }
    // Both canvas edges must stay outside the viewport once the artwork fills it.
    return Math.max(gap - origin, Math.min(-origin, offset));
  }

  function liftPlane(plane, host) {
    const parent = plane.parentNode, next = plane.nextSibling;
    // Freeze an in-flight hover before reparenting changes its CSS state.
    const cutouts = Array.from(plane.querySelectorAll('.island-cutout'), layer => ({
      layer, css:layer.style.cssText, transform:window.getComputedStyle(layer).transform
    }));
    for (const {layer, transform} of cutouts) {
      layer.style.transition = 'none';
      layer.style.transform = transform;
    }
    host.append(plane);
    return () => {
      // Normal travel has already replaced this parent. A cancelled or failed
      // launch can still be on the map, and should give the live plane back.
      if (!parent.isConnected) return;
      parent.insertBefore(plane, next?.parentNode === parent ? next : null);
      for (const {layer, css} of cutouts) layer.style.cssText = css;
    };
  }

  function makeWake(source, rect, style, point) {
    const wake = document.createElement('canvas');
    wake.width = Math.min(448, source.naturalWidth);
    wake.height = Math.max(1, Math.round(wake.width * source.naturalHeight / source.naturalWidth));
    const context = wake.getContext('2d');
    const topLeft = imagePoint(source, rect, style, {x:0, y:0});
    const bottomRight = imagePoint(source, rect, style, {x:100, y:100});
    if (!context || !topLeft || !bottomRight) return null;
    const fx = (point.x - topLeft.x) / (bottomRight.x - topLeft.x) * wake.width;
    const fy = (point.y - topLeft.y) / (bottomRight.y - topLeft.y) * wake.height;
    context.drawImage(source, 0, 0, wake.width, wake.height);
    // Six half-exposures of the previous result produce 64 evenly spaced
    // zoom samples of the map. Only this small texture is drawn on click.
    context.globalAlpha = .5;
    for (let i = 0; i < 6; i++) {
      const stretch = Math.pow(1.008, 2 ** i);
      context.drawImage(wake, fx * (1 - stretch), fy * (1 - stretch),
        wake.width * stretch, wake.height * stretch);
    }
    const focusX = 100 * (point.x - rect.left) / rect.width;
    const focusY = 100 * (point.y - rect.top) / rect.height;
    wake.style.maskImage = `radial-gradient(ellipse farthest-corner at ${focusX}% ${focusY}%, transparent 0 1.6%, #000 10%)`;
    wake.className = 'portfolio-entry-wake';
    return wake;
  }

  // Time, fraction of zoom, fraction of recentering, and radial exposure.
  const rushStages = [
    [0,     0,    0,   0],
    [.10, .031, .27,  .38],
    [.24, .102, .63,  .84],
    [.45, .275, .91,  .96],
    [.65, .525, .99,  .94],
    [.82, .79,  1,    .78],
    [1,   1,    1,    .56]
  ];
  function islandFlight(point, labelPoint, rect, width, height) {
    const centerX = width * .5, centerY = height * .48;
    const scale = Math.min(18, Math.max(13.5,
      centerX / Math.max(1, point.x - rect.left),
      (width - centerX) / Math.max(1, rect.left + rect.width - point.x),
      centerY / Math.max(1, point.y - rect.top),
      (height - centerY) / Math.max(1, rect.top + rect.height - point.y)));
    const camera = [], caption = [], wake = [];
    for (const [t, travel, aim, exposure] of rushStages) {
      const size = 1 + (scale - 1) * travel;
      const desiredX = (centerX - point.x) * aim - (point.x - rect.left) * (size - 1);
      const desiredY = (centerY - point.y) * aim - (point.y - rect.top) * (size - 1);
      const dx = boundedPan(desiredX, rect.left, rect.width, width, size);
      const dy = boundedPan(desiredY, rect.top, rect.height, height, size);
      const transform = `translate(${dx}px, ${dy}px) scale(${size})`;
      camera.push({offset:t, transform});
      wake.push({offset:t, opacity:exposure, transform});
      // The selected name travels with its island during the first moments of the dive.
      const lx = dx + (labelPoint.x - rect.left) * (size - 1);
      const ly = dy + (labelPoint.y - rect.top) * (size - 1);
      const opacity = Math.max(0, 1 - t / .19);
      caption.push({offset:t, opacity,
        transform:`translate(calc(-50% + ${lx}px), calc(-50% + ${ly}px)) scale(${size})`});
    }
    return {camera, caption, wake};
  }

  function beginScene(world, {targetHash, motion = true} = {}, isStart = false) {
    cancel();
    const target = hashOf(targetHash);
    if (!world || !target || motion === false || motion === 'off' || motionDisabled()
      || document.visibilityState === 'hidden') return false;

    const source = document.querySelector(isStart ? '.title-art' : '.world-art');
    if (!source || !source.complete || !source.naturalWidth || !source.naturalHeight) return false;
    const rect = source.getBoundingClientRect();
    const viewportWidth = window.innerWidth, viewportHeight = window.innerHeight;
    if (!validRect(rect) || !(viewportWidth > 0) || !(viewportHeight > 0)) return false;
    const duration = isStart ? 1050 : 520;
    const style = window.getComputedStyle(source);
    const node = !isStart && Array.from(document.querySelectorAll('.world-node[data-world]'))
      .find(button => button.dataset.world === String(world.id));
    const name = node?.querySelector?.('.island-name');
    const anchor = name || node?.querySelector?.('.place-symbol') || node;
    const nodeRect = anchor?.getBoundingClientRect?.();
    const labelPoint = validRect(nodeRect)
      ? {x:nodeRect.left + nodeRect.width / 2, y:nodeRect.top + nodeRect.height / 2}
      : imagePoint(source, rect, style, world);
    if (!labelPoint) return false;
    const landmark = !isStart && landmarks.get(world.id);
    const point = landmark ? landmarkPoint(node, source, rect, style, landmark) : labelPoint;
    if (!point) return false;

    const overlay = document.createElement('div');
    if (typeof overlay.animate !== 'function') return false;
    overlay.className = 'portfolio-entry ' + (isStart ? 'portfolio-entry--start' : 'portfolio-entry--dive');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    // Keep pass-through behavior even if the stylesheet has not loaded yet.
    Object.assign(overlay.style, {position:'fixed', inset:'0', overflow:'hidden', pointerEvents:'none', zIndex:'90'});
    const plane = !isStart && source.closest?.('.world-plane');
    const image = document.createElement(plane ? 'div' : 'canvas');
    image.className = plane ? 'portfolio-entry-art portfolio-entry-plane world-natural' : 'portfolio-entry-art';
    image.setAttribute('aria-hidden', 'true');
    if (!plane) {
      try {
        image.width = source.naturalWidth;
        image.height = source.naturalHeight;
        const context = image.getContext('2d');
        if (!context) return false;
        context.drawImage(source, 0, 0, image.width, image.height);
        if (!isStart) snapshotRaisedIslands(context,source);
        if (context.isContextLost?.()) return false;
      } catch {
        return false;
      }
    }
    const artStyle = {
      position:'absolute', left:rect.left + 'px', top:rect.top + 'px',
      width:rect.width + 'px', height:rect.height + 'px', maxWidth:'none',
      objectFit:style.objectFit || 'fill', objectPosition:style.objectPosition || '50% 50%',
      transformOrigin:'0 0', pointerEvents:'none'
    };
    Object.assign(image.style, artStyle);
    let wake = null;
    if (!isStart) {
      // A constrained canvas budget can still use the sharp forward camera.
      try { wake = makeWake(source, rect, style, point); } catch { /* optional exposure */ }
      if (wake) Object.assign(wake.style, artStyle);
    }
    const label = document.createElement('span');
    label.className = 'portfolio-entry-label';
    label.textContent = String(world.name || '');
    if (!isStart) {
      Object.assign(label.style, {left:labelPoint.x + 'px', top:labelPoint.y + 'px'});
      if (name) {
        const type = window.getComputedStyle(name);
        for (const key of ['fontFamily','fontSize','fontWeight','letterSpacing','textShadow']) {
          label.style[key] = type[key];
        }
      }
    }
    overlay.append(image, label);
    if (wake) overlay.append(wake);
    const entry = {targetHash:target, overlay, animations:[], disposed:false, viewport:viewportSnapshot()};
    active = entry;
    document.body.append(overlay);

    // All geometry is captured synchronously, before the router replaces #app.
    const transformAt = scale => {
      const dx = viewportWidth / 2 - rect.left - (point.x - rect.left) * scale;
      const dy = viewportHeight * .48 - rect.top - (point.y - rect.top) * scale;
      return `translate(${dx}px, ${dy}px) scale(${scale})`;
    };
    const finished = [];
    const track = animation => {
      entry.animations.push(animation);
      // Attach rejection handling immediately: cancelling one animation must not
      // leak a rejection even if starting the next animation throws.
      finished.push(Promise.resolve(animation.finished).catch(() => {}));
    };
    try {
      if (plane) entry.restorePlane = liftPlane(plane, image);
      const flight = !isStart && islandFlight(point, labelPoint, rect, viewportWidth, viewportHeight);
      const cameraFrames = isStart ? [
        {transform:'translate(0px, 0px) scale(1)', offset:0},
        {transform:transformAt(viewportWidth <= 760 ? 1.25 : 1.38), offset:1}
      ] : flight.camera;
      track(image.animate(cameraFrames, {duration, easing:isStart ? 'cubic-bezier(.32,0,.2,1)' : 'linear', fill:'both'}));
      track(overlay.animate([
        {opacity:1, offset:0},
        {opacity:1, offset:isStart ? .16 : .69, easing:'cubic-bezier(.35,0,.3,1)'},
        {opacity:0, offset:1}
      ], {duration, easing:'linear', fill:'both'}));
      const labelFrames = isStart ? [
        {opacity:0, offset:0}, {opacity:1, offset:.18},
        {opacity:1, offset:.42}, {opacity:0, offset:.88}, {opacity:0, offset:1}
      ] : flight.caption;
      track(label.animate(labelFrames, {duration, easing:'linear', fill:'both'}));
      if (wake) track(wake.animate(flight.wake, {duration, easing:'linear', fill:'both'}));
      Promise.all(finished).then(() => dispose(entry));
      return true;
    } catch {
      dispose(entry);
      return false;
    }
  }

  const begin = (world, options) => beginScene(world, options);
  const beginStart = options => beginScene({name:'월드맵', x:50, y:48}, options, true);

  function sync(hash) {
    if (active && (hashOf(hash) !== active.targetHash || motionDisabled())) cancel();
  }

  window.addEventListener('hashchange', () => sync(window.location.hash));
  window.addEventListener('popstate', () => sync(window.location.hash));
  window.addEventListener('pagehide', cancel);
  window.addEventListener('resize', onViewportResize);
  window.visualViewport?.addEventListener('resize', onViewportResize);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') cancel();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') cancel(); }, true);
  document.addEventListener('pointerdown', cancel, true);
  const onMotionPreference = event => { if (event.matches) cancel(); };
  if (reduceMotion?.addEventListener) reduceMotion.addEventListener('change', onMotionPreference);
  else reduceMotion?.addListener?.(onMotionPreference);

  window.PORTFOLIO_ENTRY = {begin, beginStart, sync, cancel, isActive:() => active !== null};
})();
