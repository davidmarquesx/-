
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
                //$('footer').show();
            }, 100);
        }
        if(window.location.hash == '#/home'){
            $('.navbar').removeClass('navbar-default navbar-nav');          
            setTimeout(function(){ $('.navbar').addClass('navbar-default').removeClass('navbar-nav') }, 100);
            //$('footer').hide();
        }
    }


// -------------------- header slideDown quando executar o scroll ------------------------ //   
       $(window).scroll(function() {        
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
        }); 


// ---------------------------- Suporte aos browsers IE ---------------------------------- //     
    var sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer / Microsoft Edge";

        $('.icons-group').addClass('-ms-icons-group');
        $('.testimonial table').addClass('-ms-testimonial-table');
        $('.testimonial table .client').addClass('-ms-testimonial-table-client');
        $('.testimonial table .project').addClass('-ms-testimonial-table-project');
        var tableInfo = document.querySelectorAll('.testimonial table .client td:nth-child(2), .testimonial table .project td:nth-child(2)');
        for(i=0; i < tableInfo.length; i++){
            tableInfo[i].classList.add('-ms-testimonial-table-td-2nd');
        }

        $('.aquamask svg, .area-colisao object, .tomato .row').hide(); 
        $('#animacoes .IE-alert, #animacoes .img-alt ').show();
        $('#code_desenhoCSS').addClass('-ms-desenhoCSS');
        $('.aquamask h8').addClass('-ms-aquamask-h8'); 
        $('.tomato h8').addClass('-ms-tomato-h8');
    }

})


