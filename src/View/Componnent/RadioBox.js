import React from "react";
import { Pressable, StyleSheet } from "react-native";

const RadioBox = ({ id, id_selected, onPress }) => {
  return (
    <Pressable
      onPress={() => onPress(id)}
      style={[styles.container, id == id_selected && styles.container_active]}
    ></Pressable>
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

  container_active: { backgroundColor: "#383838" },
});
