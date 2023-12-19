import React from 'react';
import { View, Text, FlatList, ScrollView,Image,StyleSheet,TouchableOpacity, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { useRoute, useNavigation  } from '@react-navigation/native';
const Evaluation = () => {
    const route = useRoute();
    const textArray = ['タイトル', '終わった', '呪術廻戦', '4.1'];
    const navigation = useNavigation();
    const reviewSubmit = () => {
        navigation.navigate('AnimeDetail' ,{ animeId: '1' });
    };

  // FlatListでアイテムを描画するための関数
    const renderItem = () => (
        <View style={styles.items}>
        <TouchableOpacity style={styles.textContainer} onPress={reviewSubmit}>
            <Text style={styles.text5}>みんなのレビュー</Text>
        </TouchableOpacity>
        <View style={styles.horizontalContainer}>
            <Image style={styles.image1} source={require(".././assets/image/Stars.png")} />
            <Text style={styles.text1}>{textArray[0]}</Text>
        </View>
        <View style={styles.borderLineContainer}>
            <Text style={styles.text3}>{textArray[1]}</Text>
        </View>
        <View style={styles.horizontalContainer}>
            <Image style={styles.image1} source={require(".././assets/image/Stars.png")} />
            <Text style={styles.text1}>{textArray[0]}</Text>
        </View>
        <View style={styles.borderLineContainer}>
            <Text style={styles.text3}>{textArray[1]}</Text>
        </View>
        <View style={styles.horizontalContainer}>
            <Image style={styles.image1} source={require(".././assets/image/Stars.png")} />
            <Text style={styles.text1}>{textArray[0]}</Text>
        </View>
        <View style={styles.borderLineContainer}>
            <Text style={styles.text3}>{textArray[1]}</Text>
        </View>
        </View>
    );
return (
    <View style={styles.body}>
    {/* FlatListコンポーネントを使ってアイテムを描画 */}
    <FlatList
      data={['']} // Empty array because we're rendering only one item
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}/>
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
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    backLink: {
        marginLeft: 9,
        marginTop: 16,
        marginBottom: 15,
        flexDirection: "row",
        },
    text1: {
        marginTop:4,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        padding: 5,
    },
    text3: {
        color: '#FFF',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 18, // 128.571%
        padding: 10,
        marginBottom: 10
    },  
    text5: {
        color: '#FFF',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 18, // 128.571%
        textAlign: 'center',
        padding: 30,
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
    textContainer: {
        marginTop: 80,
        borderBottomWidth: 2, // ボーダーラインの幅
        borderBottomColor: '#FFF', // ボーダーラインの色
        marginBottom: 10, // 必要に応じてマージンを調整
    },

    borderLineContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff', // ボーダーラインの色を設定してください
        marginBottom: 10, // 適切なマージンを設定してください
    },
});
export default Evaluation;
