//intro

const inputKm = prompt("Inserisci chilometraggio");
const inputAge = prompt("Inserisci età")
const priceKm = 0.21;

//svolgimento
const km = parseInt(inputKm);
const age = parseInt(inputAge);

const totalPrice = km * priceKm;
console.log("costo del biglietto", totalPrice);

let finalTotalPrice = 0;
  

if ( age < 18 ) {
    finalTotalPrice = totalPrice * 0.80;
    console.log("scontistica Under18 applicato");
} else if ( age > 65) {
     finalTotalPrice = totalPrice * 0.60;
    console.log("Scontistica Over65 applicata");
} else {
    finalTotalPrice = totalPrice;
}


//conclusione
alert(`il costo del biglietto è ${finalTotalPrice.toFixed(2)} €`);
document.getElementById("result").innerHTML = `il costo del biglietto è ${finalTotalPrice.toFixed(2)} €`;