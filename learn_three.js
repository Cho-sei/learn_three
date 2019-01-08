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

	const camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, +1000);

	const geometry = new THREE.BoxGeometry(300, 300, 300);
	const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	tick();

	function tick(){
		box.rotation.y += 0.01;
		renderer.render(scene, camera);

		requestAnimationFrame(tick);
	}
}
