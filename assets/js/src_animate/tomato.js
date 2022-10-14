
var olho_esq = dragElement(document.querySelector('#tomato #eyes .eyeball.left img'));
var olho_dir = dragElement(document.querySelector('#tomato #eyes .eyeball.right img'));

function dragElement(elmnt) {

    if (olho_esq || olho_dir) {
        elmnt.onpointercancel = closeDragElement;
    } 
    else {                      
        elmnt.onpointerdown = dragPointer;
    }

    function dragPointer(e) {
        e.preventDefault();
        // posição do cursor em inicialização:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerup = closeDragElement;
        // chamar função quando mover o cursor:
        document.onpointermove = elementDrag;            
    }
    function elementDrag(e) {
        e.preventDefault();
        // calcular posição do cursor:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // definir posição do objeto movido:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        // parar de mover o objeto:
        document.onpointerup = null;
        document.onpointermove = null; 
    }

    $('#tomato #eyes .eyeball img').on('pointerleave', function(){
        document.onpointermove = null; 
    })
}

function allowDrop(ev) {
    ev.preventDefault();    
}  


$('#tomato #panel .thumbnail img').on('pointerdown', function(){ 
    $('#tomato #panel .thumbnail img').removeClass('drag'); 
    $(this).addClass('drag');   
});
$('#tomato #panel .thumbnail img').on('pointerup', function(){ 
    $(this).removeClass('drag');     
});  
   
function tomatoDrop(ev) {
    ev.preventDefault();
    $('#tomato #panel .drag').clone().prependTo('#tomato #mouth');
    $('#tomato #panel .thumbnail img').removeClass('drag');       
    $('#tomato #mouth img:last-child').remove();
}


$('#tomato #mouth').on('touchend', function(){ 
   $('#tomato #panel .drag').clone().prependTo('#tomato #mouth'); 

})


$('#tomato button').click(function(){
    $('#tomato #mouth').html('<img src="assets/img/tomato/boca0.png" />');
    $('#tomato #eyes .eyeball img').css({top:'5px', left:'0'});
})
