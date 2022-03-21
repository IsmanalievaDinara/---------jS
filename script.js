const firstNum = document.querySelector('#firstNum')
const secondNum = document.querySelector('#secondNum')
const button = document.querySelector('#btn')
resultDiv = document.querySelector('#result')

function multiplyFunc(event) {
    let sum = +(firstNum.value) + + (secondNum.value)
    resultDiv.innerHTML = sum
}
 

