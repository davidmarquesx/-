var imageElement = document.querySelector('#aquamask svg:first-child');
var maskedElement = document.querySelector('#aquamask #cursor #mask-circle');
var svgPoint = imageElement.createSVGPoint();

    function cursorPoint(aqua, svg) {
        svgPoint.x = aqua.clientX;
        svgPoint.y = aqua.clientY;
        return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    }
    function update(svgCoords) {
        maskedElement.setAttribute('cx', svgCoords.x);
        maskedElement.setAttribute('cy', svgCoords.y);
    }
    document.querySelector('#aquamask').addEventListener('pointermove', function(aqua) {
        $(maskedElement).removeClass('aquamaskMove'); $('#aquamask svg:nth-child(2)').css('opacity','1');
        update(cursorPoint(aqua, imageElement));
        setTimeout(maskStop, 3000); 
    }, false);

    function maskStop() {          
        $(maskedElement).addClass('aquamaskMove');
    }
