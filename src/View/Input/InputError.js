// React imports
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Constants imports
import COLORS from "constants/COLORS";

const InputError = (props) => {
  const valid = props.valid === false ? false : true;

  const propsInput = {
    ...props,
    onChangeText: props.setValue,
    style: [styles.input, props.style, !valid && styles.error],
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TextInput {...propsInput} />
      {!valid && <Text style={styles.errorText}>{props.formatError}</Text>}
    </View>
  );
};

export default InputError;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderWidth: 2,
    borderColor: "transparent",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  error: {
    borderBottomColor: COLORS.error,
  },

  errorText: {
    color: COLORS.error,
    fontWeight: "600",
  },
});
