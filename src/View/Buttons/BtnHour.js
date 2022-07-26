// React import
import React from "react";
import { StyleSheet } from "react-native";

// Componnent import
import Button from "./Button";

// Constant import
import COLORS from "constants/COLORS";

const BtnHour = (props) => {
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

export default BtnHour;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderColor: COLORS.darkGray,
    borderRadius: 3,
    borderWidth: 1,

    marginHorizontal: 5,
    marginVertical: 7,

    paddingVertical: 12,
  },

  text: {
    color: COLORS.black,
    fontWeight: "700",
  },

  ctnEnabled: {
    backgroundColor: COLORS.main,
    borderColor: COLORS.main,
  },

  textEnabled: {
    color: "#fff",
  },
});
