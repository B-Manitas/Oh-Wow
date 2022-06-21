import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputInvisible = ({ value }) => {
  return <TextInput style={styles.input} value={value} />;
};

export default InputInvisible;

const styles = StyleSheet.create({
  input: {
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 5,
  },
});
