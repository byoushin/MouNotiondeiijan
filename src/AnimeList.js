import React, { useState, useEffect } from 'react';
import { StyleSheet, Image,Text, View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation をインポート
import SearchBox from './SearchBox';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const AnimeList = () => {
  const navigation = useNavigation(); // useNavigation フックを使用して navigation オブジェクトを取得
  const [animeList, setAnimeList] = useState([
    { id: 1, title: "呪術廻戦", text: '渋谷事変', isMine: false, date: '2022/11/01', hosi: '4.5' },
    // 他のアニメデータも追加できます
  ]);

  const handleAnimePress = (id) => {
    // 詳細ページに遷移する処理
    navigation.navigate('AnimeDetail', { animeId: id });
  };

  const sort = () => {
    // Handle the submission logic here
    // You can access title and review state variables
  };

  return (
    <View style={styles.body}>
      <Text style={styles.Text1}>アニメを検索</Text>
      <SearchBox />
      <Text style={styles.Text2}>今人気のアニメ</Text>
      <View style={styles.reviewSearchBox2}>
      <TouchableOpacity style={styles.submitButton} onPress={sort}>
        <Text style={styles.submitButtonText}>
          並び替え
        </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.chatView}>
          {animeList.map((anime) => (
            <TouchableOpacity key={anime.id} onPress={() => handleAnimePress(anime.id)}>
              <View style={styles.animeItem}>
              <Image style={styles.image}source={require(".././assets/image/mv_re_new.jpg")}/>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{anime.title}</Text>
                <Text style={styles.sentens}>Date: {anime.date}</Text>
                <Text style={styles.sentens}>評価</Text>
                <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
              </View>
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
    backgroundColor: '#00050D',
    margin: "auto",
    width: "auto",
    height: "auto",
  },
  Text1:{
    marginTop: 70,
    marginBottom:15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  Text2:{
    marginTop: 2,
    marginBottom:15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
  },
  chatView: {
    flex: 1,
    backgroundColor: '#111111',
  },
  animeItem: {
    flexDirection: 'row', // 子要素を横に配置
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  sentens: {
    margin: 3,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  reviewSearchBox2: {
    width: "20%",
    height: 32,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#32363D',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute', // Add position: 'absolute'
    marginTop: 190, // Adjust the top position to accommodate the status bar
    right: 0, // Align to the right side
  },
  submitButtonText: {
    color: '#FFF', // カラーコードをシングルクォートで括る
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22, // 137.5%
  },
  image: {
    width: 135.11,
    height: 189.628,
    flexShrink: 0,
    // width: "100%",
    // height: "100%",
    top: 20,
    marginTop: 20,
    marginBottom:20,
    marginRight:10,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10, // 必要に応じてマージンを調整
    justifyContent: 'center',
  },
  
});

export default AnimeList;
