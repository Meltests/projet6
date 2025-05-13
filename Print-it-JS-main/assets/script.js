//tableau images de mon slider//
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
]

//Evenement click sur fléche slider//
document.querySelector('.arrow_left').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--; // -- pour l'ordre antichronologique//
  } else {
    currentIndex = slides.length - 1; //slide lenght pour calculer nombre d'element dans l'index// 
  }
  updateSlide(currentIndex);
  console.log("Flèche gauche cliquée");
});

document.querySelector('.arrow_right').addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++; //ici ++ pour avancer dans le tableau index en ordre chronologique// 
  } else {
    currentIndex = 0;
  }
  updateSlide(currentIndex);
  console.log("Flèche droite cliquée");
});


//Bullet point//
  const dotsContainer = document.querySelector('.dots'); //appeler la classe de mes dots//

slides.forEach((_, index) => { //j'appele les slides de mon tableau pour y attribuer un dot à chacune// 
	const dot = document.createElement('span'); //je creer sur mon html des span pour chaque dots//
  dot.classList.add('dot'); //propriétées appliquées à mes dots"
  dotsContainer.appendChild(dot); //je creer l'element enfant dans l'element parent dotscontainer//
  if (index === 0) {
  dot.classList.add('dot_selected'); // à modifier car non fonctionnel : provisoir//
} //le dot de la page sera remplis car c'est celui selectionné// 
});


//banner//

let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p"); 


function updateSlide(index) { //elements qui vont changer au changement de slide//
  const slide = slides[index];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`; //chemin de la nouvelle image"
  bannerImg.alt = `Image slide ${index + 1}`; //texte associé à nouvelle image//
  bannerText.innerHTML = slide.tagLine; //tagline de la slide//
}
