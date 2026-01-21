import * as Three from "three";

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

const cubeGeometry = new Three.BoxGeometry(1, 1, 1);
const cubeMaterial = new Three.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Three.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);


const light = new Three.DirectionalLight(0xffffff, 1);
scene.add(light);

const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate )
