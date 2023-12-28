import createDbAxios from "./createDbAxios";

const getReviews = async () => {
  const reviewsAxios = createDbAxios("databases/d571c5897d854e54bd89275d12338a35/query")

  try {
    const response = await reviewsAxios.post();
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getReviews;
