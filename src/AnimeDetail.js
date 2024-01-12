import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import getReviews from "./utils/getReviews";
import getRatingAverages from "./utils/getRatingAverages";
import Star from "./components/Star";
import UnfilledStar from "./components/UnfilledStar";

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

  const navigateReviewPage = () => {
    navigation.navigate("Review");
  };

  const didMount = () => {
    getReviews(setReviews, getReviewsData);
  };
  useEffect(didMount, []);

  // FlatListでアイテムを描画するための関数
  const renderItem = () => (
    <View style={styles.items}>
      <TouchableOpacity
        style={styles.backLink}
        onPress={() => navigation.navigate("AnimeList")}
      >
        <Image
          style={styles.arrow}
          source={require(".././assets/image/arrow.png")}
        />
        <Text></Text>
      </TouchableOpacity>
      <Image source={{ uri: thumbnailUrl }} style={styles.anime_image} />
      <View style={styles.overlay} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={navigateReviewPage}
      >
        <Text style={styles.submitButtonText}>🖋レビューを書く</Text>
      </TouchableOpacity>
      <Text style={styles.genre}>{genre}</Text>
      {ratingAverages.map((average) => (
        <View key={average.name}>
          <Text style={styles.text1}>{average.name}</Text>
          <View style={styles.rating}>
            {[...Array(average.value)].map((_, i) => (
              <Star key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
            ))}
            {[...Array(MAX_RATING - average.value)].map((_, i) => (
              <UnfilledStar key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.body}>
      {/* FlatListコンポーネントを使ってアイテムを描画 */}
      <FlatList
        data={[""]} // Empty array because we're rendering only one item
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#00050D",
  },
  backLink: {
    marginLeft: 9,
    marginTop: 16,
    marginBottom: 15,
    flexDirection: "row",
  },
  arrow: {
    top: 30,
    width: 9.42,
    height: 16,
  },
  anime_image: {
    width: 390,
    height: 259,
    top: 20,
  },
  title: {
    // marginTop: 2,
    // marginBottom:15,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
    margin: 10,
  },
  submitButton: {
    width: 350,
    height: 44,
    padding: 10,
    borderRadius: 8,
    alignItems: "center", // テキストを水平方向に中央揃え
    justifyContent: "center",
    backgroundColor: "#FFF",
    marginLeft: 20,
  },
  submitButtonText: {
    color: "#333", // カラーコードをシングルクォートで括る
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  genre: {
    color: "#FFF",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 18, // 128.571%
    marginLeft: 20,
    marginTop: 20,
  },
  rating: {
    flexDirection: "row",
  },
  evaluation: {
    // marginTop: 20,
    color: "#FFF",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 18, // 128.571%
    marginLeft: 20,
    marginTop: 20,
  },
  text1: {
    // marginTop: 20,
    color: "#FFF",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 18, // 128.571%
    marginLeft: 20,
    marginTop: 20,
  },
  image1: {
    marginHorizontal: 20,
  },
  reviews: {
    color: "#FFF",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 18, // 128.571%
    textAlign: "center",
    padding: 30,
  },
  textContainer: {
    marginTop: 10,
    borderBottomWidth: 2, // ボーダーラインの幅
    borderBottomColor: "#FFF", // ボーダーラインの色
    marginBottom: 10, // 必要に応じてマージンを調整
  },
  reviewTitle: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    padding: 5,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 18, // 128.571%
    padding: 10,
    marginBottom: 10,
  },
  borderLineContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff", // ボーダーラインの色を設定してください
    marginBottom: 10, // 適切なマージンを設定してください
  },
});
export default AnimeDetail;
