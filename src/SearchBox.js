import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // ここで検索処理を実装するか、親コンポーネントに検索テキストを渡すなどの操作を行います
    console.log('Search Text:', searchText);
    // 例えば、検索APIを呼び出すなどの処理を追加できます
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="検索キーワードを入力"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="検索" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
});

export default SearchBox;
