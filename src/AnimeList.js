import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import getAnime from "./utils/getAnime";
import LeftArrow from "./components/LeftArrow";
import SearchBox from "./SearchBox";
import AnimeCard from "./components/AnimeCard";

const AnimeList = () => {
  const [anime, setAnime] = useState();
  const [isSearch, setIsSearch] = useState(true);
  const [isSort, setIsSort] = useState(true);

  const subTitle = isSearch ? "今人気のアニメ" : "結果";

  const didMount = () => {
    getAnime(setAnime);
  };
  useEffect(didMount, []);

  const backHome = () => {
    setIsSearch(false);
    getAnime(setAnime);
  };

  return (
    <View style={styles.contianer}>
      <View style={styles.titleContainer}>
        {isSearch ? (
          <Text style={styles.title}>アニメを検索</Text>
        ) : (
          <TouchableOpacity onPress={backHome}>
            <LeftArrow />
          </TouchableOpacity>
        )}
      </View>
      <SearchBox />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.sortButtonText}>並べ替え</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.animeCardContainer}>
        {anime &&
          anime.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 34,
    paddingHorizontal: 20,
    backgroundColor: "#00050D",
  },
  titleContainer: {
    justifyContent: "center",
    height: 46,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  backHomeButton: {
    width: 16,
    aspectRatio: 1,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 54,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  sortButton: {
    justifyContent: "center",
    height: 32,
    paddingHorizontal: 16,
    borderRadius: "50%",
    backgroundColor: "#32363D",
  },
  sortButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  animeCardContainer: {
    gap: 12,
  },
});

export default AnimeList;
