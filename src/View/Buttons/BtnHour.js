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

    marginHorizontal: 3,
    marginVertical: 3,

    minWidth: 43,
    paddingHorizontal: 5,
    height: 43,
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
