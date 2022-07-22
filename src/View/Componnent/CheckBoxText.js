// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnent imports
import Button from "button/Button";

// Constant imports
import COLORS from "constants/COLORS";
import { STYLES_SHADOW } from "constants/STYLES";

const CheckBoxText = (props) => {
  // Define componnent state
  const state = props.state;
  const isFlex = props.isFlex;

  // Define button props
  const buttonProps = {
    ...props,
    onPress: () => props.onPress(!state),
    style: [styles.button, isFlex && styles.flex, state && styles.buttonOn],
    styleText: styles.text,
  };

  return <Button {...buttonProps} />;
};

export default CheckBoxText;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.darkGray,
    backgroundColor: COLORS.default,
    width: 40,
    height: 40,

    ...STYLES_SHADOW.low,
  },

  flex: {
    flex: 1,
  },

  buttonOn: {
    backgroundColor: COLORS.main,
    borderColor: COLORS.main,
  },

  text: {
    color: COLORS.black,
    fontWeight: "600",
  },
});
