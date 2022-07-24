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
    style: [
      { ...styles.button, ...props.style },
      isFlex && styles.flex,
      state && styles.buttonOn,
    ],
    styleText: [{ ...styles.text, ...props.styleText }, state && styles.textOn],
  };

  return <Button {...buttonProps} />;
};

export default CheckBoxText;

const styles = StyleSheet.create({
  button: {
    margin: 2,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.gray,
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
    fontWeight: "400",
  },

  textOn: {
    fontWeight: "700",
    color: "#fff",
  },
});
