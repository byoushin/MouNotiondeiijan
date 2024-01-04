import React from 'react';
import { View, Text, FlatList, ScrollView,Image,StyleSheet,TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { useRoute, useNavigation  } from '@react-navigation/native';
const AnimeDetail = () => {
  const route = useRoute();
  const { animeId } = route.params;
  const textArray = ['呪術廻戦 渋谷事変', 'ダークファンタジー', '総合評価', '4.1'];
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate('Review');
  };
  const reviewSubmit = () => {
    navigation.navigate('Evaluation');
  };

  // FlatListでアイテムを描画するための関数
const renderItem = () => (
  <View style={styles.items}>
<TouchableOpacity style={styles.backLink} onPress={() => navigation.navigate('AnimeList')}>
  <Image style={styles.arrow} source={require('.././assets/image/arrow.png')} />
  <Text></Text>
</TouchableOpacity>
      <Image style={styles.image}
      source={require(".././assets/image/mv_re_new.jpg")}/>
      <View style={styles.overlay} />
    <Text style={styles.text1}>{textArray[0]}</Text>
    <View style={styles.reviewSearchBox2}>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>
          🖊レビューを書く
        </Text>
      </TouchableOpacity>
      <Text style={styles.text2}>{textArray[1]}</Text>
      <Text style={styles.text3}>{textArray[2]}</Text>
      <Text style={styles.text4}>{textArray[3]}</Text>
      <Text style={styles.text3}>ストーリー</Text>
      <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
      <Text style={styles.text3}>作画</Text>
      <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
      <Text style={styles.text3}>音楽</Text>
      <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
      <TouchableOpacity style={styles.textContainer} onPress={reviewSubmit}>
        <Text style={styles.text5}>みんなのレビュー</Text>
      </TouchableOpacity>
    </View>
      </View>
);

return (
  <View style={styles.body}>
    {/* FlatListコンポーネントを使ってアイテムを描画 */}
    <FlatList
      data={['']} // Empty array because we're rendering only one item
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      />
  </View>
);
};
const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#00050D',
      margin: "auto",
      width: "auto",
      height: "auto",
    },
    backLink: {
      marginLeft: 9,
      marginTop: 16,
      marginBottom: 15,
      flexDirection: "row",
    },
    text1: {
      marginTop: 2,
      marginBottom:15,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    text2: {
      marginTop: 20,
      color: '#FFF',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 18, // 128.571%
    },
    text3: {
      marginTop: 20,
      color: '#FFF',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 18, // 128.571%
    },
    text4: {
      marginTop: 12,
      color: '#FFF',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 18, // 128.571%
    },      
    text5: {
      marginTop: 12,
      color: '#FFF',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 18, // 128.571%
      textAlign: 'center',
    },    
    reviewSearchBox2: {
      width: "100%",
      height: 44,
      flexShrink: 0,
      borderRadius: 8,
      backgroundColor: '#FFF',
      // marginBottom: 20,
      // 他に必要なスタイルを追加
    },
    image: {
      width: "100%",
      height: "80%",
      top: 20,
      marginTop: 20,
      marginBottom:20,
    },
    image1: {
      width: 130,
      height: 24,
      marginTop: 5,
    },
    arrow: {
      top: 30,
      width: "10%",
      height: "100%",
    },
    submitButtonText: {
      color: '#333', // カラーコードをシングルクォートで括る
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 22, // 137.5%
    },
    submitButton: {
      padding:10,
      alignItems: 'center', // テキストを水平方向に中央揃え
      justifyContent: 'center',
    },
    textContainer: {
      marginTop: 5,
      borderBottomWidth: 2, // ボーダーラインの幅
      borderBottomColor: '#FFF', // ボーダーラインの色
      marginBottom: 10, // 必要に応じてマージンを調整
    },
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },

});
export default AnimeDetail;

