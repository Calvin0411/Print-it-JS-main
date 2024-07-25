//déclaration de mes varibales de mon tableau

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

console.log("Hello World!");

//déclaration de mes variables d'éléments classes
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("p");
const dots = document.querySelectorAll(".dot");

let slidePrincipale = 0; 

function carrousel() {
    // Met à jour la source de l'image
    bannerImg.src = './assets/images/slideshow/' + slides[slidePrincipale].image;
    
    // Met à jour la description
    bannerText.innerHTML = slides[slidePrincipale].tagLine;

    // Met à jour les points de navigation
    dots.forEach((dot, index) => {
        // Vérifie si le dot est sélectionné
        if (index === slidePrincipale) {
            // Si le dot est bon, elle ajoute la classe
            dot.classList.add("dot_selected");
        } else {
            // Sinon,  elle retire la classe
            dot.classList.remove("dot_selected");
        }
    });
}

//écouteurs d'événements pour mes flèches
arrowLeft.addEventListener("click", function() {
		console.log ("j'ai cliqué sur le bouton gauche")

    if (slidePrincipale === 0) {
        slidePrincipale = slides.length - 1; // Passe à la dernière diapositive si elle est à la première
    } else {
        slidePrincipale--; // sinon elle passe à la diapositive précédente
    }
    carrousel(); // Met à jour l carrousel 
});

arrowRight.addEventListener("click", function() {
		console.log ("j'ai cliqué sur le bouton droit")
    if (slidePrincipale === slides.length - 1) {
        slidePrincipale = 0; // Revenient à la première diapositive si elle est à la dernière
    } else {
        slidePrincipale++; // Passe à la diapositive suivante
    }
    carrousel();
});


