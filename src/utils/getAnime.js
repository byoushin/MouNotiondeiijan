import dbAxios from "./dbAxios";

const getAnime = async () => {
  const PATH = "databases/9ec213bc61bd4af5bbdfc74b844cb4b7/query";

  try {
    const response = await dbAxios.post(PATH);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getAnime;
