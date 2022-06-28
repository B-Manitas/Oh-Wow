import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import Utils from "model/Utils";

const Menu = ({ navigation, type, func }) => {
  const onPress = func ? func : () => Utils.selectFuncHeader(navigation, type);

  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Image source={Utils.getIconHeaders(type)} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Menu;

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  icon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
