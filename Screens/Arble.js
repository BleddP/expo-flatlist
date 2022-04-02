import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  Animated,
  ImageBackground,
} from "react-native";
import { slides } from "../components/arble/arbleData";
import ArbleHome from "../components/arble/ArbleHome";
import ArbleSearch from "../components/arble/ArbleSearch";

export default function Arble() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get("screen");
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        }}
        style={{ width, height }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <Animated.FlatList
            data={slides}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item, index }) => {
              if (index === 0) {
                return <ArbleHome index={index} scrollX={scrollX} />;
              } else {
                return <ArbleSearch index={index} scrollX={scrollX} />;
              }
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          />
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
