import dbAxios from "./dbAxios";

const getReviews = (setState, animeId) => {
  const PATH = "databases/d571c5897d854e54bd89275d12338a35/query";
  const requestBody = {
    filter: {
      property: "anime_id",
      rich_text: { equals: animeId },
    },
  };

  const setReviews = (response) => {
    const reviews = response.data.results;
    setState(reviews);
  };
  const logError = (error) => {
    console.error(error);
  };

  dbAxios
    .post(PATH, requestBody)
    .then(setReviews)
    .catch(logError);
};

export default getReviews;
