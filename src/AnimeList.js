import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import getAnime from "./utils/getAnime";
import LeftArrow from "./components/LeftArrow";
import AnimeCard from "./components/AnimeCard";

const AnimeList = () => {
  const [anime, setAnime] = useState();
  const [isSearch, setIsSearch] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [searchText, setSearchText] = useState("");

  const subTitle = isSearch ? "結果" : "今人気のアニメ";

  const backHome = () => {
    setIsSearch(false);
    getAnime(setAnime);
  };

  const openSort = () => {
    setIsSort(true);
  };

  const search = () => {
    const getAnimeData = {
      filter: {
        or: [
          { property: "title", rich_text: { contains: searchText } },
          { property: "description", rich_text: { contains: searchText } },
        ],
      },
    };

    setIsSearch(true);
    getAnime(setAnime, getAnimeData);
  };

  const didMount = () => {
    getAnime(setAnime);
  };
  useEffect(didMount, []);

  return (
    <View style={styles.contianer}>
      <View style={styles.titleContainer}>
        {isSearch ? (
          <TouchableOpacity onPress={backHome}>
            <LeftArrow />
          </TouchableOpacity>
        ) : (
          <Text style={styles.title}>アニメを検索</Text>
        )}
      </View>
      <TextInput
        style={styles.searchBox}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={search}
        placeholder="タイトル、またはキーワード"
        placeholderTextColor={"#808080"}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <TouchableOpacity style={styles.sortButton} onPress={openSort}>
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
  searchBox: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "white",
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
