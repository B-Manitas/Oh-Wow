import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonRoundValid = ({ text }) => {
  return (
    <TouchableOpacity style={styles.content}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRoundValid;

const styles = StyleSheet.create({
  content: {
    borderRadius: 5,
    borderWidth: 2,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    margin: 5,
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
    fontSize: 32,
    fontWeight: "400",
  },
});
