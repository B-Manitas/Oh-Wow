import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TextEdit = ({
  pre_text,
  plh,
  value,
  editable,
  keyboard_type,
  size,
  setValue,
  isValidFormat,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.pre_text, { fontSize: size }]}>{pre_text}</Text>
      <TextInput
        editable={editable}
        style={[
          styles.input,
          { fontSize: size },
          !isValidFormat && { color: "red" },
        ]}
        value={value}
        placeholder={plh}
        keyboardType={keyboard_type}
        returnKeyType={"done"}
        onChangeText={(t) => setValue(t)}
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
