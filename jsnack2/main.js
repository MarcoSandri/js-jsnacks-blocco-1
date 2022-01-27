let primin = prompt('inserisci un numero');
let printCube = document.getElementById("print");

for(let i = 0; i < primin; i++) {
    
    let cube = Math.pow(i+1, 3)
    printCube.innerHTML += (i+1) + " al cubo è " + cube + "<hr>";
}