import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
const AnimeDetail = () => {
  const route = useRoute();
  const { animeId } = route.params;
  const textArray = [
    "呪術廻戦 渋谷事変",
    "ダークファンタジー",
    "総合評価",
    "4.1",
  ];
  const textArray2 = [
    "タイトル",
    "あああああああああああああああああああああああああああああああああああああああああああああああああ",
    "呪術廻戦",
    "4.1",
  ];
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate("Review");
  };
  const reviewSubmit = () => {
    navigation.navigate("Evaluation");
  };

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
      <Image
        style={styles.anime_image}
        source={require(".././assets/image/mv_re_new.jpg")}
      />
      <View style={styles.overlay} />
      <Text style={styles.title}>{textArray[0]}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>🖋レビューを書く</Text>
      </TouchableOpacity>
      <Text style={styles.genre}>{textArray[1]}</Text>
      <Text style={styles.evaluation}>{textArray[2]}</Text>
      <Image
        style={styles.image1}
        source={require(".././assets/image/Stars.png")}
      />
      <Text style={styles.text1}>ストーリー</Text>
      <Image
        style={styles.image1}
        source={require(".././assets/image/Stars.png")}
      />
      <Text style={styles.text1}>作画</Text>
      <Image
        style={styles.image1}
        source={require(".././assets/image/Stars.png")}
      />
      <Text style={styles.text1}>音楽</Text>
      <Image
        style={styles.image1}
        source={require(".././assets/image/Stars.png")}
      />

      <View style={styles.items}>
        <View style={styles.textContainer}>
          <Text style={styles.reviews}>レビュー</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <Image
            style={styles.image1}
            source={require(".././assets/image/Stars.png")}
          />
          <Text style={styles.reviewTitle}>{textArray2[0]}</Text>
        </View>
        <View style={styles.borderLineContainer}>
          <Text style={styles.text}>{textArray2[1]}</Text>
        </View>

        <View style={styles.horizontalContainer}>
          <Image
            style={styles.image1}
            source={require(".././assets/image/Stars.png")}
          />
          <Text style={styles.reviewTitle}>{textArray2[0]}</Text>
        </View>
        <View style={styles.borderLineContainer}>
          <Text style={styles.text}>{textArray2[1]}</Text>
        </View>
      </View>
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
