import { StyleSheet, Text, TextInput, View } from "react-native";

const InputHours = ({
  text,
  plh_1,
  plh_2,
  value_1,
  value_2,
  func_1,
  func_2,
  is_bad_format_1,
  is_bad_format_2,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.ctn_input}>
        <TextInput
          style={styles.input}
          placeholder={plh_1}
          maxLength={20}
          value={value_1}
          onChangeText={func_1}
        />
        <TextInput
          style={styles.input}
          placeholder={plh_2}
          maxLength={20}
          value={value_2}
          onChangeText={func_2}
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

  text: {
    fontSize: 20,
  },

  ctn_input: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minWidth: "20%",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginLeft: 10,
  },
});
