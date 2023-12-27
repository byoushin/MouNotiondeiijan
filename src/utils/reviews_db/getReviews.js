import reviewsAxios from "./reviewsAxios";

const getReviews = async () => {
  try {
    const response = await reviewsAxios.post("/query");
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getReviews;
