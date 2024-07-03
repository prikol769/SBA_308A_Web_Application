const cardsWrapper = document.getElementById("cards-wrapper");

export const createCard = (cardInfo) => {
  console.log(cardInfo, "cardInfo");
  const cardElDiv = document.createElement("div");
  cardElDiv.classList.add("card");

  const AEl = document.createElement("a");
  const imgEl = document.createElement("img");
  imgEl.src = cardInfo.image.url;
  const h2El = document.createElement("h2");
  h2El.textContent = cardInfo.name;
  AEl.appendChild(imgEl);
  AEl.appendChild(h2El);
  cardElDiv.appendChild(AEl);

  const cardContentEl = document.createElement("div");
  cardContentEl.classList.add("card-content");
  const cardDescEl = document.createElement("div");
  cardDescEl.textContent = cardInfo.bred_for;
  cardDescEl.classList.add("card-desc");

  cardContentEl.appendChild(cardDescEl);

  cardElDiv.appendChild(cardContentEl);

  cardsWrapper.appendChild(cardElDiv);
};
