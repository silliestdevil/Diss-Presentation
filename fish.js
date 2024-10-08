const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // GLTFLoader
    const loader = new THREE.GLTFLoader();

    loader.load('fish.glb', function (gltf) {
      const model = gltf.scene;

      // Adjust position and scale
      model.position.set(10, 10,10);
      model.scale.set(1, 1, 1);

      // Enable shadows (optional)
      model.traverse(function (node) {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });

      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      animateMixers.push(mixer);
    });

    // Position the camera
    camera.position.set(0, 2, 10); // Adjusted to zoom out

    // Add axes helper to see XYZ axes
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    const clock = new THREE.Clock();
    const animateMixers = [];

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      animateMixers.forEach(mixer => mixer.update(delta));

      renderer.render(scene, camera);
    }

    animate();