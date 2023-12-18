import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native'; // StatusBar を追加
import SearchBox from './src/SearchBox';
import AnimeList from './src/AnimeList';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={{ color: '#fff', fontSize: 30 }}>アニメを検索</Text>
        <SearchBox />
        <Text style={{ color: '#fff', fontSize: 20 }}>今人気のアニメ</Text>
        <AnimeList />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#111111',
    paddingTop: STATUSBAR_HEIGHT, // ステータスバーの高さ分だけ上部にスペースを開ける
  },
  // 以下省略...
});

// export default App;
