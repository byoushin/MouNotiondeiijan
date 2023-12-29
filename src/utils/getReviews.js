import dbAxios from "./dbAxios";

const getReviews = async (animeId) => {
  const PATH = "databases/d571c5897d854e54bd89275d12338a35/query";

  const requestBody = {
    filter: {
      property: "anime_id",
      rich_text: { equals: animeId },
    },
  };

  try {
    const response = await dbAxios.post(PATH, requestBody);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getReviews;
