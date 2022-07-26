// React imports
import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

// Componnents imports
import Page from "containers/Page";

// Constants imports
import { PHOTO } from "constants/IMAGES";
import { STYLES_SHADOW } from "constants/STYLES";

const Loader = () => {
  // Define componnent state
  const scale = useRef(new Animated.Value(0.9));

  // Animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale.current, {
          toValue: 1.1,
          duration: 700,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scale.current, {
          toValue: 0.9,
          duration: 700,
          delay: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scale]);

  return (
    <Page>
      <Animated.View
        style={[styles.imgCtn, { transform: [{ scale: scale.current }] }]}
      >
        <Image style={styles.img} source={PHOTO.logo} />
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.txt}>Chargement des données...</Text>
      </View>
    </Page>
  );
};

export default Loader;

const styles = StyleSheet.create({
  imgCtn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    ...STYLES_SHADOW.high,
  },

  img: {
    width: 200,
    height: 200,
  },

  footer: {
    position: "absolute",
    bottom: 40,
    right: 40,
  },

  txt: {
    fontSize: 16,
  },
});
