// React imports
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Constants imports
import COLORS from "constants/COLORS";

const InputError = (props) => {
  const error = props.valid === false ? true : false;
  const info = props.info;

  // Define props input
  const propsInput = {
    ...props,
    autoComplete: props.typeAndroid,
    textContentType: props.typeIOS,
    onChangeText: props.setValue,
    style: [
      styles.input,
      props.style,
      error && styles.error,
      info && styles.info,
    ],
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      {info && <Text style={styles.infoText}>{props.info.toUpperCase()}</Text>}
      <TextInput {...propsInput} />
      {error && <Text style={styles.errorText}>{props.errorText}</Text>}
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
    color: "#383838",
    fontWeight: "300",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },

  info: { paddingBottom: 0, height: 60 },

  infoText: {
    position: "absolute",
    left: 16,
    top: 8,
    zIndex: 2,
    fontSize: 11,
    color: "#383838",
    fontWeight: "700",
  },

  error: {
    borderBottomColor: COLORS.error,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  errorText: {
    color: COLORS.error,
    fontWeight: "600",
  },
});
