import dbAxios from "./dbAxios";

const postReview = (review) => {
  const PATH = "pages";
  const DATABASE_ID = "d571c589-7d85-4e54-bd89-275d12338a35";

  const title = { title: [{ text: { content: review.title } }] };
  const body = { rich_text: [{ text: { content: review.body } }] };
  const animeId = { rich_text: [{ text: { content: review.animeId } }] };
  const overallRating = { number: review.overallRating };
  const storiesRating = { number: review.storiesRating };
  const picturesRating = { number: review.picturesRating };
  const musicRating = { number: review.musicRating };

  const requestBody = {
    parent: { database_id: DATABASE_ID },
    properties: {
      title: title,
      body: body,
      anime_id: animeId,
      overall_rating: overallRating,
      stories_rating: storiesRating,
      pictures_rating: picturesRating,
      music_rating: musicRating,
    },
  };

  const logError = (error) => {
    console.error(error);
  };

  dbAxios.post(PATH, requestBody).catch(logError);
};

export default postReview;
