import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const RadioBox = ({
  id,
  id_selected,
  onPress,
  text,
  style,
  style_active,
  style_txt,
}) => {
  if (!style_active) style_active = styles.container_active;

  return (
    <Pressable
      onPress={() => onPress(id)}
      style={[
        styles.container,
        style && style,
        id == id_selected && style_active,
      ]}
    >
      <Text adjustsFontSizeToFit numberOfLines={1} style={style_txt} >{text}</Text>
    </Pressable>
  );
};

export default RadioBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#fafafa",
    width: 30,
    height: 30,
    margin: 2,
  },

  container_active: {
    backgroundColor: "#383838",
  },
});
