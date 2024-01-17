import React, { useState } from 'react';
import { StyleSheet, Text, Image,View, TextInput,  ScrollView,TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';

const Review = (props) => {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleReviewChange = (text) => {
    setReview(text);
  };

  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    // You can access title and review state variables
  };

  return (
    <ScrollView style={styles.reviewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.reviewReview}>
        <TouchableOpacity style={styles.backLink} onPress={() => props.navigation.navigate('AnimeDetail', { animeId: '1' })}>
        <Image style={styles.arrow} source={require('.././assets/image/arrow.png')} />
          <Text style={styles.backText}>レビューを書く</Text>
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <TextInput
            style={styles.titleInput}
            placeholder="タイトルを入力してください"
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>
        <View style={styles.reviewBox}>
          <TextInput
            style={styles.reviewInput}
            placeholder="レビューを入力してください"
            value={review}
            onChangeText={handleReviewChange}
            multiline
            // numberOfLines={3}行数制限
            // maxLength={50} 文字数制限
          />
        </View>
        <Text style={styles.text1}>総合評価</Text>
        <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
        <Text style={styles.text1}>ストーリー</Text>
        <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
        <Text style={styles.text1}>作画</Text>
        <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
        <Text style={styles.text1}>音楽</Text>
        <Image style={styles.image1}source={require(".././assets/image/Stars.png")}/>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                送信
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reviewContainer:{
    backgroundColor: '#00050D',
  },
  backLink: {
    marginLeft: 9,
    marginTop: 16,
    marginBottom: 15,
    flexDirection: "row",
  },
  arrow: {
    top: 30,
    width: 9.42,
    height: 16,

  },
  backText:{
      color: '#FFF', // カラーコードをシングルクォートで括る
      fontSize: 22,
      fontStyle: 'normal',
      fontWeight: '700',
      marginTop: 22,
      marginLeft: 10,
  },
  titleBox:{
    width: 350,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  titleInput:{
    width: 350,
    height: 40, // コンポーネントの高さを 100% に設定
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewBox:{
    width: 350,
    height: 400,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
  reviewInput:{
    width: 350,
    height: 400, // コンポーネントの高さを 100% に設定
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  text1:{
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18, // 128.571%
    marginLeft: 20,
    marginTop:20
  },
  image1:{
    marginHorizontal: 20,
  },
  buttonBox:{
    width: 350,
    height: 44,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  submitButton:{
    padding:10,
    alignItems: 'center', // テキストを水平方向に中央揃え
    justifyContent: 'center',
    marginLeft: 20
  },
  submitButtonText: {
    color: '#333', // カラーコードをシングルクォートで括る
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22, // 137.5%
  },
});

export default Review;
