let formulaire = document.getElementById("form");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let adresse = document.getElementById("adresse");
let postal = document.getElementById("postal");
let ville = document.getElementById("ville");
let pays = document.getElementById("pays");
let livraision = document.getElementById("livraison");
let produit = document.getElementById("produit");
let cb = document.getElementById("cb");

// variables pour les erreurs
let errorPrenom = document.getElementById("errorPrenom");
let errorNom = document.getElementById("errorNom");
let errorAdresse = document.getElementById("errorAdresse");
let errorPostal = document.getElementById("errorPostal");
let errorVille = document.getElementById("errorVille");
let errorPays = document.getElementById("errorPays");
let errorLivraison = document.getElementById("errorLivraison");
let errorProduit = document.getElementById("errorProduit");
let errorCB = document.getElementById("errorCB");
let error = false;

//Evénements
pays.addEventListener('click', validerPays); 
formulaire.addEventListener("submit", valider);
formulaire.addEventListener('focusout', validerChamp);

//pour l'événement focusout de la validation des champs
function validerChamp(){
    validerPrenom();
    validerNom();
    validerAdresse(); 
    validerPostal();
    validerVille();
    validerPays();
    validerLivraison();
    validerProduit();
    validerCB();
} 

//pour bloquer l'envoi du formulaire
function valider(e){
    error = false;
    validerPrenom();
    validerNom();
    validerAdresse(); 
    validerPostal();
    validerVille();
    validerPays();
    validerLivraison();
    validerProduit();
    validerCB(); 
    if (error){
        e.preventDefault();
    }else if (!error){
        message.style.display = "block";
        e.preventDefault();
    }
}

//pour valider le champ prénom
function validerPrenom(){
    let re = /^[a-zA-ZàéèêïîíùÀÉÈÊÏÎÍÚ\-]+$/;
    errorPrenom.style.opacity = 0;
    if (prenom.value.trim() === ""){
        error = true;
        errorPrenom.innerHTML = "Veuillez saisir un prénom";
        errorPrenom.style.opacity = 1;
    }else if(!re.test(prenom.value)){
        error = true;
        errorPrenom.innerHTML = "Le format n'est pas valide";
        errorPrenom.style.opacity = 1;
    }
}
//pour valider le champ nom
function validerNom(){
    errorNom.style.opacity = 0;
    let re = /^[a-zA-ZàéèêïîíùÀÉÈÊÏÎÍÚ\-]+$/;
    if (nom.value.trim() === ""){
        error = true;
        errorNom.innerHTML = "Veuillez saisir un nom";
        errorNom.style.opacity = 1;
    }else if(!re.test(nom.value)){
        error = true;
        errorNom.innerHTML = "Le format n'est pas valide";
        errorNom.style.opacity = 1;
    }
}
//pour valider le champ adresse
function validerAdresse(){
    errorAdresse.style.opacity = 0;
    let re = /^[0-9a-zA-ZàéèêïîíùÀÉÈÊÏÎÍÚ\s-]+$/;
    if (adresse.value.trim() === ""){
        error = true;
        errorAdresse.innerHTML = "Veuillez saisir une adresse";
        errorAdresse.style.opacity = 1;
    }else if(!re.test(adresse.value)){
        error = true;
        errorAdresse.innerHTML = "Le format n'est pas valide";
        errorAdresse.style.opacity = 1;
    }
}
//pour valider le champ code postal
function validerPostal(){
    errorPostal.style.opacity = 0;
    let re = /^[A-Z][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
    if (postal.value.trim() === ""){
        error = true;
        errorPostal.innerHTML = "Veuillez saisir un code postal";
        errorPostal.style.opacity = 1;
    }else if(!re.test(postal.value)){
        error = true;
        errorPostal.innerHTML = "Le format n'est pas valide";
        errorPostal.style.opacity = 1;
    }
}
//pour valider le champ ville
function validerVille(){
    errorVille.style.opacity = 0;
    let re = /^[a-zA-Z\-]+$/;
    if (ville.value.trim() === ""){
        error = true;
        errorVille.innerHTML = "Veuillez saisir une ville";
        errorVille.style.opacity = 1;
    }else if(!re.test(ville.value)){
        error = true;
        errorVille.innerHTML = "Le format n'est pas valide";
        errorVille.style.opacity = 1;
    }
}
//pour valider le champ pays
function validerPays(){
    errorPays.style.opacity = 0;
    if (pays.value.trim() === "0"){
        error = true;
        errorPays.innerHTML = "Veuillez choisir un pays";
        errorPays.style.opacity = 1;
    }
}
//pour valider le champ livraison
function validerLivraison(){
    errorLivraison.style.opacity = 0;
    let userJour = new Date(livraison.value);
    let jour = new Date();
    if (livraison.value.trim() === ""){
        error = true;
        errorLivraison.innerHTML = "Veuillez choisir une date de livraison";
        errorLivraison.style.opacity = 1;
    }else if(jour >= userJour){
        error = true;
        errorLivraison.innerHTML = "Veuillez choisir une date ultérieur";
        errorLivraison.style.opacity = 1;
    }
}
//pour valider le champ produit
function validerProduit(){
    errorProduit.style.opacity = 0;
    let re = /^[1-9][0-9]*$/;
    if (produit.value.trim() === ""){
        error = true;
        errorProduit.innerHTML = "Veuillez saisir un nombre de produit";
        errorProduit.style.opacity = 1;
    }else if(!re.test(produit.value)){
        error = true;
        errorProduit.innerHTML = "Saisie incorrecte";
        errorProduit.style.opacity = 1;
    }
}
//pour valider le champ carte de crédit
function validerCB(){
    errorCB.style.opacity = 0;
    let re = /^5258\d{12}$|4540\d{12}$/; //commence par 5258 ou 4540
    if (cb.value.trim() === ""){
        error = true;
        errorCB.innerHTML = "Veuillez saisir un numéro de carte de crédit";
        errorCB.style.opacity = 1;
    }else if(!re.test(cb.value)){
        error = true;
        errorCB.innerHTML = "Doit commencer par 5258 ou 4540";
        errorCB.style.opacity = 1;
    }
}
//Partie produit et calcul
produit.addEventListener("input", function (){
    let nbrP = document.getElementById("produit").value;
    let prix = 10;
    let totalSansTaxes = nbrP * prix;
    let tps = 0.05;
    let tpsPrix = (totalSansTaxes * tps); 
    let tvq = 0.09975;
    let tvqPrix = (totalSansTaxes * tvq);
    let totalTTC = (totalSansTaxes + tpsPrix + tvqPrix); 
document.getElementById("TST").innerHTML = totalSansTaxes + "$"
document.getElementById("TPS").innerHTML = tpsPrix.toFixed(2) + "$"
document.getElementById("TVQ").innerHTML = tvqPrix.toFixed(2) + "$"
document.getElementById("TTC").innerHTML = totalTTC.toFixed(2) + "$"
}, )