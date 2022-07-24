import { StyleSheet, Switch, Text, View } from "react-native";
import { STYLE_GENERAL } from "../../constants/STYLES";

const ToggleLong = ({ text, value, func }) => {
  return (
    <View style={styles.container}>
      <Text style={STYLE_GENERAL.sectionH2}>{text}</Text>
      <Switch
        value={value}
        style={styles.switch}
        onChange={() => func(!value)}
      />
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
