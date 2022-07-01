import { StyleSheet, Text, TextInput, View } from "react-native";

const InputHours = ({
  text,
  plh_1,
  plh_2,
  value_1,
  value_2,
  func_1,
  func_2,
  isValidFormat_1,
  isValidFormat_2,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{text}</Text>
      <View style={styles.container_inputs}>
        <TextInput
          placeholder={plh_1}
          style={[styles.input, !isValidFormat_1 && { color: "red" }]}
          maxLength={5}
          value={value_1}
          onChangeText={(t) => func_1(t)}
        />
        <Text style={styles.input}>à</Text>
        <TextInput
          placeholder={plh_2}
          style={[styles.input, !isValidFormat_2 && { color: "red" }]}
          maxLength={5}
          value={value_2}
          onChangeText={(t) => func_2(t)}
        />
      </View>
    </View>
  );
};

export default InputHours;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },

  h1: {
    fontSize: 18,
  },

  container_inputs: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
  },

  input: {
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: "400",
  },
});
