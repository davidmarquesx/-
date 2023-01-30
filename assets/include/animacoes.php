<div class="container">    
    <div class="grid-row align-center">         
        <div class="col-md-6">            
            <p class="justify-all"> 
             <strong class="auto-center" style="color:#48D1CC">Desenho em CSS</strong>
             <span>
             Com os novos recursos da linguagem CSS3 para os navegadores web, podemos utilizar elementos complexos para desenvolvimento e aperfeiçoamentos gráficos de perspectiva, transformação e rotação de objetos.
             </span>
            </p>
            <p class="align-center">
                <button class="btn">Ver Código</button>
            </p>
        </div>
        <div class="col-md-6"> 
            <div id="drawning_css">   
                <div id="puppet">
                    <div id="head">
                        <div class="blocks top">
                            <span></span>
                        </div>
                        <div class="blocks side"></div>
                        <div class="blocks face">
                            <span id="eye-l"></span>
                            <span id="eye-r"></span>
                            <span id="mouth"></span>
                        </div>
                    </div>
                    <div id="armrest-l">
                        <div class="blocks side"></div>
                        <div class="blocks front"></div>
                    </div>
                    <div id="torso">
                        <div class="blocks side"></div>
                        <div class="blocks front"></div>                        
                    </div>                    
                    <div id="armrest-r">
                        <div class="blocks front"></div>
                    </div>
                    <div id="waist">
                        <div class="blocks path1"></div>
                        <div class="blocks path2"></div>
                    </div>
                    <div id="legs">
                        <div id="leg-l">
                            <div class="blocks side"></div>
                            <div class="blocks front"></div>
                            <div class="blocks sole"></div>
                        </div>                        
                        <div id="leg-r">
                            <div class="blocks front"></div>
                        </div>  
                    </div>
                </div>
                <div id="paperbox">
                    <div class="side top"></div>
                    <div class="side left float-l"></div>
                    <div class="side right"></div>
                    <div id="sphere"></div>
                </div>
            </div>
        </div>  
    </div>
    <div class="grid-row">
        <div class="col-md-12 align-center" style="margin-top: 15px;">
            <strong class="auto-center" style="color:#f64">Animações Interativas</strong>
            <p class="IE-alert">Obs: Browser incompatível para as animações. Atualize o seu navegador</p>
        </div>
        <div class="col-md-4">
            <div id="aquamask" class="source-animate">        
                <svg>
                   <image xlink:href="assets/img/base/brush_golden.jpg" /> 
                </svg> 
                <svg> 
                    <defs>
                        <clipPath id="cursor">
                            <circle id="mask-circle" cx="0" cy="0" r="15%" />
                        </clipPath>
                    </defs>
                    <g clip-path="url(#cursor)">
                        <image xlink:href="assets/img/base/brush_night.jpg"/>
                    </g>
                </svg>    
           <!-- <img class="ms-explorer" src="assets/img/base/screen_aquamask.jpg" width="100%" height="auto"> -->
            <script src="assets/js/src_animate/aquamask.js"></script>
            </div>
            <dt class="caption align-center"> Passe o cursor sobre a imagem para ver o efeito </dt>                
        </div>
        <div class="col-md-4">
            <div id="platform" class="source-animate">               
                <div id="scene">           
                    <div id="ball"></div>             
                    <div class="tonnel left">
                        <div class="area"></div>
                        <div class="mask"></div>
                    </div> 
                    <div class="tonnel right">
                        <div class="area"></div>
                        <div class="mask"></div>
                    </div>   
                    <div class="colision left"></div>  
                    <div class="colision right"></div>
                    <button></button>
                </div>
                <script src="assets/js/src_animate/platform.js"></script>
            </div>
            <dt class="caption align-center"> Clique na alavanca para abrir ou fechar o buraco </dt>
        </div>       
        <div class="col-md-4">
            <div id="frog" class="source-animate">
                 <img src="assets/img/frog/elm-normal.png" id="image" />
                 <div id="avatar" class="auto-center">
                <!-- <img src="assets/img/frog/elm-normal.png"> -->
                </div> 
                <div id="relva">
                    <div class="content">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="content">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="cursor">
                    <div class="mask grid-1-1" ></div>
                    <div class="mask grid-1-2" ></div>
                    <div class="mask grid-1-3" ></div>
                    <div class="mask grid-2-1" ></div>
                    <div class="mask grid-2-2" ></div>
                    <div class="mask grid-2-3" ></div>
                    <div class="mask grid-3-1" ></div>
                    <div class="mask grid-3-2" ></div>
                    <div class="mask grid-3-3" ></div>
                </div>
                <script src="assets/js/src_animate/frog.js"></script>
            </div> 
            <dt class="caption align-center"> Faça o sapo olhar para a mosca ao passar o cursor no cenário </dt>
            <dt class="caption align-center" style="display: none"> Para o sapo olhar pressione em algum local do cenário </dt>
        </div>
        <div class="col-md-4"> 
            <div id="cube3D" class="source-animate">
                <div id="element">
                    <div class="side front">
                        <div class="path"></div>
                    </div>           
                    <div class="side back">
                        <div class="path"></div>
                    </div>
                    <div class="side left"></div>
                    <div class="side right"></div>
                    <div class="side top">
                        <div class="path"></div>
                    </div>
                    <div class="side bottom">
                        <div class="path"></div>
                    </div>                      
                </div>    
                <div id="controller">
                    <i class="fas fa-caret-square-left btn btn-left"></i>
                    <i class="fas fa-caret-square-up btn btn-up"></i>
                    <i class="fas fa-caret-square-down btn btn-down"></i>
                    <i class="fas fa-caret-square-right btn btn-right"></i>
                    <i class="fas fa-stop btn"><span></span></i>
                </div>
                <script src="assets/js/src_animate/cube3D.js"></script>               
            </div>
            <dt class="caption align-center"> Clique nos botões para girar o cubo </dt>                    
        </div>
        <div class="col-md-4"> 
            <div id="tomato" class="source-animate">
                <div id="element">
                    <div id="topknot"><img  src="assets/img/tomato/gif.gif" /> </div>
                    <div id="eyes" class="auto-center">          
                        <div class="eyeball left">
                            <img src="assets/img/tomato/olho.png" />
                        </div>
                        <div class="eyeball right"> 
                            <img src="assets/img/tomato/olho.png" />
                        </div>
                    </div> 
                    <div id="mouth" class="auto-center" ondrop="tomatoDrop(event)" ondragover="allowDrop(event)">
                        <img src="assets/img/tomato/boca0.png" />
                    </div>
                </div>
                <div id="panel" ondrop="noneDrop(event)"  ondragover="allowDrop(event)"> 
                    <div class="thumbnail auto-middle">
                        <img src="assets/img/tomato/boca1.png" id="item1" />
                    </div>
                    <div class="thumbnail auto-middle">
                        <img src="assets/img/tomato/boca2.png" id="item2" />
                    </div>
                    <div class="thumbnail auto-middle">
                        <img src="assets/img/tomato/boca3.png" id="item3" />
                    </div>
                    <div class="thumbnail auto-middle">
                        <img src="assets/img/tomato/boca4.png" id="item4" />
                    </div>
                    <div class="thumbnail auto-middle">
                        <img src="assets/img/tomato/boca5.png" id="item5" />
                    </div>
                     <div class="thumbnail auto-middle">
                        <img src="assets/img/tomato/boca6.png" id="item6" />
                    </div>
                </div> 
                <button class="btn" id="path7">Reset</button>
                <script src="assets/js/src_animate/tomato.js"></script>
            </div> 
            <dt class="caption align-left">                 
                1- Escolha uma miniatura ao lado, arraste-a até a boca e solte. <br>
                2- Mova os olhos para qualquer posição. <br>
                3- Clique no botão para voltar ao normal.               
            </dt>            
        </div>
        <div class="col-md-4">
            <div id="the_game" class="source-animate">          
                <div id="scene"  tabindex="0">
                    <div id="avatar">
                    <!-- <div id="image"></div> -->
                    </div>
                    <div class="colision block1"></div>
                    <div class="colision block2"></div>
                    <div class="colision block3"></div>
                    <div class="colision block4"></div>
                    <div class="colision block5"></div>
                    <div class="colision block6"></div>
                    <div class="colision block7"></div>
                    <div class="colision danger"></div>
                    <div class="bonus item1"></div>
                    <div class="bonus item2"></div>
                    <!-- <div id="coordinates" style="color:#000;position: absolute;top: 0;"></div> -->
               </div>
               <div id="controller">
                    <div class="float-l">
                       <i class="fal fa-square-o btn btn-left"></i>
                       <i class="fal fa-square-o btn btn-up"></i>
                       <i class="fal fa-square-o btn btn-down"></i>
                       <i class="fal fa-square-o btn btn-right"></i>
                   </div>
                   <div class=" float-r auto-middle">
                    <i class="fal fa-circle-o btn btn-jump"></i>
                    </div>
               </div>
               <script src="assets/js/src_animate/the_game.js"></script>
            </div>
            <dt class="caption align-center"> 
                Clique no cenário acima e utilize os comandos a seguir:
                <span>
                    Mover - use as teclas <span>A</span> ou <span>D</span>. <br>
                    Pulo - use a tecla <span>L</span><br>
                    Escalar - pulo + tecla <span>W</span> <br>
                    Descer - pulo + tecla <span>S</span> <br>
                </span>
                <span style="display:none;">
                    Mover - direcionais <span>Esquerda</span> ou <span>Direita</span>. <br>
                    Pulo - pressione o botão <span>O</span> <br>
                    Escalar - pulo + direcional <span>Cima<span> <br>
                    Descer - pulo + direcional <span>Baixo</span> <br>
                </span>
            </dt>  
        </div>   
    </div>
</div>
<script type="text/javascript">
   $('.source-animate').on('contextmenu', function(e){
        e.preventDefault();
    }, false)
    
     $('.source-animate').on('pointerdown', function(){
        $('body').addClass('touch-none')
    })
    
    $('.source-animate').on('pointerout', function(){
        $('body').removeClass('touch-none')
    })
    

</script>








