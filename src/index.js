
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { mesh } from './panorama.js'

import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
// import { create_panorama } from './pan_function';
// import { create_nav } from './nav_function';
// import { create_info } from './info_function';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS3DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);

labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild( labelRenderer.domElement );

scene.background = new THREE.Color(0x000000);

//const mesh1 = create_panorama('./double_panoramic.png');
// mesh1.add(create_nav(1, -30, -30,'imagenav'));
// mesh1.add(create_info(20, 0, -30,'infonav'))

// scene.add(mesh1);

camera.position.z = 5;
const controls = new OrbitControls(camera, labelRenderer.domElement);
controls.update();
controls.enableZoom=false;

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

animate();





//click event nav

// const actionbutton = document.getElementsByClassName("imagenav")[0];

// actionbutton.addEventListener('pointerdown', () => { 
// console.log('click');
// scene.remove(mesh)
// //imageDiv.style.visibility='hidden'
// actionbutton.style.visibility='hidden'

// const mesh2 = create_panorama('./kawiarnia5.png')
// mesh2.add(create_nav(10,-10,30,'imagenav2'))

// scene.add(mesh2)
//  })
// console.log(actionbutton);