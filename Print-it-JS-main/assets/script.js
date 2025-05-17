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
function arrowLeftClick() { //je creer une fonction pour pouvoir la réutiliser//
  const arrow_left = document.querySelector('.arrow_left'); 
  arrow_left.addEventListener('click', () => {
    const currentdot = document.querySelectorAll('.dots .dot'); // j'appelle les class de mon bullet point//
    currentdot[currentIndex].classList.remove('dot_selected'); // je leur enleve le remplissage//
    if (currentIndex > 0) {
      currentIndex--; //si je suis sur la 1er slide, je recule dans l'index//
    } else {
      currentIndex = slides.length - 1; //sinon on reviens sur dernière slide(boucle)//
    }
    currentdot[currentIndex].classList.add('dot_selected'); // sélectionner le nouveau
    updateSlide(currentIndex); // mettre à jour la slide//
    console.log("Flèche gauche cliquée");
  });
}
arrowLeftClick();



function arrowRightClick() {
  const arrow_right = document.querySelector('.arrow_right'); // j'appele la flèche droite//
  arrow_right.addEventListener('click', () => {
    const currentdot = document.querySelectorAll('.dots .dot'); // j'applique les class dots//
    currentdot[currentIndex].classList.remove('dot_selected'); // retire le remplissage//
    currentIndex++; // j'avance dans le slider (index +1)//
    if (currentIndex > slides.length - 1) {
      currentIndex = 0; // revenir à la première slide si on dépasse la dernière//
    }
    currentdot[currentIndex].classList.add('dot_selected'); // j'active le dot sur la slide active//
    updateSlide(currentIndex); //mettre à jour la slide texte, alt, img//
    console.log("Flèche droite cliquée");
  });
}
arrowRightClick();



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
