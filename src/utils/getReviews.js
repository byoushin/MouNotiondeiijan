import dbAxios from "./dbAxios";

const getReviews = async () => {
  const PATH = "databases/d571c5897d854e54bd89275d12338a35/query";

  try {
    const response = await dbAxios.post(PATH);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getReviews;
