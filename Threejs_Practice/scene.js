import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.module.js'
import{GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/loaders/GLTFLoader.js'
import{OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/controls/OrbitControls.js'

const scene =new THREE.Scene()
 //camera

 const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
 )
 camera.position.z = 2;

 const renderer = new THREE.WebGLRenderer({antialias: true, alpha:true})
 renderer.setSize(window.innerWidth,window.innerHeight)
 renderer.setPixelRatio(window.devicePixelRatio);

 const canvas = document.querySelector('#canvas');
 canvas.appendChild(renderer.domElement)

 const loader = new GLTFLoader()
 const Coffeee = await loader.loadAsync('./assets/dod.glb', (gltf) =>{
    gltf.scene.scale.set(20,20,20);

 }
 
 
 )
 scene.add(Coffeee.scene)


 const ambientLight = new THREE.AmbientLight("#9090DA", 4)
 scene.add(ambientLight);

 const directionalLight = new THREE.DirectionalLight(0x404040,2);
 directionalLight.position.set(0,-3 ,0);

 const directLighttwo = new THREE.DirectionalLight(
     "#9090DA",
     2);
 directLighttwo.position.set(0, -1, 0);
 scene.add(directionalLight, directLighttwo);


 function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
 }

animate()

window.addEventListener('resize', onWindowResize)

function onWindowResize(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
    controls.update();
}
const controls = new OrbitControls( camera, renderer.domElement );