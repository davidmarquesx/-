var ballMove = document.querySelector('#platform #ball');
var colision_R = document.querySelector('#platform .colision.right');
var posX = -45;  var posY = 45; 

function trajectory01(){
    ball_a = setInterval(function(){ 
        if(posX == 20){
           posY = 50;             
        }
        if(posX == 30){
            posY = 56;
        }
        if(posX == 155 || posY == 200){
            posY++;  ballMove.style.top = posY + 'px';
            
            if(posY == 150 || posY == 250){
                posX++; ballMove.style.left = posX + 'px'; 
            }
            if(posY >= 195){
                posY = 200;
                $(ballMove).addClass('stop'); $(colision_R).addClass('break');
            }
        }
        else {
            posX++;
            ballMove.style.left = posX + 'px'; 
            ballMove.style.top = posY + 'px';
         
            if(posX == 500){
                posX = -45; posY = 45; 
            }
        }
    }, 10); 
    
}

function trajectory02(){ 
    ball_b = setInterval(function(){ 
        if(posX == 20){
           posY = 50;             
        }
        if(posX == 30){
            posY = 56;
        }
        if(posX == 155 || posX == 500 || posY >= 205){
            posY++;  ballMove.style.top = posY + 'px';
            $(ballMove).removeClass('stop'); $(colision_R).removeClass('break');        

            if(posY == 250){
                posX = -45; posY = 45; 
            }
        }            
        else {
            posX++;       
            ballMove.style.left = posX + 'px'; 
            ballMove.style.top = posY + 'px'; 
        }    
    }, 10);
}


trajectory01();

function stop_trajectory01(){
    clearInterval(ball_a);
}
function stop_trajectory02(){
    clearInterval(ball_b);
}

func_a = function() {  
    trajectory02(); stop_trajectory01(); 
};
func_b = function() {
    trajectory01(); stop_trajectory02();
};

//var btn = document.querySelector('#platform');
var n = "a";   

$('#platform button').click(function(){  
    $(this).toggleClass('active');
    $('#platform .colision.right').toggleClass('change');  
    window["func_" + n]("");
    (n == 'a')?n = 'b':n = 'a'; 

});

