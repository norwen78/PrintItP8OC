const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

let numero = 0;

createDots()

let dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

const carousselArrowLeft = document.getElementById("arrow_left").addEventListener("click", function () {
	carousselSlide(-1);
	carousselDotLeft();
});

const carousselArrowRight = document.getElementById("arrow_right").addEventListener("click", function () {
	carousselSlide(1);
	carousselDotRight();
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

function createDots() {
	document.querySelector(".dots").innerHTML = '<p class="dot"></p>'.repeat(slides.length);
}

function carousselDotRight() {
    let dot_selected = document.querySelector(".dot_selected");
	dot_selected.classList.remove("dot_selected");
	if (dot_selected.nextElementSibling) {
		dot_selected.nextElementSibling.classList.add("dot_selected");
	}
    else {
		dots[0].classList.add("dot_selected");
	}
}

function carousselDotLeft() {
    let dot_selected = document.querySelector(".dot_selected");
	dot_selected.classList.remove("dot_selected");
	if(dot_selected.previousElementSibling) {
		dot_selected.previousElementSibling.classList.add("dot_selected");
	}
    else {
		dots[dots.length-1].classList.add("dot_selected");
	}

}