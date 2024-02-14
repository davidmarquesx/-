
const frogScreen1 = window.matchMedia('(max-width: 576px)');
const frogScreen2 = window.matchMedia('(max-width: 840px)');
const frogScreen3 = window.matchMedia('(max-width: 1440px)');

frogScreen1.addListener(handleDeviceChange);
frogScreen2.addListener(handleDeviceChange);
frogScreen3.addListener(handleDeviceChange);

const resizeRelva = (frogScreen1 || frogScreen2 || frogScreen3);
handleDeviceChange(resizeRelva);

function handleDeviceChange(resizeRelva) {   
    var relvapath = ""; var i = 0;
    if(frogScreen1.matches) {         
        do {
          relvapath += "<span></span>";
          i++;
        }
        while (i < 22);         
    }
    else if(frogScreen2.matches) {         
        do {
          relvapath += "<span></span>";
          i++;
        }
        while (i < 40);         
    }
    else if(frogScreen3.matches) {         
        do {
          relvapath += "<span></span>";
          i++;
        }
        while (i < 22);         
    }
    else { 
        do {
          relvapath += "<span></span>";
          i++;
        }
        while (i < 40);      
    }

    $('#frog #relva .content').html(relvapath);
}

var frog = document.querySelector('#frog #avatar');
var changeFrog = 'elm-up-left elm-up-middle elm-up-right ' + 
                 'elm-middle-left elm-middle-middle elm-middle-right ' +
                 'elm-down-left elm-down-middle elm-down-right ';

$(frog).addClass(changeFrog);   //carregar as class da imagem
setTimeout(function(){ $(frog).removeClass(changeFrog); }, 800)             

$('#cursor .mask').on('pointerleave', function(){
    $(frog).removeClass(changeFrog);
})

$('#cursor .mask.grid-1-1').on('pointerover', function(){ 
    $(frog).addClass('elm-up-left') 
})
$('#cursor .mask.grid-1-2').on('pointerover', function(){ 
    $(frog).addClass('elm-up-middle') 
})
$('#cursor .mask.grid-1-3').on('pointerover', function(){ 
    $(frog).addClass('elm-up-right') 
})
$('#cursor .mask.grid-2-1').on('pointerover', function(){ 
    $(frog).addClass('elm-middle-left') 
})
$('#cursor .mask.grid-2-2').on('pointerover', function(){ 
    $(frog).addClass('elm-middle-middle') 
})
$('#cursor .mask.grid-2-3').on('pointerover', function(){ 
    $(frog).addClass('elm-middle-right') 
})
$('#cursor .mask.grid-3-1').on('pointerover', function(){ 
    $(frog).addClass('elm-down-left') 
})
$('#cursor .mask.grid-3-2').on('pointerover', function(){ 
    $(frog).addClass('elm-down-middle') 
})
$('#cursor .mask.grid-3-3').on('pointerover', function(){ 
    $(frog).addClass('elm-down-right') 
})

