import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AnimeDetail = () => {
  const route = useRoute();
  const { animeId } = route.params;
  const textArray = ['無職転生', '異世界行ったら本気出す', '異世界、恋愛、ファンタジー', '総合評価', '4.5'];

  // FlatListでアイテムを描画するための関数
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.body}>
      {/* FlatListコンポーネントを使ってアイテムを描画 */}
      <FlatList
        data={textArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#111111',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
});
export default AnimeDetail;

