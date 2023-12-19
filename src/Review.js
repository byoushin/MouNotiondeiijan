import React, { useState } from 'react';
import { StyleSheet, Text, Image,View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import Menu from './AnimeDetail';
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
    <View style={styles.reviewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.reviewReview}>
        <TouchableOpacity style={styles.backLink} onPress={() => props.navigation.navigate('AnimeDetail', { animeId: '1' })}>
        <Image style={styles.arrow} source={require('.././assets/image/arrow.png')} />
          <Text style={styles.backText}>レビューを書く</Text>
        </TouchableOpacity>
        <View style={styles.reviewSearchBox}>
          <TextInput
            style={styles.input}
            placeholder="タイトルを入力してください"
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>
        <View style={styles.reviewSearchBox1}>
          <TextInput
            style={styles.input}
            placeholder="レビューを入力してください"
            value={review}
            onChangeText={handleReviewChange}
            multiline
            // numberOfLines={3}
            // maxLength={50} 
          />
        </View>
        <Text style={styles.reviewText6}>
            総合評価
          </Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleStarPress(index)}
              >
                <Image
                  source={
                    index <= rating
                      ? require('.././assets/image/Stars.png') // 塗りつぶされた星の画像のパス
                      : require('.././assets/image/Stars.png') // アウトラインの星の画像のパス
                  }
                  style={styles.starImage}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.reviewSearchBox2}>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                送信
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    backgroundColor: '#00050D',
    alignItems: 'center', // 縦方向の中央揃え
    justifyContent: 'center',
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
  reviewReview: {
    // styles for review review
  },
  reviewSearchBox: {
    width: 350,
    height: 40,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom:40,
  },
    reviewSearchBox1: {
      width: 350,
      height: 518,
      backgroundColor: '#FFF',
      // 他に必要なスタイルを追加
    },
    reviewSearchBox2: {
      width: 350,
      height: 44,
      flexShrink: 0,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 20,
      // 他に必要なスタイルを追加
    },
    input: {
      width: "100%",
      height: '100%', // コンポーネントの高さを 100% に設定
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      // 他に必要な input 共通のスタイルを追加
    },
    // 他に必要なスタイルを追  
  reviewText6: {
    color: '#FFF', // Corrected to '#FFF' with quotation marks // Enclosed in quotation marks
    fontSize: 14,
    fontStyle: 'normal', // Enclosed in quotation marks
    fontWeight: '600', // Enclosed in quotation marks
    lineHeight: 18, // 128.571%
    marginTop: 20,
    marginBottom: 2,
  },
  submitButton: {
    padding:10,
    alignItems: 'center', // テキストを水平方向に中央揃え
  justifyContent: 'center',
  },
  submitButtonText: {
    color: '#333', // カラーコードをシングルクォートで括る
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22, // 137.5%
  },
  backText: {
    color: '#FFF', // カラーコードをシングルクォートで括る
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  arrow: {
    width: "8%",
    height: "auto",
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  starImage: {
    width: 30,
    height: 30,
    marginHorizontal: 2,
    marginBottom: 20,
  },
});

export default Review;
