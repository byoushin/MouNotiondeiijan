import dbAxios from "./dbAxios";

const postReview = async (review) => {
  const PATH = "pages";
  const DATABASE_ID = "d571c589-7d85-4e54-bd89-275d12338a35";
  const data = {
    parent: { database_id: DATABASE_ID },
    properties: {
      title: { title: [{ text: { content: review.title } }] },
      body: { rich_text: [{ text: { content: review.body } }] },
      anime_id: { rich_text: [{ text: { content: review.animeItemId } }] },
      overall_rating: { number: review.overallRating },
      stories_rating: { number: review.storiesRating },
      pictures_rating: { number: review.picturesRating },
      music_rating: { number: review.musicRating },
    },
  };

  try {
    const response = await dbAxios.post(PATH, data);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default postReview;
