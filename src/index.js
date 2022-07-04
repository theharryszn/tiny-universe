const { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshLambertMaterial, Mesh, PointLight, BoxGeometry, Blending, SphereBufferGeometry, MeshStandardMaterial, TextureLoader } = require("three");

// create a scene
const scene = new Scene();

// create a camera
const camera = new PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
// create a renderer
const renderer = new WebGLRenderer({
    antialias  : true
})

renderer.setClearColor("#e5e5e5");

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// to fix responsiveness
window.addEventListener("resize", function(){
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
})

const geometry = new SphereBufferGeometry(1, 20, 20);

const material = new MeshStandardMaterial()
material.metalness = 0.7;
material.roughness = 0.2

const mesh = new Mesh(geometry, material);

const textureLoader = new TextureLoader();
const texture = textureLoader.load("./text.jpg")

material.normalMap = texture;

const light = new PointLight("white", 1, 500);
light.position.set(2, 0, 1);

scene.add(light)

scene.add(mesh)

function onWindowMove(event){
    console.log(event);
}

const render = function(){
    requestAnimationFrame(render);
    window.addEventListener("mouseover",onWindowMove)
    renderer.render(scene, camera)
}

render(); 

