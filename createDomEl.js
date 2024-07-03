import { cardHandler } from "./index.js";

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

  cardElDiv.addEventListener("click", () =>
    cardHandler(cardInfo.id, cardInfo.reference_image_id)
  );
};

export const addedBreedInfo = (breedData, breedImage) => {
  console.log(breedData);
  const sidebarImg = document.getElementById("sidebarImg");
  sidebarImg.src = breedImage;
  const breedName = document.getElementById("breedName");
  breedName.textContent = breedData.name;
  const temperament = document.getElementById("temperament");
  temperament.textContent = breedData.temperament;

  const life_span = document.getElementById("life_span");
  life_span.textContent = breedData.life_span;

  const weight = document.getElementById("weight");
  weight.textContent = breedData.weight.imperial;

  const height = document.getElementById("height");
  height.textContent = breedData.height.imperial;

  const bred_for = document.getElementById("bred_for");
  bred_for.textContent = breedData.bred_for;
};
