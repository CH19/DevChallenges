"use strict";
// const canv: HTMLCanvasElement = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// var x = 200; // coordenada x del centro de la estrella
// var y = 200; // coordenada y del centro de la estrella
// var outerRadius = 100; // radio externo de la estrella
// var innerRadius = 50; // radio interno de la estrella
// context.beginPath();
// for (var i = 0; i < 10; i++) {
//     var radius = (i % 2 === 0) ? outerRadius : innerRadius;
//     var angle = i * Math.PI / 5;
//     context.lineTo(x + radius * Math.sin(angle), y - radius * Math.cos(angle));
// }
// context.closePath();
// context.lineWidth = 5;
// context.strokeStyle = "black";
// context.stroke();
// const twoo = new Two({type: Two.CanvasRenderer,fullscreen: false, width: canvas.width, height: canvas.height }).appendTo(context);
// var styles = {
//     size: 18,
//     family: 'Lato'
// } 
//   var rectA = twoo.makeRectangle(150, 100, 200, 100);
//   rectA.stroke = 'orange';
//   twoo.makeText('Rectangle', 150, 100, styles);
//   var rectB = twoo.makeRoundedRectangle(400, 100, 200, 100, 10);
//   rectB.stroke = 'blue';
//   rectB.linewidth = 5;
//   twoo.makeText('Rounded Rectangle', 400, 100, styles);
//   var rectC = twoo.makeRoundedRectangle(650, 100, 200, 100, 50);
//   rectC.stroke = 'green';
//   rectC.linewidth = 2;
//   twoo.makeText('Rounded Rectangle (II)', 650, 100, styles);
//   var circA = twoo.makeCircle(150, 250, 75);
//   circA.fill = 'yellow';
//   circA.noStroke();
//   twoo.makeText('Circle', 150, 250, styles);
//   var ellipseA = twoo.makeEllipse(400, 250, 100, 75);
//   ellipseA.fill = 'pink';
//   ellipseA.stroke = 'red';
//   ellipseA.linewidth = 4;
//   twoo.makeText('Ellipse', 400, 250, styles);
//   var ellipseB = twoo.makeStar(650, 300, 75, 100, 5);
//   ellipseB.fill = 'white';
//   ellipseB.stroke = 'black';
//   ellipseB.linewidth = 20;
//   twoo.makeText('Ellipse (II)', 650, 300, styles);
// //   context?.drawImage(ellipseB, 100, 100)
//   twoo.update();
// import Two from 'two.js'
// import { Children } from 'two.js/src/children';
const two = new Two({
    fullscreen: false,
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
    type: Two.Types.canvas,
});
const main = document.getElementById('main');
two.appendTo(main);
const canv = document.getElementsByTagName('canv')[1];
canv.classList.add('nubesitas');
const vertexSize = 12;
const vertexOutLineSize = vertexSize / 4;
const vertexGroup = two.makeGroup();
const edgeSize = vertexOutLineSize;
const edgeRenderingGroup = two.makeGroup();
two.makeStar(100, 100, 23, 4, 5);
canv.onclick = (event) => {
    const vertices = vertexGroup.children;
    // x and y postion of the click event
    let x = event.offsetX;
    let y = event.offsetY;
    console.log({ y, x });
    let vertex = two.makeStar(x, y, 15, 12, 5);
    const edgeGroup = two.makeGroup();
    vertex.fill = '#9911ff';
    vertex.linewidth = vertexOutLineSize;
    // if(vertices.length > 1){
    //     createEdge(x,y, vertices)
    // }
    vertexGroup.add(vertex);
};
two.play();
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function createEdge(fromX, fromY, currentVertices) {
    const numEdges = rand(1, currentVertices.length - 1);
    for (let i = 0; i < numEdges; i++) {
        let randIndex = rand(0, currentVertices.length - 1);
        let randVertex = currentVertices[randIndex];
        let edge = two.makeLine(fromX, fromY, fromX, fromY);
        edge.stroke = 'black';
        edge.linewidth = edgeSize;
        edge.finalX = randVertex.translation.x;
        edge.finalY = randVertex.translation.y;
        edgeRenderingGroup.add(edge);
    }
}
// function linePosition(line, start})
