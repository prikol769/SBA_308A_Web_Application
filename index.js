import { getDogs } from "./requestsApi.js";
import { createCard } from "./createDomEl.js";

const cardsWrapper = document.getElementById("cards-wrapper");
const loadMoreBtn = document.getElementById("load-btn");

const limit = 10;

const initialLoad = async () => {
  const dogs = await getDogs(limit);

  console.log(dogs, "dogs");

  dogs.forEach((dog) => {
    createCard(dog);
  });
};

initialLoad();

loadMoreBtn.addEventListener("click", async () => {
  const dogs = await getDogs(limit);

  dogs.forEach((dog) => {
    createCard(dog);
  });
});
