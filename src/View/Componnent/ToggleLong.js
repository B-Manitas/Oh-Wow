import { StyleSheet, Switch, Text, View } from "react-native";

const ToggleLong = ({ state, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch value={state} style={styles.switch} />
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
    fontSize: 18,
  },

  switch: {
    position: "absolute",
    right: 10,
  },
});
