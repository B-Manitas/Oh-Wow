import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const Secondary = ({
  plh,
  typeAndroid,
  typeIOS,
  returnKeyType,
  keyboardType,
  maxLength,
  disabled,
}) => {
  return (
    <TextInput
      editable={!disabled}
      placeholderTextColor={disabled?"#c4c4c4":"#858585"}
      style={[styles.input, disabled && styles.disabled]}
      keyboardType={keyboardType}
      autoComplete={typeAndroid}
      textContentType={typeIOS}
      placeholder={plh}
      maxLength={maxLength}
      returnKeyType={returnKeyType}
    />
  );
};

export default Secondary;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderColor: "#383838",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderRadius: 2,
    fontWeight: "200",
  },

  placeholder: {
    color: "#999999",
  },
  
  disabled: {
    borderColor: "#f4f4f4",
  },
});
