import { getDogs, getBreedById, getImageByBreedId } from "./requestsApi.js";
import { createCard, addedBreedInfo } from "./createDomEl.js";

const cardsWrapper = document.getElementById("cards-wrapper");
const loadMoreBtn = document.getElementById("load-btn");

const limit = 10;

const initialLoad = async () => {
  const dogs = await getDogs(limit);

  console.log(dogs, "dogs");

  dogs.forEach((dog) => {
    createCard(dog);
  });

  cardHandler(dogs[0].id, dogs[0].reference_image_id);
};

initialLoad();

loadMoreBtn.addEventListener("click", async () => {
  const dogs = await getDogs(limit);

  dogs.forEach((dog) => {
    createCard(dog);
  });
});

export const cardHandler = async (breedId, reference_image_id) => {
  const breedData = await getBreedById(breedId);
  const breedImage = await getImageByBreedId(reference_image_id);
  console.log(breedImage.url, "breedImage");
  addedBreedInfo(breedData, breedImage.url);
  console.log(breedData, "breedData");
};
