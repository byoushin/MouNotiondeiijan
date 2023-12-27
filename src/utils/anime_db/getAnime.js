import animeAxios from "./animeAxios";

const getAnime = async () => {
  try {
    const response = await animeAxios.post("/query");
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getAnime;
