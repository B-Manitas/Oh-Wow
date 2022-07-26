import React from "react";
import { StyleSheet, View } from "react-native";
import InputError from "./InputError";

const InputPrimary = (props) => {
  const passwordRules =
    "minlength: 8; required: lower; required: upper; required: digit;";

  const propsInput = {
    ...props,
    style: styles.input,
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

  input: {
    borderRadius: 15,
    height: 50,
  },
});
