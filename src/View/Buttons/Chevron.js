import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import { ICON } from "constants/IMAGES";

const Chevron = ({ text, func, color, fontWeight }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={func}>
      <Text style={[styles.text, { color, fontWeight }]}>{text}</Text>
      <Image source={ICON.chevron} style={styles.img} />
    </TouchableOpacity>
  );
};

export default Chevron;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },

  img: {
    position: "absolute",
    right: 10,
    width: 20,
    height: 20,
  },

  text: {
    fontSize: 20,
  },
});
