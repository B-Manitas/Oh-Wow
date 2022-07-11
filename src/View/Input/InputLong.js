import { StyleSheet, Text, TextInput, View } from "react-native";

const InputLong = ({
  text,
  placeholder,
  value,
  setValue,
  length,
  key_type,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        maxLength={length}
        value={value}
        onChangeText={(t) => setValue(t)}
        keyboardType={key_type}
      />
    </View>
  );
};

export default InputLong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },

  text: {
    fontSize: 20,
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minWidth: "20%",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    right: 0,
    position: "absolute",
    maxWidth: 210,
  },
});
