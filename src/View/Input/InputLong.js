// React imports
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

// Componnents imports
import InputError from "./InputError";

const InputLong = (props) => {
  const valid = props.valid === false ? false : true;

  return (
    <View style={[styles.container, !valid && styles.containerError]}>
      <Text style={styles.text}>{props.text}</Text>
      <InputError {...props} style={styles.containerInput} />
    </View>
  );
};

export default InputLong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
  },

  containerError: {
    marginVertical: 25,
  },

  text: {
    fontSize: 20,
  },

  containerInput: {
    right: 0,
    position: "absolute",
    maxWidth: Dimensions.get("screen").width / 2,
  },
});
