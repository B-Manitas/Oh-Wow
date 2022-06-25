import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const InputPrimary = ({
  info,
  plh,
  typeAndroid,
  typeIOS,
  returnKeyType,
  keyboardType,
  maxLength,
  secureTextEntry,
  value,
  onChangeText,
  isValidFormat,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, !isValidFormat && { borderColor: "red" }]}
        keyboardType={keyboardType}
        autoComplete={typeAndroid}
        textContentType={typeIOS}
        passwordRules={
          "minlength: 8; required: lower; required: upper; required: digit; required: [%./?@]];"
        }
        placeholder={plh}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        value={value}
        onChangeText={onChangeText}
      />

      <View
        style={[styles.content_info, !isValidFormat && { borderColor: "red" }]}
      >
        <Text style={styles.text_info}>{info}</Text>
      </View>
    </View>
  );
};

export default InputPrimary;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingBottom: 10,
    paddingTop: 15,
    paddingRight: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    fontWeight: "200",
  },
});
