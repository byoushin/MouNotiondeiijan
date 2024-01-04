import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import getReviews from "../utils/getReviews";
import getRatingAverages from "../utils/getRatingAverages";
import Star from "./Star";
import UnfilledStar from "./UnfilledStar";

const AnimeCard = ({ anime }) => {
  const [reviews, setReviews] = useState();

  const MAX_RATING = 5;
  const STAR_WIDTH = 17;
  const STAR_HEIGHT = 16;

  const properties = anime.properties;
  const animeId = properties.anime_id.title[0].text.content;
  const thumbnailUrl = properties.thumbnail.files[0].file.url;
  const title = properties.title.rich_text[0].text.content;

  const didMount = () => {
    getReviews(setReviews);
  };
  useEffect(didMount, []);

  let rating = 0;
  if (reviews) {
    const ratingAverages = getRatingAverages(reviews, animeId);
    rating = ratingAverages.overall;
  }
  const insufficientRating = MAX_RATING - rating;

  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rating}>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
          ))}
          {[...Array(insufficientRating)].map((_, i) => (
            <UnfilledStar
              key={i + rating}
              width={STAR_WIDTH}
              height={STAR_HEIGHT}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 76,
    gap: 8,
  },
  thumbnail: {
    height: "100%",
    borderRadius: 8,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  titleContainer: {
    gap: 4,
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
  rating: {
    flexDirection: "row",
  },
  ratingStar: {},
});

export default AnimeCard;
