import { StyleSheet, Switch, Text, View } from "react-native";

const ToggleLong = ({ text, value, func }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch value={value} style={styles.switch} onChange={() => func(!value)} />
    </View>
  );
};

export default ToggleLong;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  text: {
    fontSize: 20,
  },

  switch: {
    position: "absolute",
    right: 10,
  },
});
