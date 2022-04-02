import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Animated,
} from "react-native";

const ArbleSearch = ({ index, scrollX }) => {
  const { width, height } = Dimensions.get("screen");
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={[styles.container, { width }]}>
      <Animated.View style={styles.card}>
        <TextInput style={styles.title} placeholder="Where to?" />
        <View style={styles.cols}>
          <Text style={styles.content}>Check In</Text>
          <Text style={styles.content}>Check In</Text>
        </View>
        <View style={styles.cols}>
          <Text style={styles.content}>Adults</Text>
          <Text style={styles.content}>Kids</Text>
        </View>
        <Button title="Search" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "whitesmoke",
    padding: 12,
    borderRadius: 25,
    height: "50%",
    display: "flex",
    justifyContent: "center",
  },
  cols: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    color: "black",
    fontSize: 32,
    fontWeight: "800",
  },
  content: {
    color: "black",
    fontSize: 24,
    fontWeight: "800",
    paddingTop: 12,
    paddingBottom: 12,
  },
});

export default ArbleSearch;
