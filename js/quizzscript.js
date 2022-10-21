let score = document.getElementById('score');
let point = document.getElementById('point');
let start = document.getElementById('start');
let carrou = document.getElementById('carrou');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let carrouImg = document.getElementById('carrouImg');
let envoyer = document.getElementById('envoyer');
let compteurDePoint = 0;
let timer = document.getElementById('timer');
let comptTimer = document.getElementById('comptTimer');
let compteur = 0;
let temps = 30;
let decompte;
let question = document.getElementById('question');
let reponse = document.getElementById('reponse');

let quizz;
let answers = [{
    img : "img/0.jpg",
    question : "Quelle est la capitale du Canada ?",
    rep : "ottawa",
    bonneRep : false
},{
    img : "img/1.jpg",
    question : "Quelle est la capitale du Niger ?",
    rep : "niamey",
    bonneRep : false
},{
    img : "img/2.jpg",
    question : "Quelle est la capitale de la Suisse ?",
    rep : "bern",
    bonneRep : false
},{
    img : "img/3.jpg",
    question : "Quelle est la capitale du Japon ?",
    rep : "tokyo",
    bonneRep : false
},{
    img : "img/4.jpg",
    question : "Quelle est la capitale de la Bolivie ?",
    rep : "sucre",
    bonneRep : false
}];

start.addEventListener("click", devoilerQuizz);
prev.addEventListener("click", prevBtn);
next.addEventListener("click", nextBtn);
envoyer.addEventListener("click", validerLaReponse);

// pour dévoiler le quizz
function devoilerQuizz(){
   carrou.style.display = "block";
   start.style.display = "none";
   timer.style.display = "block";
   decompte = setInterval(decompteTimer, 1000);
   displayImgQuestion();
   document.getElementById("reponse").focus();
}
// pour le décompte du timer
function decompteTimer(){
    temps--;
    comptTimer.innerHTML = temps;
    if (temps === 0){
        clearInterval(decompte);
        score.innerHTML = "GAME OVER";
        timer.innerHTML = "Temps écoulé";
        reponse.style.display = "none";
        envoyer.style.display = "none";
    }
}
// pour le bouton précédent
function prevBtn(){
    compteur--;
    if (compteur === -1){
        compteur = 4;
    }
    displayImgQuestion();
    verifierReponse();
}
// pour le bouton suivant
function nextBtn(){
    compteur++;
    if (compteur === 5){
        compteur = 0;
    }
    displayImgQuestion();
    verifierReponse();
}
// compteur pour changer les images et les questions
function displayImgQuestion(){
    carrouImg.src = answers[compteur].img;
    question.innerHTML = answers[compteur].question;   
}
// pour s'assurer que la réponse donnée est bonne
function validerLaReponse(e){
    e.preventDefault();
    if (reponse.value.toLowerCase().trim() === answers[compteur].rep && !answers[compteur].bonneRep){
        point.innerHTML = ++compteurDePoint;
        answers[compteur].bonneRep = true;
        nextBtn();
    }else{
        document.getElementById("reponse").value = "";
        nextBtn();
    } 
    if (compteurDePoint === 5){
        clearInterval(decompte);     
        score.innerHTML =" Bravo vous avez gagné !<br> Votre temps est de " + (30 - temps) + " secondes";
        score.style.backgroundColor = "#ac9a66";
    }
}
// pour garder la bonne réponse dans l'input
function verifierReponse(){
    if (answers[compteur].bonneRep){
        reponse.value = answers[compteur].rep;
    }else{
        document.getElementById("reponse").value = "";
    }  
}

