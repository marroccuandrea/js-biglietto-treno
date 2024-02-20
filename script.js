//1.
const distanza = parseFloat(prompt('Inserisci la distanza che devi percorrere in km'));
console.log(distanza);

//2.
const eta = prompt('Inserisci la tua età');
console.log(eta);

//3.
let prezzo = parseFloat((distanza * "0.21").toFixed(2));
console.log(prezzo);

//4.


if (eta < 18) {
    console.log('Applico sconto 20%');
    sconto = parseFloat((prezzo * 20) /100).toFixed(2);
    console.log(sconto);
    document.getElementById('annuncio').innerHTML = 'Hai diritto allo sconto del 20% !'
}
else if (eta > 65){
    console.log('Applico sconto del 40%');
    sconto = parseFloat((prezzo * 40) /100).toFixed(2);
    console.log(sconto);
}
else{
    console.log('Nessuno sconto applicato');
    sconto = 0;
}
const prezzoScontato = parseFloat(prezzo - sconto);
console.log(prezzoScontato);

//5.
document.getElementById('output').innerHTML = '<strong>Prezzo: </strong>' + prezzoScontato + ' €';