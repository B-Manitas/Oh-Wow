import React from "react";
import { TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import { ICON } from "constants/IMAGES";

const Social = () => {
  return (
    <TouchableOpacity style={styles.link}>
      <Image style={styles.icon} source={ICON.insta} />
    </TouchableOpacity>
  );
};

export default Social;

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },
});
