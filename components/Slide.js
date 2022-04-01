import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import Letter from "./Letter";

const Slide = ({ slide, index, scrollX }) => {
  const { width, height } = Dimensions.get("screen");
  const SLIDE_WIDTH = width * 1;
  const SLIDE_HEIGHT = SLIDE_WIDTH * 1.5;

  // Animations
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });
  const translateXContent = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.05, 0, width * 0.05],
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateYHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, width * 0.2],
  });

  return (
    <View
      style={{
        width: SLIDE_WIDTH,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.Image
        source={{ uri: slide.image }}
        style={[styles.image, { transform: [{ scale }] }]}
      />
      <Animated.Text
        style={{ width: "80%", marginTop: 20, fontSize: 32, marginBottom: 12, fontWeight: "800", transform: [{translateX: translateXHeading}] }}
      >
        {slide.text}
      </Animated.Text>

      <Animated.Text
        style={{ width: "80%", opacity: opacity, transform: [{ translateY: translateYHeading }] }}
      >
        {slide.content}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "50%",
    resizeMode: "cover",
    borderRadius: 25,
  },
});

export default Slide;
