import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TextEdit = ({ pre_text, plh, value, editable, keyboard_type, size }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.pre_text, { fontSize: size }]}>{pre_text}</Text>
      <TextInput
        editable={editable}
        style={[styles.input, { fontSize: size }]}
        value={value}
        placeholder={plh}
        keyboardType={keyboard_type}
        returnKeyType={"done"}
      />
    </View>
  );
};

export default TextEdit;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  pre_text: {
    marginRight: 10,
    fontSize: 20,
  },

  input: {
    fontSize: 20,
  },
});
