
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

frog = document.querySelector('#frog #avatar');

function toface(type){
    frog.style.background = "url('assets/img/frog/" + type + ".png')";
}

$('#frog #cursor').on('pointerout', function(){
    frog.style.background = "url('assets/img/frog/elm-normal.png')";
})
