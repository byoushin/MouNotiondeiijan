import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);
    // 検索ロジックをここに実装するか、親コンポーネントに検索テキストを渡すなどの操作を行います
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="タイトル、またはキーワード"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
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
