// React imports
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Constants imports
import COLORS from "constants/COLORS";
import { STYLES_SHADOW } from "constants/STYLES";

const InputError = (props) => {
  // Define componnent state
  const error = props.valid === false ? true : false;
  const text = props.text;

  // Define input props
  const propsInput = {
    ...props,
    autoComplete: props.typeAndroid,
    textContentType: props.typeIOS,
    onChangeText: props.setValue,
    style: [
      styles.input,
      props.styleInput,
      error && styles.error,
      text && styles.ctnText,
    ],
  };

  // Define error text props
  const propsErrorText = {
    style: styles.errorText,
    numberOfLines: props.multilineErrorText ? 10 : 1,
    adjustsFontSizeToFit: !props.multilineErrorText,
  };

  return (
    <View style={{ ...styles.container, ...props.style }}>
      {text && <Text style={styles.text}>{text.toUpperCase()}</Text>}
      <TextInput {...propsInput} />
      {error && <Text {...propsErrorText}>{props.errorText}</Text>}
    </View>
  );
};

export default InputError;

const styles = StyleSheet.create({
  container: { margin: 5 },

  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.default,
    borderWidth: 2,
    borderColor: "transparent",
    color: COLORS.black,
    fontWeight: "300",

    ...STYLES_SHADOW.low,
  },

  ctnText: { paddingBottom: 0, height: 60 },

  text: {
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
