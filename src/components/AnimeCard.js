import { Image, StyleSheet, Text, View } from "react-native";

const AnimeCard = ({ anime }) => {
  const properties = anime.properties;

  const thumbnailUrl = properties.thumbnail.files[0].file.url;
  const title = properties.title.rich_text[0].text.content;

  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 76,
    gap: 8,
  },
  thumbnail: {
    height: "100%",
    borderRadius: 8,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  titleContainer: {
    gap: 4,
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
});

export default AnimeCard;
