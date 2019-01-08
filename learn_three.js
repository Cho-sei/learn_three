window.addEventListener('load', init);

function init(){
	const width = 800;
	const height = 500;
	let rot = 0;

	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
	camera.position.set(0, 0, +1000);

	const geometry = new THREE.SphereGeometry(300, 30, 30);
	const loader = new THREE.TextureLoader();
	const texture = loader.load('imgs/earthmap1k.jpg');
	const material = new THREE.MeshStandardMaterial({
		map: texture,
		side: THREE.DoubleSide,
	});
	const earthmesh = new THREE.Mesh(geometry, material);
	scene.add(earthmesh);

	const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
	directionalLight.position.set(1, 1, 1);
	scene.add(directionalLight);

	createStarField();

	function createStarField(){
		const geometry = new THREE.Geometry();
		for (let i = 0; i < 1000; i++){
			geometry.vertices.push(new THREE.Vector3(
				3000 * (Math.random() - 0.5),
				3000 * (Math.random() - 0.5),
				3000 * (Math.random() - 0.5),
			));
		}

	const material = new THREE.PointsMaterial({
		size: 10,
		color: 0xffffff
	});

	const mesh = new THREE.Points(geometry, material);
	scene.add(mesh);
	}


	tick();

	function tick(){
		rot += 0.5;

		const radian = (rot * Math.PI) / 180;
		camera.position.x = 1000 * Math.sin(radian);
		camera.position.z = 1000 * Math.cos(radian);
		camera.lookAt(new THREE.Vector3(0, 0, 0));

		renderer.render(scene, camera);

		requestAnimationFrame(tick);
	}
}
