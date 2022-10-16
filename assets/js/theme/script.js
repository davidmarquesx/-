

$(document).ready(function(){

    var section = document.querySelector('section');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this) {
            section.innerHTML = this.responseText;
            section.setAttribute('id', 'home');
        }
    };
    xhttp.open('GET', 'assets/include/home.php', true);
    xhttp.send();


    // ----------------------------- menu navigation ---------------------------------- //
    $('.menu li a').on('click', function(menuActive){
        const href = $(this).attr("href");
                  
        window.location.hash = href; 

        setTimeout(function(){ 
            $('body').removeClass('page-fix');
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

            var hash = window.location.hash.substr(2);

            xhttp.onreadystatechange = function() {
                if(this) {
                    section.innerHTML = this.responseText;
                    section.setAttribute('id', hash);
                }
            };
            xhttp.open('GET', 'assets/include/' + hash + '.php', true);
            xhttp.send();

        }
        if(window.location.hash == '#/home'){ 
            setTimeout(function(){ $('.navbar').addClass('navbar-default') }, 20); 
        }
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
            $('body').toggleClass('page-fix');
            $('.navbar-collapse').toggleClass('expand');
        }, 100);
    })


    // ------------------------------ end jQuery ----------------------------------- //
    $(window).resize(function() {
        if($(window).width() > 840) {
            $('.navbar-collapse').removeClass('collapse-in expand')
        }
    });


})


