function myFunction() {
    var x = document.getElementById("one-ten")
    x.innerHTML = Math.floor((Math.random() * 10) + 1);
}

function mySecondFunction() {
    var x = document.getElementById("one-hundred")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

function myThirdFunction() {
    var x = document.getElementById("one-thousand")
    x.innerHTML = Math.floor((Math.random() * 1000) + 1);
}

function myForthFunction() {
    var x = document.getElementById("one-million")
    x.innerHTML = Math.floor((Math.random() * 1000000) + 1);
}