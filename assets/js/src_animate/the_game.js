
var avatar = '#the_game #avatar';
let x = 40; let y = 0; let ground = 0;

$(avatar).css({left: x, bottom: y});

$('#the_game #scene').on('keyup', function() {
    $(avatar).removeClass('wake');
});


$('#the_game #scene').on('keydown', function() {
    if(event.keyCode == '65'){ avatarWakeLeft();  colision(); }
    if(event.keyCode == '68'){ avatarWakeRight(); colision(); }
    if(event.keyCode == '76'){ avatarJump(); }
    if(event.keyCode == '83'){ avatarJumpDown(); }
    if(event.keyCode == '87'){ avatarJumpUp(); }
});


function avatarWakeLeft(){
    $(avatar).addClass('wake invert').css('left', x -= 2);
}

function avatarWakeRight(){
   $(avatar).addClass('wake').removeClass('invert').css('left', x += 2);
}


function avatarJump(){     
    if(y == 0){ high = 25; ground = 0 }
    if(y == 26){ high = 50; ground = 26 }
    if(y == 56){ high = 80; ground = 56 }
    if(y == 56 && x <= 346){ high = 56; ground = 56 }
    if(y == 86){ high = 116; ground = 86 }
    if(y == 114){ high = 130; ground = 114 }
    if(y == 26){ high = 50; ground = 26 }

    $(avatar).css({bottom: y = high, transition: 'bottom .2s'}); 
    setTimeout(function(){ $(avatar).css({bottom: y = ground, transition: 'bottom 0s'}) }, 300);
}

function avatarJumpDown(){
    if(x >= 348 && y >= 90){ ground = 56 }
    if(x >= 336 && y >= 60 && y <= 80){ ground = 26 }
}

function avatarJumpUp(){
    if(x >= 336 && y >= 30){ ground = 56 }
    if(x >= 348 && y >= 60){ ground = 86 }

    setTimeout(function(){ $(avatar).css('bottom', y = ground) }, 300);   
}


function colision(){
    if(x == 136 || x == 268 && y == 0){ 
        x -= 2; 
    }
    if((x == 10 || x == 190 && y == 0) || (x == 346 && y == 86) || (x == 224 && y >= 114)){
        x += 2;
    }
    if((x == 134 || x == 268) && y == 25){
        x += 12; ground = 26; 
    }
    if(x == 190 && y == 25){ 
        x -= 12; ground = 26;
    }
    if((x == 142 || x == 274) && y <= 50){
       x -= 8; ground = 0;
    }
    if(x == 184 && y <= 50){
        x += 8; ground = 0;
    }
    if(x <= 336 && y == 56){
        ground = 26;
    }
    if(x == 340 && y == 116){
        x += 8; ground = 86;
    }
    if(x == 346 && y >= 90){ 
        x -= 12; ground = 114;
    }
    if(x == 340 && y >= 90){ 
        x += 8; ground = 86;
    }
    if(x >= 380){ 
        x = 390; ground = 5; 
        retornar();
    }

    $(avatar).css({left: x, bottom: y = ground});

    if(x == 252 && y == 114){
        $('.bonus.item1').remove(); $('.bonus.item2').show();
    }
    if((x == 146 || x == 176) && y == 26){
        $('.bonus.item2').hide();
    }

    if(x == 200 && y == 0){ $('#the_game #scene').addClass('sceneFit') }
    if(x == 198 && y == 0){ $('#the_game #scene').removeClass('sceneFit') }

    
}

function retornar(){
    $(avatar).addClass('over');
        setTimeout(function(){ $(avatar).hide() }, 800);
        setTimeout(function(){ $('#the_game #scene').removeClass('sceneFit') }, 1200);
        setTimeout(function(){ x = 40; ground = 0;
            $(avatar).css({left: x, bottom: y = ground}).show().removeClass('over') 
    }, 2000)
}


$('#the_game #controller .btn').on('pointerdown', function(){
    $(this).addClass('active');
})

$('#the_game #controller .btn').on('pointerout', function(){
    $(this).removeClass('active'); $(avatar).removeClass('wake');
    clearInterval(avatarMove);
})

$('#the_game #controller .btn-left').on('pointerover', function(){
    avatarMove = setInterval(function(){
        avatarWakeLeft(); colision(); 
    }, 60)      
});

$('#the_game #controller .btn-right').on('pointerover', function(){
    avatarMove = setInterval(function(){
        avatarWakeRight(); colision(); 
    }, 60)      
});

$('#the_game #controller .btn-jump').on('pointerover', function(){ avatarJump(); });
$('#the_game #controller .btn-up').on('pointerover', function(){ avatarJumpUp(); });
$('#the_game #controller .btn-down').on('pointerover', function(){ avatarJumpDown(); });
