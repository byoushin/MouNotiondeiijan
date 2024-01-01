import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBox from "./SearchBox";

const AnimeList = () => {
  const navigation = useNavigation();

  const [animeList, setAnimeList] = useState();
  const [isHome, setIsHome] = useState(true);

  const subTitle = isHome ? "今人気のアニメ" : "結果";

  return (
    <View style={styles.body}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>アニメを検索</Text>
      </View>
      <SearchBox />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortButtonText}>並べ替え</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 34,
    paddingHorizontal: 20,
    backgroundColor: "#00050D",
  },
  titleContainer: {
    height: 46,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subTitleContainer: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  sortButton: {
    height: 32,
    paddingHorizontal: 16,
    borderRadius: 16,
    justifyContent: "center",
    backgroundColor: "#32363D",
  },
  sortButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default AnimeList;
