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

//Bullet point//
  const dotsContainer = document.querySelector('.dots'); //appeler la classe de mes dots//
  
  function createDot() {
slides.forEach((_, index) => { //j'appele les slides de mon tableau pour y attribuer un dot à chacune// 
	const dot = document.createElement('span'); //je creer sur mon html des span pour chaque dots//
  dot.classList.add('dot'); //propriétées appliquées à mes dots"
  dotsContainer.appendChild(dot); //je creer l'element enfant dans l'element parent dotscontainer// 
});
 document.querySelectorAll('.dots .dot')[0].classList.add('dot_selected');
}
createDot();



//Evenement click sur fléche slider//
function arrowleftClick() { // je creer une fonction pour pouvoir la réutiliser plus tard dans mon code//
  const currentdot = document.querySelectorAll('.dots .dot'); //j'apelle les class de mon bullet point//
  currentdot[currentIndex].classList.remove('dot_selected'); // je leur enleve le remplissage du bouton//
  if (currentIndex > 0) {
    currentIndex--; // si je suis sur la première slide, je recule en arrière 0 --> 3 dans mon tableau//
  } else {
    currentIndex = slides.length - 1; //sinon on revient sur la denrière slide (boucle)//
  }
  currentdot[currentIndex].classList.add('dot_selected'); //dotselected permet de remplir le bullet point de la slide// 
  updateSlide(currentIndex); //mettre à jour la slide --> fonction qui met à jour texte, titre, alt//
  console.log("Flèche gauche cliquée"); // pour vérifier sur console//
}

const arrow_left = document.querySelector('.arrow_left');
arrow_left.addEventListener('click', arrowleftClick);



function arrowrightClick() {
  const currentdot = document.querySelectorAll('.dots .dot');
  currentdot[currentIndex].classList.remove('dot_selected'); //j'apelle tous les bullet point et leur supprime le dot selectif//
  currentIndex++; //pour avancer//
  if (currentIndex > slides.length - 1) { 
    currentIndex = 0;//revenir à la première slide si j'arrive à la fin de slide = boucle//
  }
  currentdot[currentIndex].classList.add('dot_selected'); //je remplis le dot sur bullet actif//
  updateSlide(currentIndex); //mis à jour elements de la slide// 
  console.log("Flèche droite cliquée");
}

const arrow_right = document.querySelector('.arrow_right');
arrow_right.addEventListener('click', arrowrightClick); //creation de const pour réutilisé la constante plus tard facilement//



//banner//

let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img"); 
const bannerText = document.querySelector("#banner p"); // je donne à la slide acutelle une image ainsi qu'un//


function updateSlide(index) { //elements qui vont changer au changement de slide//
  const slide = slides[index];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`; //chemin de la nouvelle image//
  bannerImg.alt = `Image slide ${index + 1}`; //texte associé à nouvelle image//
  bannerText.innerHTML = slide.tagLine; //tagline de la slide//
}
