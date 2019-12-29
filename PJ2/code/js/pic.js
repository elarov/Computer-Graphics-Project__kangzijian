//创建渲染器
var renderer;
function initRender() {
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
}

//创建相机
var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 70;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

//创建场景
var scene;
function initScene() {
    scene = new THREE.Scene();
}

//创建光源
var ambientLight, pointLight;
function initLight() {
    ambientLight = new THREE.AmbientLight("#bbbbbb");
    scene.add(ambientLight);
}
var earth,se,sun,mercury,sme,venus,sv,mars,sma,jupiter,sj,saturn,ss,urannus,su,nepture,sn;
function initSolar() {
    se = new THREE.Object3D();
    earth = CreateSphere(1,32,32,"src/earth.png");
    earth.position.set(10,0,0);
    se.add(earth);
    scene.add(se);
    
    sme = new THREE.Object3D();
    mercury = CreateSphere(0.38,32,32,"src/mercury.png");
    mercury.position.set(3.87,0,0);
    sme.add(mercury);
    scene.add(sme);

    sv = new THREE.Object3D();
    venus = CreateSphere(0.95,32,32,"src/venus.png");
    venus.position.set(7.23,0,0);
    sv.add(venus);
    scene.add(sv);

    sma = new THREE.Object3D();
    mars = CreateSphere(0.53,32,32,"src/mars.png");
    mars.position.set(15.23,0,0);
    sma.add(mars);
    scene.add(sma);

    sj = new THREE.Object3D();
    jupiter = CreateSphere(11.2,32,32,"src/jupiter.png");
    jupiter.position.set(52.02,0,0);
    sj.add(jupiter);
    scene.add(sj);

    ss = new THREE.Object3D();
    saturn = CreateSphere(9.4,32,32,"src/saturn.png");
    saturn.position.set(95.54,0,0);
    ss.add(saturn);
    scene.add(ss);

    su = new THREE.Object3D();
    urannus = CreateSphere(4.0,32,32,"src/urannus.png");
    urannus.position.set(192.2,0,0);
    su.add(urannus);
    scene.add(su);

    sn = new THREE.Object3D();
    nepture = CreateSphere(3.9,32,32,"src/nepture.png");
    nepture.position.set(301.1,0,0);
    sn.add(nepture);
    scene.add(sn);

    sun = CreateSphere(2,32,32,"src/sun.jpg");
    sun.position.set(0,0,0);
    scene.add(sun);
}

function CreateSphere(r, w, h, pic) {
    var sphereGeometry = new THREE.SphereGeometry(r, w, h);
    var sphereMaterial = new THREE.MeshPhongMaterial({
        emissive:0x333333,
        map:new THREE.TextureLoader().load(pic)});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    return sphere;
}

var stats;
function initStats() {
    stats = new Stats();
    document.body.appendChild(stats.dom);
}

var controls;
function initControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.autoRotate = false;
    controls.minDistance = 20;
    controls.maxDistance == 400;
    controls.enablePan = true;
}

function render() {
    renderer.render(scene, camera);
}

//窗口大小改变
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function AnimateRender() {
    render();
    sun.rotation.y += 1/250;
    earth.rotation.y += 0.1;
    se.rotation.y += 1/3650;
    mercury.rotation.y += 1/580;
    sme.rotation.y += 1/870;
    venus.rotation.y += 1/2430;
    sv.rotation.y += 1/2240;
    mars.rotation.y += 1/10.26;
    sma.rotation.y += 1/6860;
    jupiter.rotation.y += 0.3;
    sj.rotation.y += 0.000001;
    saturn.rotation.y += 0.24;
    ss.rotation.y += 0.000002;
    urannus.rotation.y += 0.15;
    su.rotation.y += 0.0000002;
    nepture.rotation.y += 0.15;
    sn.rotation.y += 0.00000002;
    stats.update();
    controls.update();
    requestAnimationFrame(AnimateRender);
}

function draw() {
    initRender();
    initScene();
    initCamera();
    initLight();
    initSolar();
    initControls();
    initStats();
    AnimateRender();
    window.onresize = onWindowResize;
}