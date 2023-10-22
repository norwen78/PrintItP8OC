const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"class":"dot_selected"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"class":"dot_selected"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"class":"dot_selected"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"class":"dot_selected"
	}
]

let numero = 0;

const carousselArrowLeft = document.getElementById("arrow_left").addEventListener("click", function () {
	carousselSlide(-1);
	carousselDotLeft();
	console.log("Vous avez cliqué sur le bouton gauche");
});

const carousselArrowRight = document.getElementById("arrow_right").addEventListener("click", function () {
	carousselSlide(1);
	carousselDotRight();
	console.log("Vous avez cliqué sur le bouton droite");
});

function carousselSlide(sens) {
	numero = numero + sens;
	if (numero > slides.length -1)
	   numero = 0;
	   if (numero < 0)
	   numero = slides.length -1;
	document.getElementById("image_carroussel").src = './assets/images/slideshow/' + slides[numero]['image'];
	document.getElementById("text_caroussel").innerHTML = slides[numero]['tagLine'];
}

function carousselDotRight() {
	let dots = document.querySelectorAll(".dot");
	let dot_selected = document.querySelector(".dot_selected");
	dot_selected.classList.remove("dot_selected");
	if(dot_selected.nextElementSibling)
	   dot_selected.nextElementSibling.classList.add("dot_selected");
    else
	dots[0].classList.add("dot_selected");
}

function carousselDotLeft() {
	let dots = document.querySelectorAll(".dot");
	let dot_selected = document.querySelector(".dot_selected");
	dot_selected.classList.remove("dot_selected");
	if(dot_selected.previousElementSibling)
	   dot_selected.previousElementSibling.classList.add("dot_selected");
    else
	dots[0].classList.add("dot_selected");
}