
/*var floor = '#the_game #avatar';
var avatar = '#the_game #avatar #image';*/

var avatar = '#the_game #avatar';
x = 40; y = 0; 

$(avatar).css({left: x, bottom: y});


//$(avatar).css({left:'40px', top:'80%'}); 

$('#the_game #scene').on('keyup', function() {
    $(avatar).removeClass('wake');   
});

$('#the_game #scene').on('keydown', function() {
    if(event.keyCode == '65'){ avatarWakeLeft(); colision(); }
    if(event.keyCode == '68'){ avatarWakeRight(); colision();}
    if(event.keyCode == '32'){ avatarJump();  }
    if(event.keyCode == '83'){ avatarJumpDown(); }
    if(event.keyCode == '87'){ avatarJumpUp(); }

});


function avatarWakeLeft() {
    $(avatar).addClass('wake invert').css('left', x -= 2);
}

function avatarWakeRight() {
    $(avatar).addClass('wake').removeClass('invert').css('left', x += 2);
}

function avatarJump() {   
    //var high = 0; var ground = 0; 

   /* if(y == 0){ high = 26; ground = 0 }
    if(y == 26){ high = 50; ground = 26 }
    if(y == 56){ high = 80; ground = 56 }
    if(y == 86){ high = 116; ground = 86 }
    if(y == 116){ high = 144; ground = 116 }

    if(y == 26 && (x == 144 || x == 276)){ high = 50; ground = 0; x -= 10; }
    if(y == 26 && x == 182){ high = 50; ground = 0; x += 10; }  
    if(y == 56 && x > 270 && x <= 346){ high = 56; ground = 56; }
    if(y == 116 && x == 338){ high = 144; ground = 86; x += 10; }*/

    if(y == 0 && (x > 12 && x < 136 || x > 190 && x < 268)){ 
        high = 26; ground = 0; 
    }
    if(y == 26 && (x > 136 && x < 190 || x > 268)){ 
        high = 50; ground = 26; 
    }


    $(avatar).animate({bottom: y = high}, 200).css('left', x = x);
    setTimeout(function(){ $(avatar).css('bottom', y = ground) }, 300);
}

function avatarJumpUp() { 
    if(x >= 340 && y >= 50 && y < 70){
        $(avatar).animate({bottom: y = 60}, 200);
        setTimeout(function(){ $(avatar).css('bottom', y = 56) }, 300)
    }
    if(x >= 348 && y >= 80 && y < 95){
        $(avatar).animate({bottom: y = 90}, 200);
        setTimeout(function(){ $(avatar).css('bottom', y = 86) }, 300); 
    }
}

function avatarJumpDown() { 
    if(x >= 340 && y == 80){
        setTimeout(function(){ $(avatar).css('bottom', y = 26) }, 300); 
    }
    if(x >= 348 && y == 116){
        setTimeout(function(){ $(avatar).css('bottom', y = 56) }, 300); 
    }
}

function colision(){ 
    /*if(x > 136 && x < 190 || x > 268 ){ y = 26 }

    if(x > 190 && x < 268 && y == 26) { y = 0}*/

    if(x == 136 || x == 268 && y == 0){ 
        x -= 2 
    }
    if((x == 10 || x == 190 && y == 0) || (x == 346 && y == 86) || (x == 224 && y >= 116)){
        x += 2 
    }
   if(x == 134 && y == 26){
        $(avatar).animate({bottom: y = 26 }).css('left', x += 12);
        setTimeout(function(){ $(avatar).css('bottom', y = 26) }, 310)
    }
    if((x == 140 || x == 276) && y == 26){
       x -= 6; y = 0;
    }


    /*
    if((x == 134 || x == 268) && y == 26){
        $(avatar).animate({bottom: y = 26 }).css('left', x += 12);
        setTimeout(function(){ $(avatar).css('bottom', y = 26) }, 300);
    }
    if(x == 190 && y == 26){ 
        $(avatar).animate({bottom: y = 26}).css('left', x -= 12); 
        setTimeout(function(){ $(avatar).css('bottom', y = 26) }, 300);
    }
    if(x == 346 && y == 116){ 
        $(avatar).animate({bottom: y = 116}).css('left', x -= 12); 
        setTimeout(function(){ $(avatar).css('bottom', y = 116) }, 300);
    }   
    if((x == 144 || x == 276) && y == 26){
       x -= 10; y = 0;
    }
    if(x == 184 && y == 26){
        x += 10; y = 0;
    }
    if(x == 336 && y == 56){
        y = 26;
    }
    if(x == 340 && y == 116){
        x += 10; y = 86;
    }

        */
    $(avatar).css({left: x, bottom: y});


    if(x == 200 && y == 0){ $('#the_game #scene').addClass('sceneFit') }
    if(x == 198 && y == 0){ $('#the_game #scene').removeClass('sceneFit') }

}


    


/*

$('#the_game #scene').keydown(function(evt = evt) {
    if(event.keyCode == '68') {    
        $(avatar).addClass('wake').removeClass('invert').css('left','+=2px');
    }
    if(event.keyCode == '65') {    
        $(avatar).addClass('wake invert').css('left','-=2px');
    }    
    if(event.keyCode == '32') {    
        // jumping 
    } 
    
    var gravity = $('#the_game #avatar').scrollTop();    
    var xBreak = $(avatar).css('left'); 
    var avatarJump = event.keyCode == '32';
    var avatarDown = event.keyCode == '83';
    var avatarUp = event.keyCode == '87';

    if(xBreak == '10px'){ $(avatar).css({left:'12px'}) }
    if(xBreak == '362px'){ $(avatar).css({left:'360px'}) } 
    
    if(gravity == 0){         
        if(xBreak == '136px' || xBreak == '138px' || xBreak == '140px'){ $(avatar).css({left:'134px'}) } 
        if(xBreak == '188px' || xBreak == '190px' || xBreak == '192px'){ $(avatar).css({left:'194px'}) }  
        if(xBreak == '266px' || xBreak == '268px' || xBreak == '270px'){ $(avatar).css({left:'264px'}) } 
        if(avatarJump){ $(floor).animate({scrollTop: 25}, 200); $(floor).animate({scrollTop: 0}, 300); }
    }  
    if(gravity >= 21 && gravity <= 24){                         
        if(xBreak == '136px'){ 
            $(avatar).css({left:'150px', top:'71%'}); 
            setTimeout(function(){ $(avatar).css({top:'80%'}); $(floor).scrollTop(25) },310); 
        }
        if(xBreak == '192px'){ $(avatar).css({left:'178px', top:'71%'}); 
            setTimeout(function(){ $(avatar).css({top:'80%'}); $(floor).scrollTop(25) },310); 
        } 
        if(xBreak == '266px'){ $(avatar).css({left:'282px', top:'71%'});
            setTimeout(function(){ $(avatar).css({top:'80%'}); $(floor).scrollTop(25) },310);  
        }  
    }
    if(gravity == 25){        
        if(xBreak == '144px'){ $(avatar).css({left:'134px'}); $(floor).scrollTop(0) }
        if(xBreak == '184px'){ $(avatar).css({left:'194px'}); $(floor).scrollTop(0) }
        if(xBreak == '274px'){ $(avatar).css({left:'264px'}); $(floor).scrollTop(0) }
        if(avatarJump){ $(floor).animate({scrollTop: 50}, 200); $(floor).animate({scrollTop: 25}, 300); }
    }    
    if(gravity == 52){
        if(xBreak == '336px'){ $(avatar).css({left:'334px'}); $(floor).scrollTop(25) }
        if(avatarJump){ $(floor).animate({scrollTop: 75}, 200); $(floor).animate({scrollTop: 52}, 300); }
    }
    if(gravity == 85){
        if(xBreak <= '348px'){ $(avatar).css({left:'350px'}) }
        if(avatarJump){ $(floor).animate({scrollTop: 115}, 200); $(floor).animate({scrollTop: 85}, 300); }
    }
    if(gravity >= 108 && gravity <= 114){
        if(xBreak == '348px'){ 
            $(avatar).css({left:'334px', top:'66%'});
            setTimeout(function(){ $(avatar).css({top:'80%'}); $(floor).scrollTop(115) },310);
        }          
    }   
    if(gravity >= 115){
        if(xBreak <= '226px'){ $(avatar).css({left:'228px'})}
        if(xBreak == '338px'){ $(avatar).css({left:'350px'}); $(floor).scrollTop(85) }
    }
    if(gravity == 115){
        if(avatarJump){ $(floor).animate({scrollTop: 135}, 200); $(floor).animate({scrollTop: 115}, 300); }
    }    
    
    if(xBreak >= '338px'){
        if(avatarUp) { 
            if(gravity >= 26 && gravity <= 51){ 
                $(avatar).css({top:'66%'}); setTimeout(function(){ $(avatar).css({top:'80%'}); $(floor).scrollTop(52) },310);
            }
            if(gravity >= 53 && gravity <= 84){ 
                $(avatar).css({top:'66%'}); setTimeout(function(){ $(avatar).css({top:'80%'}); $(floor).scrollTop(85) },310); 
            }
        }
        if(avatarDown) { 
            if(gravity >= 53 && gravity <= 84){ 
                setTimeout(function(){ $(floor).scrollTop(25) },310); 
            }
            if(gravity >= 86 && gravity <= 114){ 
                setTimeout(function(){ $(floor).scrollTop(52) },310); 
            }
        }
    }


});


var the_game = document.querySelector('#the_game');
function preventDefault(avatar) {
  avatar.preventDefault();
}

try {
  the_game.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

the_game.addEventListener('pointerover', function() {    
    //  the_game.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    the_game.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    the_game.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
})

function screen() {
  var elmnt = document.querySelector('#the_game #scene');
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementById('coordinates').innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}

*/