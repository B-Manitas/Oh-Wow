// React imports
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { STYLE_GENERAL } from "constants/STYLES";

// Componnents imports
import InputError from "./InputError";

const InputLong = (props) => {
  const error = props.error === true ? true : false;

  return (
    <View style={[styles.container, error && styles.containerError]}>
      <Text style={STYLE_GENERAL.sectionH2}>{props.text}</Text>
      <InputError {...props} text={undefined} style={styles.containerInput} />
    </View>
  );
};

export default InputLong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
  },

  containerError: { marginVertical: 25 },

  text: {
    fontSize: 20,
    paddingVertical: 7,
  },

  containerInput: {
    position: "absolute",
    right: 0,
    maxWidth: Dimensions.get("screen").width / 2,
  },
});
