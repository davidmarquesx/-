
$(document).ready(function(){

    window.location.hash = '/home';
     $('section#home').load('assets/include/home.php').addClass('page-fix');

// -------------------------------- menu navigation ------------------------------------- //
    
    setTimeout(function(){
        $('section#sobre').load('assets/include/sobre.php');
        $('section#trabalhos').load('assets/include/trabalhos.php');
        $('section#galeria').load('assets/include/galeria.php');
        $('section#animacoes').load('assets/include/animacoes.php');
    }, 1000);

    $('.menu li a').on('click', function(menuActive){      
        setTimeout(function(){ $('.navbar-collapse').removeClass('collapse-in') }, 100);

        const href = $(this).attr("href");
        var hash = '#' + href.substr(1);
                  
        window.location.hash = href;        
        $('section').removeClass('page-fix'); $(hash).addClass('page-fix');

       menuActive.preventDefault();
    });

    // mobile button toggle 
    $('.navbar-toggle').click(function(){
        setTimeout(function(){ $('.navbar-collapse').toggleClass('collapse-in') }, 100);
    })



// ------------------------------ history navegation ----------------------------------- //
    window.onhashchange = function() {            
        if(window.location.hash !== '#'){
            $('.navbar').removeClass('navbar-default navbar-nav');
            setTimeout(function(){ $('.navbar').addClass('navbar-nav') }, 100); 

            var section = 'section#' + window.location.hash.substr(2); 
            setTimeout(function(){ 
                $('section').removeClass('page-fix'); $(section).addClass('page-fix');                
            }, 100);
        }
        if(window.location.hash == '#/home'){
            $('.navbar').removeClass('navbar-default navbar-nav');          
            setTimeout(function(){ $('.navbar').addClass('navbar-default').removeClass('navbar-nav') }, 100);
        }
    }


// -------------------- header slideDown quando executar o scroll ------------------------ //   
      /*(window).scroll(function() {        
            if($(document).scrollTop() > 150) {
                $('.navbar').removeClass('navbar-nav navbar-slide');  
            }  
            if($(document).scrollTop() > 300) {   
                $('header').css('position','fixed');
                $('.navbar').addClass('navbar-slide');             
            }
            if($(document).scrollTop() < 150) {     
                $('header').css('position','absolute');     
                $('.navbar').addClass('navbar-nav').removeClass('navbar-slide');
            }   
        }); */


})


