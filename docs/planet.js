// Decorative scene: local, pinned Three.js; the SVG remains if WebGL cannot start.
(async () => {
  const host = document.querySelector('.hero-art');
  const mount = document.getElementById('planet-scene');
  const toggle = document.getElementById('planet-motion');
  if (!host || !mount || !toggle) return;
  let renderer;
  try {
    const THREE = await import('./assets/vendor/three.module.min.js');
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.append(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-3.45, 3.45, 3.45, -3.45, 0.1, 50);
    camera.position.set(0, 0, 12);
    scene.add(new THREE.HemisphereLight(0xfff8ec, 0x614134, 3));
    const light = new THREE.DirectionalLight(0xfff2df, 4);
    light.position.set(-3, 5, 6);
    scene.add(light);

    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 512; textureCanvas.height = 256;
    const ctx = textureCanvas.getContext('2d');
    if (!ctx) throw new Error('Canvas unavailable');
    const pixels = ctx.createImageData(512, 256);
    for (let y = 0; y < 256; y++) for (let x = 0; x < 512; x++) {
      const band = Math.sin(y * 0.16 + Math.sin(x * 0.025) * 1.5) * 3;
      const marking = Math.sin(x * 0.017 + y * 0.022) * 5;
      const i = (y * 512 + x) * 4;
      pixels.data[i] = 217 + band + marking;
      pixels.data[i + 1] = 91 + band + marking;
      pixels.data[i + 2] = 49 + band;
      pixels.data[i + 3] = 255;
    }
    ctx.putImageData(pixels, 0, 0);
    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const planet = new THREE.Mesh(new THREE.SphereGeometry(0.59, 48, 32),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.88, metalness: 0 }));
    planet.rotation.z = -0.15;
    scene.add(planet);

    // Parametric quad grid avoids diagonal triangulation lines on the torus.
    const points = [];
    function point(u, v) {
      const radius = 2.03 + 0.58 * Math.cos(v);
      return [radius * Math.cos(u), radius * Math.sin(u), 0.58 * Math.sin(v)];
    }
    for (let ring = 0; ring < 18; ring++) for (let step = 0; step < 144; step++) {
      const v = ring / 18 * Math.PI * 2;
      points.push(...point(step / 144 * Math.PI * 2, v), ...point((step + 1) / 144 * Math.PI * 2, v));
    }
    for (let ring = 0; ring < 48; ring++) for (let step = 0; step < 48; step++) {
      const u = ring / 48 * Math.PI * 2;
      points.push(...point(u, step / 48 * Math.PI * 2), ...point(u, (step + 1) / 48 * Math.PI * 2));
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const rings = new THREE.LineSegments(geometry,
      new THREE.LineBasicMaterial({ color: 0x67715e, transparent: true, opacity: 0.3, depthWrite: false }));
    const tilt = new THREE.Group();
    tilt.rotation.set(0.9, 0.2, 0.58);
    tilt.add(rings); scene.add(tilt);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = reduced.matches;
    let visible = false;
    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    const draw = () => renderer.render(scene, camera);
    const resize = () => {
      const width = host.clientWidth, height = host.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height);
      const aspect = width / height;
      camera.left = -3.35 * aspect; camera.right = 3.35 * aspect;
      camera.top = 3.35; camera.bottom = -3.35;
      camera.updateProjectionMatrix(); draw();
    };
    function tick(now) {
      frame = 0;
      const dt = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
      previous = now; elapsed += dt;
      tilt.rotation.y = 0.2 + elapsed * 0.13;
      tilt.rotation.x = 0.9 + Math.sin(elapsed * 0.12) * 0.1;
      rings.rotation.z = elapsed * 0.07;
      planet.rotation.y = elapsed * 0.24;
      draw(); sync();
    }
    function sync() {
      const running = visible && !paused && !document.hidden;
      if (running && !frame) frame = requestAnimationFrame(tick);
      if (!running) { cancelAnimationFrame(frame); frame = 0; previous = 0; }
      toggle.textContent = paused ? 'Play motion' : 'Pause motion';
      toggle.setAttribute('aria-pressed', String(!paused));
    }
    toggle.addEventListener('click', () => { paused = !paused; sync(); });
    reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
    document.addEventListener('visibilitychange', sync);
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(host);
    new ResizeObserver(resize).observe(host);
    renderer.domElement.addEventListener('webglcontextlost', event => {
      event.preventDefault(); paused = true; sync(); host.classList.remove('planet-ready'); toggle.hidden = true;
    });
    resize(); host.classList.add('planet-ready'); toggle.hidden = false; sync();
  } catch (error) {
    renderer?.dispose(); mount.replaceChildren(); host.classList.remove('planet-ready'); toggle.hidden = true;
    console.warn('Planet scene unavailable; showing static illustration.', error);
  }
})();
