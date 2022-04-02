import { Dimensions, Animated, Text, StyleSheet } from "react-native";

const ArbleHome = ({ index, scrollX }) => {
  const { width, height } = Dimensions.get("screen");

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateYHeading = scrollX.interpolate({
    inputRange,
    outputRange: [-width * 0.5, 0, -width * 0.5],
  });

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [-width * 1, 0, width * 1],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { width },
        { opacity },
        { transform: [
          { translateX: translateXHeading },
          { translateY: translateYHeading },
        ] },
      ]}
    >
      <Text style={styles.title}>The best hotels.</Text>
      <Text style={styles.content}>Nothing else</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    color: "whitesmoke",
    fontSize: 32,
    fontWeight: "800",
  },
  content: {
    color: "whitesmoke",
    fontSize: 24,
    fontWeight: "800",
  },
});

export default ArbleHome;
