let somma = 0;
let media = 0;

let printSomma = document.getElementById("somma");
let printMedia = document.getElementById("media");


for(let i = 0; i < 10; i++) {
    somma += i+1;
    console.log(somma);
}

media = somma / 10;

printSomma.innerHTML = "La somma dei primi 10 numeri è " + somma;
printMedia.innerHTML = "La media dei primi 10 numeri è " + media;

