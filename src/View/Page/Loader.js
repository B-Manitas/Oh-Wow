import { Animated, Image, StyleSheet, Text, View } from "react-native";
import Page from "../Container/Page";

import { PHOTO } from "constants/IMAGES";
import { useEffect, useState } from "react";

const Loader = () => {
  const [scale, _] = useState(new Animated.Value(0.9));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration: 700,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
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
      <Animated.View style={[styles.ctn_img, { transform: [{ scale }] }]}>
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
  ctn_img: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
