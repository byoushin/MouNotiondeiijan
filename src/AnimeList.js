import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation をインポート
import SearchBox from './SearchBox';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const AnimeList = () => {
  const navigation = useNavigation(); // useNavigation フックを使用して navigation オブジェクトを取得
  const [animeList, setAnimeList] = useState([
    { id: 1, title: "無職転生", text: '異世界行ったら本気出す', isMine: false, date: '2022/11/01', hosi: '4.5' },
    // 他のアニメデータも追加できます
  ]);

  const handleAnimePress = (id) => {
    // 詳細ページに遷移する処理
    navigation.navigate('AnimeDetail', { animeId: id });
  };

  return (
    <View style={styles.body}>
      <Text style={{ color: '#fff', fontSize: 30 }}>アニメを検索</Text>
      <SearchBox />
      <Text style={{ color: '#fff', fontSize: 20 }}>今人気のアニメ</Text>
      <View style={styles.container}>
        <ScrollView style={styles.chatView}>
          {animeList.map((anime) => (
            <TouchableOpacity key={anime.id} onPress={() => handleAnimePress(anime.id)}>
              <View style={styles.animeItem}>
                <Text style={styles.title}>{anime.title}</Text>
                <Text style={styles.sentens}>{anime.text}</Text>
                {/* 他のアニメ情報も表示する */}
                <Text style={styles.sentens}>Date: {anime.date}</Text>
                <Text style={styles.sentens}>Rating: {anime.hosi}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#111111',
    paddingTop: STATUSBAR_HEIGHT,
  },
  container: {
    flex: 1,
  },
  chatView: {
    flex: 1,
    backgroundColor: '#111111',
  },
  animeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sentens: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#aaa',
  },
});

export default AnimeList;
