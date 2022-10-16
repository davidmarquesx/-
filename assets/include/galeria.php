<a name="/galeria">
<div class="container">   
    <p class="align-center">Trabalhos e inspirações gráficas e digitais</p>        
    <div class="grid-row">     
        <div class="grid-column">
            <img src="assets/img/galeria/lina_bosque.jpg">
            <img src="assets/img/galeria/vetor_fireworks.jpg">
            <img src="assets/img/galeria/sandy.gif" class="gif">
            <img src="assets/img/galeria/alice.jpg">
            <img src="assets/img/galeria/immortal.gif" class="gif">
            <img src="assets/img/galeria/5bonecas.jpg">
        </div>
        <div class="grid-column">
            <img src="assets/img/galeria/anjo.jpg">
            <img src="assets/img/galeria/peninha.jpg">
            <img src="assets/img/galeria/montagem_Sd_Ryan.jpg">
            <img src="assets/img/galeria/gelo.jpg">
            <img src="assets/img/galeria/maquiagem.jpg">
            <img src="assets/img/galeria/briga.jpg">
        </div>
        <div class="grid-column">
            <img src="assets/img/galeria/frutas.jpg">
            <img src="assets/img/galeria/gatinho.jpg">
            <img src="assets/img/galeria/bosque.jpg">
            <img src="assets/img/galeria/entrada.gif">
            <img src="assets/img/galeria/lara_croft.jpg">  
            <img src="assets/img/galeria/boneca_fone.jpg">
        </div>
        <div class="grid-column">
            <img src="assets/img/galeria/woman_flame.jpg">
            <img src="assets/img/galeria/spacemedia.jpg">
            <img src="assets/img/galeria/jaqueline.gif" class="gif">
            <img src="assets/img/galeria/cartaz_infancia.jpg">
            <img src="assets/img/galeria/music_works.gif">               
            <img src="assets/img/galeria/obscure.gif">                 
        </div>         
    </div>
    <div class="readmore auto-center">Ver Mais...</div>     
</div>
<!--<div class="overlay"><i class="far fa-times-circle"></i></div>-->

<script type="text/javascript">
    $('.readmore').click(function(){
        $(this).hide(); 
        var elm = window.matchMedia("(max-width: 1024px)"); 
        function resize() {
            if(elm.matches) { 
                 $('.grid-column:nth-child(n+3)').addClass('add-col');
            } 
            else { 
                $('.grid-column').removeClass('add-col');
                 
            }
        }    
        resize(elm); elm.addListener(resize)     
    })
</script>

