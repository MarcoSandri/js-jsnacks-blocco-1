
let somma = 0;
for(let i = 0; i<10; i++) {
    let n = prompt("Inserisci il " + (i + 1) + " numero");
    somma += parseInt(n);
}

alert("La somma è " + somma);
