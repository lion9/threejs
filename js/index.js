let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#f4dc42');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls( camera, renderer.domElement );
// Creating the shape
let geometry = new THREE.BoxGeometry(1, 1, 1);
let cubeMaterials = [new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('img/logo-rs.png'), side: THREE.DoubleSide } ),
                    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('img/logo-rs.png'), side: THREE.DoubleSide } ),
                    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('img/logo-rs.png'), side: THREE.DoubleSide } ),
                    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('img/logo-rs.png'), side: THREE.DoubleSide } ),
                    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('img/logo-rs.png'), side: THREE.DoubleSide } ),
                    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('img/logo-rs.png'), side: THREE.DoubleSide } )];
// Creating material
let material = new THREE.MeshFaceMaterial(cubeMaterials);
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

/*let light = new THREE.DirectionalLight(0xffffff, .6);
scene.add(light);*/

camera.position.z = 3;
// Game logic
let update = function() {
    //cube.rotation.x += .01;
    //cube.rotation.y += .005;
};
// Draw scene
let render = function() {
    renderer.render(scene, camera);
};

// Run game loop (update, render, repeat)
let gameLoop = function () {
    requestAnimationFrame(gameLoop);
    update();
    render();
};

gameLoop();
