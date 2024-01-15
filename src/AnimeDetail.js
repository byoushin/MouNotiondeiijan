import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import getReviews from "./utils/getReviews";
import getRatingAverages from "./utils/getRatingAverages";
import LeftArrow from "./components/LeftArrow";
import Star from "./components/Star";
import UnfilledStar from "./components/UnfilledStar";
import ReviewCard from "./components/ReviewCard";

const AnimeDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [reviews, setReviews] = useState();

  const MAX_RATING = 5;
  const STAR_WIDTH = 17;
  const STAR_HEIGHT = 16;

  const { properties } = route.params;
  const animeId = properties.anime_id.title[0].text.content;
  const thumbnailUrl = properties.thumbnail.files[0].file.url;
  const title = properties.title.rich_text[0].text.content;
  const genreObjects = properties.genres.multi_select;
  const genre = genreObjects
    .map((genreObjects) => genreObjects.name)
    .join(", ");

  const ratingAverageValues = reviews && getRatingAverages(reviews, animeId);
  const overallRating = ratingAverageValues ? ratingAverageValues.overall : 0;
  const storiesRating = ratingAverageValues ? ratingAverageValues.stories : 0;
  const picturesRating = ratingAverageValues ? ratingAverageValues.pictures : 0;
  const musicRating = ratingAverageValues ? ratingAverageValues.music : 0;
  const ratingAverages = [
    { name: "総合評価", value: overallRating },
    { name: "ストーリー", value: storiesRating },
    { name: "作画", value: picturesRating },
    { name: "音楽", value: musicRating },
  ];

  const getReviewsData = {
    filter: {
      property: "anime_id",
      rich_text: { equals: animeId },
    },
  };

  const navigateHome = () => {
    navigation.navigate("AnimeList");
  };
  const navigateReviewPage = () => {
    navigation.navigate("Review");
  };

  const didMount = () => {
    getReviews(setReviews, getReviewsData);
  };
  useEffect(didMount, []);

  const ratings = ratingAverages.map((average) => (
    <View key={average.name} style={styles.ratingContainer}>
      <Text style={styles.sectionTitle}>{average.name}</Text>
      <View style={styles.rating}>
        {[...Array(average.value)].map((_, i) => (
          <Star key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
        ))}
        {[...Array(MAX_RATING - average.value)].map((_, i) => (
          <UnfilledStar key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
        ))}
      </View>
    </View>
  ));

  const reviewCards =
    reviews &&
    reviews.map((review) => <ReviewCard key={review.id} review={review} />);

  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.backHomeButton} onPress={navigateHome}>
        <LeftArrow />
      </TouchableOpacity>
      <ScrollView style={styles.main}>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{ uri: thumbnailUrl }} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.reviewButton}
          onPress={navigateReviewPage}
        >
          <Text style={styles.reviewButtonText}>レビューを書く</Text>
        </TouchableOpacity>
        <View style={styles.genres}>
          <Text style={styles.sectionTitle}>{genre}</Text>
        </View>
        <View style={styles.ratingsWrapper}>{ratings}</View>
        <View style={styles.reviewsTitleContainer}>
          <View style={styles.reviewsTitle}>
            <Text style={styles.sectionTitle}>レビュー</Text>
          </View>
        </View>
        {reviewCards}
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 34,
    paddingHorizontal: 20,
    backgroundColor: "#00050D",
  },
  backHomeButton: {
    height: 44,
    justifyContent: "center",
  },
  main: {
    overflow: "visible",
  },
  thumbnailContainer: {
    alignItems: "center",
  },
  thumbnail: {
    width: windowWidth,
    aspectRatio: 16 / 9,
  },
  title: {
    marginBottom: 16,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  reviewButton: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  reviewButtonText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "600",
  },
  genres: {
    marginTop: 24,
  },
  sectionTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  ratingsWrapper: {
    gap: 16,
    marginTop: 24,
  },
  ratingContainer: {
    gap: 4,
  },
  rating: {
    flexDirection: "row",
  },
  reviewsTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  reviewsTitle: {
    width: windowWidth,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "white",
  },
});

export default AnimeDetail;
