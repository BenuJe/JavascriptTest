function count(text, Number) {

    for (let i = 1;  i <= Number; i++) {
        document.write(i + " : " + text + "<br>" );
    }
};

function multiplier(nombre1, nombre2) {
    let resultat = nombre1*nombre2;
    document.write("La multiplication de " + nombre1 + " par " + nombre2 + " est égale a " + resultat );
}



//On vient selectionner le bouton dans le html
let BtnEnvoyer = document.querySelector("#test1");
//Quand l'evenement click est posé dessus alors :
BtnEnvoyer.addEventListener("click", function btn(){
    //#name car nous cherchons un ID !
    let LeNom = document.querySelector("#name").value;

    let LeChiffre = document.querySelector("#number").value;

    console.log("La valeur du nom est : " + LeNom);
    console.log("La valeur du chiffre est : " + LeChiffre);

    count(LeNom, LeChiffre);
});

let BtnEnvoyer2 = document.querySelector("#test2");

BtnEnvoyer2.addEventListener("click", function btn2(){

    let LeChiffre1 = document.querySelector("#Form2Number").value;
    let LeChiffre2 = document.querySelector("#Form2Number2").value;

    console.log("La valeur du chiffre 1 est de : " + LeChiffre1);
    console.log("La valeur du chiffre 2 est de : " + LeChiffre2);

    multiplier(LeChiffre1, LeChiffre2);
});