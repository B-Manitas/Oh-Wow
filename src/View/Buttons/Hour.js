// React import
import React from "react";
import { StyleSheet } from "react-native";

// Componnent import
import Button from "./Button";

// Constant import
import COLORS from "constants/COLORS";

const Hour = (props) => {
  // Destructure props
  const { hour, visible, onPress, isOn } = props;

  // Define button props
  const propsButton = {
    text: hour,
    style: [styles.container, isOn && styles.ctnEnabled],
    styleText: [styles.text, isOn && styles.textEnabled],
    visible,
    onPress,
  };

  return <Button {...propsButton} />;
};

export default Hour;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderColor: COLORS.main,
    borderRadius: 3,
    borderWidth: 2,

    marginHorizontal: 5,
    marginVertical: 7,

    paddingVertical: 12,
  },

  text: {
    color: COLORS.main,
    fontWeight: "700",
  },

  ctnEnabled: {
    backgroundColor: "#faa4af",
    borderColor: "#faa4af",
  },

  textEnabled: {
    color: "#fff",
  },
});
