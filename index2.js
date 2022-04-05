const root = document.querySelector(':root')
const player = document.querySelector('.bird')
const centro = document.querySelector('.centro')
const info = document.querySelector('.info')
const btn = document.querySelector('.btn')

const pi = Math.PI
let centroX = 400
let centroY = 400
let angulo = 0
let raio = 150
let velocidadeLinear = 70
let inimigoVelocidade = 4

centro.style.setProperty('--centroY', centroY + 'px')
// mover o boneco

restart()

function movePlayer() {
    setInterval(function () {
        let velocidadeAngular = velocidadeLinear / raio
        root.style.setProperty('--positionX', centroX + Math.cos(angulo * (pi / 180)) * raio - 10 + "px")
        root.style.setProperty('--positionY', centroY + Math.sin(angulo * (pi / 180)) * raio - 10 + "px")
        angulo = angulo + velocidadeAngular
        if (angulo >= 360) {
            angulo = 0
        }

        info.innerHTML = `Raio: ${raio}<br>Velocidade${inimigoVelocidade}`
    }, 1);
}

// spawnar os bixos
function spawn() {
    setInterval(function () {
        const enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.style.setProperty('--enemyX', '1400px')
        enemy.style.setProperty('--enemyY', randomNumber(40, 740) + 'px')
        root.append(enemy)
    }, 400)
}

// move os bixos
function moveEnemy() {
    setInterval(function () {
        let enemys = document.querySelectorAll('.enemy')
        enemys.forEach(element => {
            element.style.setProperty('left', getComputedStyle(element).getPropertyValue('left').slice(0, -2) - inimigoVelocidade + 'px')
            if (Math.abs(getComputedStyle(element).getPropertyValue('left').slice(0, -2) - getComputedStyle(root).getPropertyValue('--positionX').slice(0, -2)) <= 6 && Math.abs(getComputedStyle(element).getPropertyValue('top').slice(0, -2) - getComputedStyle(root).getPropertyValue('--positionY').slice(0, -2)) <= 6) {
                gameOver()
            }
            if (getComputedStyle(element).getPropertyValue('left').slice(0, -2) < 0) {
                element.remove()
            }
        })
        // enemys.style.setProperty('--enemyX',)
    }, 10)
}

function gameOver() {
    clearInterval(movePlayer)
    clearInterval(spawn)
    clearInterval(moveEnemy)
    btn.style.setProperty('display', 'block')
}

function restart() {
    let enemys = document.querySelectorAll('.enemy')
    enemys.forEach(element => {
        element.remove()
    })
    movePlayer()
    moveEnemy()
    spawn()
    btn.style.setProperty('display', 'none')
}


// 40 740
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


document.addEventListener("keypress", e => {

    if (e.key == 'w' && raio < 350) {
        raio += 10
    }
    if (e.key == 's' && raio > 50) {
        raio -= 10
    }
});