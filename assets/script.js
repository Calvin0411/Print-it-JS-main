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

console.log("Hello World !");
	// premier pas sur le Java Script

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function onArrowLeftClick() {
	currentIndex= (currentIndex > 0)? currentIndex - 1 :slides.length -1;
}


function onArrowRightClick() {
	currentIndex= (currentIndex > 0)? currentIndex - 1 :slides.length -1;
}


function updateSlide(index) {
	const slide = slides[index];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;
}


arrowLeft.addEventListener("click", function() {
	currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
	updateSlide(currentIndex);
	console.log("Click sur la flèche gauche");
});

arrowRight.addEventListener("click", function() {
	currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
	updateSlide(currentIndex);
	console.log("Click sur la flèche droite");
});

//Partie avec les points


dots.addEventListener("click", function(){
	currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
	updatedots(currentIndex);
	console.log("changement de point");
})

dots.addEventListener("click", function(){
	currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
	updatedots(currentIndex);
	console.log("changement de point");
})