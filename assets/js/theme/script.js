
$(document).ready(function(){

    var index = document.querySelector('section#home');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this) {
            index.innerHTML = this.responseText;
            index.classList.add('page-fix')
        }
    };
    xhttp.open('GET', 'assets/include/home.php', true);
    xhttp.send();
    
    setTimeout(function(){ $('#preloader').fadeOut() }, 1200)

    setTimeout(function(){
        $('section#sobre').load('assets/include/sobre.php');
        $('section#trabalhos').load('assets/include/trabalhos.php');
        $('section#galeria').load('assets/include/galeria.php');
        $('section#animacoes').load('assets/include/animacoes.php');
    }, 2600)


    // ----------------------------- menu navigation ---------------------------------- //
    $('.menu li a').on('click', function(menuActive){
        const href = $(this).attr("href");
        var hash = '#' + href.substr(1);
                  
        window.location.hash = href;        
        $('section').removeClass('page-fix'); $(hash).addClass('page-fix');

        setTimeout(function(){ 
            $('.navbar-collapse').removeClass('collapse-in expand'); 
        }, 100);

        menuActive.preventDefault();
    });


    // --------------------------- history navegation -------------------------------- //
    window.location.hash = '/home';

    window.onhashchange = function() {            
        if(window.location.hash !== '#'){
            $('.navbar').removeClass('navbar-default navbar-nav');
            setTimeout(function(){ 
                $('.navbar').addClass('navbar-nav');
            }, 100); 

            var section = 'section#' + window.location.hash.substr(2); 
            setTimeout(function(){ 
                $('section').removeClass('page-fix'); $(section).addClass('page-fix');
            }, 100);

        }
        if(window.location.hash == '#/home'){ 
            setTimeout(function(){ $('.navbar').addClass('navbar-default') }, 20); 
        }

        $('html, body').scrollTop(0);
    }


    // ---------------------- header slideDown in scroll -------------------------- //  
        $(window).scroll(function() {        
            if($(document).scrollTop() > 150) {
                $('header').css('top','-10vh').removeClass('header-slide');
            }  
            if($(document).scrollTop() > 200) {   
                $('header').addClass('header-slide');             
            }
            if($(document).scrollTop() < 150) {     
                $('header').css('top','0vh').removeClass('header-slide');
            }   
        }); 
 


    // --------------------------- collapse-in menu -------------------------------- //
    var collapse = document.querySelector('.navbar-collapse');
    $('.navbar-toggle .btn').click(function(){
        if(collapse.classList.add('collapse-in')) {
           setTimeout(function(){ collapse.classList.remove('collapse-in') }, 800);
        } 
        else {
            collapse.classList.add('collapse-in');
        }
        
        setTimeout(function(){ 
            $('.navbar-collapse').toggleClass('expand');
        }, 100);
    })


    // ------------------------------ end jQuery ----------------------------------- //
    $(window).resize(function() {
        if($(window).width() > 840) {
            $('.navbar-collapse').removeClass('collapse-in expand')
        }
    });

    header = document.querySelector('header');
    header.addEventListener('contextmenu', function(e) { 
            e.preventDefault();
    }, false);


})
