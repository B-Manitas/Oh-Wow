// React imports
import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

// Constants imports
import { STYLE_GENERAL } from "constants/STYLES";

const ToggleLong = (props) => {
  const { text, value, setValue } = props;

  return (
    <View style={styles.container}>
      <Text style={STYLE_GENERAL.sectionH2}>{text}</Text>
      <Switch
        style={styles.switch}
        value={value}
        onValueChange={(b) => setValue(b)}
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
