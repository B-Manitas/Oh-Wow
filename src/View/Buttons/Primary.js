import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Primary = ({
  text,
  width,
  height,
  font_size,
  style,
  is_active,
  func,
}) => {
  return (
    <TouchableOpacity
      onPress={func}
      disabled={!is_active}
      style={[
        styles.content,
        style,
        { width: width, paddingVertical: height },
        !is_active && { opacity: 0.4 },
      ]}
    >
      <Text style={[styles.text, { fontSize: font_size }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Primary;

const styles = StyleSheet.create({
  content: {
    borderRadius: 5,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  text: {
    fontWeight: "400",
  },
});
