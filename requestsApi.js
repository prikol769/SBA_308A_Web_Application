const API_KEY =
  "live_Xp7ikvHiiSV8XDllZLmCfDgTcMkiU7iHUsITcfH6iFEePdHwWCYHEGDb9wtF0Xty";

axios.defaults.baseURL = "https://api.thedogapi.com/v1";
axios.defaults.headers.common["x-api-key"] = API_KEY;

let dogsArr = [];
let reqLimit = 0;

export const getDogs = async (limit) => {
  reqLimit += limit;
  try {
    const response = await axios(`/breeds?limit=${reqLimit}`);
    const dogsData = response.data;

    const lastTenDogs = dogsData.slice(Math.max(dogsData.length - limit, 0));

    dogsArr.push(...lastTenDogs);

    return dogsArr.slice(Math.max(dogsData.length - limit, 0));
  } catch (error) {
    console.log(error);
  }
};

export const getBreedById = async (breedId) => {
  try {
    const response = await axios(`/breeds/${breedId}`);

    const dataBreed = response.data;

    return dataBreed;
  } catch (error) {
    console.log(error);
  }
};

export const getImageByBreedId = async (breedId) => {
  try {
    const response = await axios(`/images/${breedId}`);

    const dataBreed = response.data;

    return dataBreed;
  } catch (error) {
    console.log(error);
  }
};
