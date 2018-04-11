/* COMPTE A REBOURS */



/* TOUCHES CLAVIER NUMERIQUE */
function un() {
  var x= document.getElementById("un").value;
  var valeur= document.getElementById("resultat").value;

  document.getElementById("resultat").value = valeur + x;
}

function deux() {
  var x= document.getElementById("deux").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function trois() {
  var x= document.getElementById("trois").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function quatre() {
  var x= document.getElementById("quatre").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function cinq() {
  var x= document.getElementById("cinq").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function six() {
  var x= document.getElementById("six").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function sept() {
  var x= document.getElementById("sept").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function huit() {
  var x= document.getElementById("huit").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function neuf() {
  var x= document.getElementById("neuf").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function zero() {
  var x= document.getElementById("zero").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

document.getElementById("clear").onclick = function clear() {
  document.getElementById("resultat").value= "";
}
