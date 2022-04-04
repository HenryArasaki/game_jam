const root = document.querySelector(':root')

const pi= Math.PI
let centroX = 400
let centroY = 400
let angulo = 0
let raio = 150
let velocidadeLinear = 80

setInterval(function(){ 
    let velocidadeAngular = velocidadeLinear/raio 
    root.style.setProperty('--positionX',centroX+Math.cos(angulo*(pi/180))*raio+"px")
    root.style.setProperty('--positionY',centroY+Math.sin(angulo*(pi/180))*raio+"px")
    angulo=angulo+velocidadeAngular
    if(angulo>=360){
        angulo=0}
}, 1);



document.addEventListener("keypress", e=>{

    if(e.key=='w' && raio<350){
        raio+=10
    }
    if(e.key=='s' && raio>50){
        raio-=10
    }
});