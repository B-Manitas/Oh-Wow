import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputSecondary = ({
  plh,
  typeAndroid,
  typeIOS,
  returnKeyType,
  keyboardType,
  maxLength,
  disabled,
  value,
  setValue,
  isValidFormat,
}) => {
  return (
    <TextInput
      editable={!disabled}
      placeholderTextColor={disabled ? "#c4c4c4" : "#858585"}
      style={[
        styles.input,
        disabled && styles.disabled,
        isValidFormat === false && { borderColor: "red" },
      ]}
      keyboardType={keyboardType}
      autoComplete={typeAndroid}
      textContentType={typeIOS}
      placeholder={plh}
      maxLength={maxLength}
      returnKeyType={returnKeyType}
      value={value}
      onChangeText={(t) => setValue(t)}
    />
  );
};

export default InputSecondary;

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
