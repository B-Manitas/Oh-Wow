// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnent imports
import InputError from "./InputError";

const InputSecondary = (props) => {
  return <InputError {...props} style={styles.input} />;
};

export default InputSecondary;

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
});
