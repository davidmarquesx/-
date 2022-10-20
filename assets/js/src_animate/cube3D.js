
var cube = document.querySelector('#cube3D #element');

cube.style.transform = 'rotateX(-22deg) rotateY(-45deg)';

document.querySelector('#cube3D #controller .btn-left').onclick = function(){
    cube.style.transform += 'rotateY(-10deg) rotateX(-1deg)';
}
document.querySelector('#cube3D #controller .btn-up').onclick = function(){
    cube.style.transform += 'rotateX(10deg) rotateY(-1deg)';
}
document.querySelector('#cube3D #controller .btn-down').onclick = function(){
    cube.style.transform += 'rotateX(-10deg) rotateY(1deg)';
}
document.querySelector('#cube3D #controller .btn-right').onclick = function(){
    cube.style.transform += 'rotateY(10deg) rotateX(-1deg)';
}
document.querySelector('#cube3D #controller .fa-stop').onclick = function(){
    cube.style.transform = 'rotateX(-22deg) rotateY(-45deg)';
}
