const cardBoard = document.querySelector("#cardboard");
const imagens = [
  "card4.jpg",
  "card5.jpg",
  "card6.jpg",
  "card1.jpg",
  "card2.jpg",
  "card3.jpg"
];

let cardHTML = "";

imagens.forEach(imagens => {
  cardHTML += `<div class="memory-card" data-card="${imagens}">
    <img class="front-face" src="img/${imagens}"/>
    <img class="back-face" src="img/badge.jpg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;
const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));
