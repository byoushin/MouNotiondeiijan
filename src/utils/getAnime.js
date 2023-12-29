import dbAxios from "./dbAxios";

const getAnime = (setState, requestBody = {}) => {
  const PATH = "databases/9ec213bc61bd4af5bbdfc74b844cb4b7/query";

  const setAnime = (response) => {
    const anime = response.data.results;
    setState(anime);
  };
  const logError = (error) => {
    console.log(error);
  };

  dbAxios
    .post(PATH, requestBody)
    .then(setAnime)
    .catch(logError);
};

export default getAnime;
