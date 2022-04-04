const root = document.querySelector(':root')

const pi= Math.PI
let centroX = 400
let centroY = 400
let angulo = 0
let raio = 150
let velocidadeLinear = 80

// mover o boneco
setInterval(function(){ 
    let velocidadeAngular = velocidadeLinear/raio 
    root.style.setProperty('--positionX',centroX+Math.cos(angulo*(pi/180))*raio-10+"px")
    root.style.setProperty('--positionY',centroY+Math.sin(angulo*(pi/180))*raio-10+"px")
    angulo=angulo+velocidadeAngular
    if(angulo>=360){
        angulo=0}
}, 1);

// spawnar os bixos
setInterval(function(){
    const enemy = document.createElement('div')
    enemy.classList.add('enemy')
    enemy.style.setProperty('--enemyX','1400px')
    enemy.style.setProperty('--enemyY',randomNumber(40,740)+'px')
    root.append(enemy)
},400)

// move os bixos
setInterval(function(){
    let enemys = document.querySelectorAll('.enemy')
    enemys.forEach(element=>{
        element.style.setProperty('left',getComputedStyle(element).getPropertyValue('left').slice(0,-2)-4+'px')
    })
    // enemys.style.setProperty('--enemyX',)
},10)

// 40 740
function randomNumber(min,max){
    return Math.random() * (max - min) + min;
}


document.addEventListener("keypress", e=>{

    if(e.key=='w' && raio<350){
        raio+=20
    }
    if(e.key=='s' && raio>50){
        raio-=20
    }
});