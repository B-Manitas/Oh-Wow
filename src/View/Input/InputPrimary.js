import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import InputError from "./InputError";

// info,
// plh,
// typeAndroid,
// typeIOS,
// returnKeyType,
// keyboardType,
// maxLength,
// secureTextEntry,
// value,
// onChangeText,
// isValidFormat,

const InputPrimary = (...props) => {
  const passwordRules =
    "minlength: 8; required: lower; required: upper; required: digit;";

  const propsInput = {
    ...props,
    style: [styles.input, props.error && { borderColor: "red" }],
    passwordRules,
  };

  return (
    <View style={styles.container}>
      <InputError {...propsInput} placeholder={"Prénom"} />
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
