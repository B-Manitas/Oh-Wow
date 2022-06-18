import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonRoundValid = ({ text, width, height, font_size }) => {
  return (
    <TouchableOpacity style={[styles.content, { width: width, paddingVertical: height }]}>
      <Text style={[styles.text, { fontSize: font_size }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRoundValid;

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
