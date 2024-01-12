import { StyleSheet, View, Text } from "react-native";
import Star from "./Star";
import UnfilledStar from "./UnfilledStar";

const ReviewCard = ({ review }) => {
  const MAX_RATING = 5;
  const STAR_WIDTH = 17;
  const STAR_HEIGHT = 16;

  const properties = review.properties;
  const rating = properties.overall_rating.number;
  const title = properties.title.title[0].text.content;
  const letterBody = properties.body.rich_text[0].text.content;

  const insufficientRating = MAX_RATING - rating;

  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.rating}>
          {[...Array(rating)].map((_, i) => (
            <Star key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
          ))}
          {[...Array(insufficientRating)].map((_, i) => (
            <UnfilledStar key={i} width={STAR_WIDTH} height={STAR_HEIGHT} />
          ))}
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.title}>{letterBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  rating: {
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
});

export default ReviewCard;
