import { useEffect, useRef } from "react";
import { Animated } from "react-native";

const Letter = ({ letter, index }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(12)).current;

  const startAnimation = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 10,
    }).start();
    Animated.timing(scrollY, {
      toValue: 0,
      duration: 300,
      delay: index * 10,
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.Text
      style={{
        fontSize: 36,
        fontWeight: '800',  
        opacity: opacity,
        transform: [{ translateY: scrollY }],
      }}
    >
      {letter}
    </Animated.Text>
  );
};

export default Letter;
