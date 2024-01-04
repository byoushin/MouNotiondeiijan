const getRatingAverages = (reviewsState, targetAnime) => {
  const isTargetReview = (review) => {
    const currentAnimeId = review.properties.anime_id.rich_text[0].text.content;
    return currentAnimeId === targetAnime;
  };
  const targetReviews = reviewsState.filter(isTargetReview);
  const targetReviewsLength = targetReviews.length;

  const totalRatings = [0, 0, 0, 0];

  const getTotals = (review) => {
    const reviewProperties = review.properties;

    const overall = reviewProperties.overall_rating.number;
    const stories = reviewProperties.stories_rating.number;
    const pictures = reviewProperties.pictures_rating.number;
    const music = reviewProperties.music_rating.number;

    totalRatings[0] += overall;
    totalRatings[1] += stories;
    totalRatings[2] += pictures;
    totalRatings[3] += music;
  };
  targetReviews.map(getTotals);

  const getAverages = (total) => {
    const average = total / targetReviewsLength;

    return Math.round(average);
  };
  const ratingAverageArray = totalRatings.map(getAverages);

  const ratingAverages = {
    overall: ratingAverageArray[0],
    stories: ratingAverageArray[1],
    pictures: ratingAverageArray[2],
    music: ratingAverageArray[3],
  };

  return ratingAverages;
};

export default getRatingAverages;
