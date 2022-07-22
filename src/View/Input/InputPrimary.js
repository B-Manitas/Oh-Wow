import React from "react";
import { StyleSheet, View } from "react-native";
import InputError from "./InputError";

const InputPrimary = (props) => {
  const passwordRules =
    "minlength: 8; required: lower; required: upper; required: digit;";

  const propsInput = {
    ...props,
    style: [styles.input],
    passwordRules,
  };

  return (
    <View style={styles.container}>
      <InputError {...propsInput} />
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 40,
  },

  content_info: {
    top: -20,
    left: 10,
    borderRadius: 5,
    borderWidth: 2,
    position: "absolute",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    paddingVertical: 5,
  },

  text_info: {
    fontSize: 13,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "600",
  },

  input: {
    borderRadius: 15,
    height: 50,
  },
});
