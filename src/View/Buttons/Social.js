import React from "react";
import { TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import { ICON } from "constants/IMAGES";

const Social = () => {
  const onPress = async () => {
    const url = "https://www.instagram.com/oh.wow.rades/";
    await Linking.canOpenURL(url);
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.link} onPress={onPress}>
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
