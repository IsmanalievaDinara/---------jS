<<<<<<< HEAD
let button = document.querySelector("#changeColorBtn")
let span = document.querySelector("span")
let main = document.querySelector("main")
let hex = document.querySelector("#hex")
let simple = document.querySelector("#simple")

let simpleIsOn = true;
let hexIsOn = false;

let simpleColor = ["red", "blue", "magenta", "black", "orange","pink","green"]

hex.addEventListener("click",function () {
    hex.classList.add("active")
    simple.classList.remove("active")
    simpleIsOn = false;
    hexIsOn = true;
})

simple.addEventListener("click", function(){
    hex.classList.remove("active")
    simple.classList.add("active")
    simpleIsOn = true;
    hexIsOn = false;
})

button.addEventListener("click", function () {
    if(simpleIsOn) {
        let randomIndex = Math.floor(Math.random() * simpleColor.length)
        let randomColor = simpleColor[randomIndex]
        console.log(randomColor)
        span.innerHTML = randomColor;
        main.style.backgroundColor = randomColor
    }else {
        let randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`    
        span.innerHTML = randomHex;
        main.style.backgroundColor = randomHex;
    
    }

})

=======
>>>>>>> b955524ee57893584721528147d5fe48ed6c75c8

 

