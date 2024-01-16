import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import getAnime from "../utils/getAnime";

const SearchBox = ({ setAnime }) => {
  const [searchText, setSearchText] = useState("");

  const search = () => {
    const getAnimeData = {
      filter: {
        or: [
          { property: "title", rich_text: { contains: searchText } },
          { property: "description", rich_text: { contains: searchText } },
        ],
      },
    };

    getAnime(setAnime, getAnimeData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={search}
        placeholder="タイトル、またはキーワード"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1, // 残りのスペースをTextInputが占めるようにする
    height: 44,
    paddingLeft: 10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    fontWeight: "600",
  },
});

export default SearchBox;
