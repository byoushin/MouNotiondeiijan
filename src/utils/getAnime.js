import createDbAxios from "./createDbAxios";

const getAnime = async () => {
  const animeAxios = createDbAxios("databases/9ec213bc61bd4af5bbdfc74b844cb4b7/query")

  try {
    const response = await animeAxios.post();
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getAnime;
