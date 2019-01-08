window.addEventListener('load', init);

function init(){
	const width = 800;
	const height = 500;

	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
	camera.position.set(0, 0, +1000);

	const geometry = new THREE.SphereGeometry(300, 30, 30);
	const material = new THREE.MeshStandardMaterial({color: 0xFF0000});
	const mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
	directionalLight.position.set(1, 1, 1);

	scene.add(directionalLight);

	tick();

	function tick(){
		mesh.rotation.y += 0.01;
		renderer.render(scene, camera);

		requestAnimationFrame(tick);
	}
}
