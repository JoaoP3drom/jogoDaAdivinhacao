const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNum')


let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


btnTry.addEventListener('click', tryClick)
btnReset.addEventListener('click', reset)
document.addEventListener('keydown', resetEnter)

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function tryClick(e) {
  e.preventDefault()

  if (inputNumber.value == randomNumber) {
    toggleScreen()
    screen2.querySelector('h1').innerText = `Você acertou em ${xAttempts} tentativas`
  } else if (inputNumber.value > 10 || inputNumber.value < 0 || inputNumber.value == '') {
    alert('Digite somente números de 0 a 10')
    return
  }
  xAttempts++
  inputNumber.value = ""
}

function reset() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function resetEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    reset()
  }
}