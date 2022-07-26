// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnents imports
import Button from "buttons/Button";

// Constants imports
import COLORS from "constants/COLORS";


const BtnPrimary = (props) => {
  const disabled = props.disabled === true ? true : false;

  // Define props
  const propsButton = {
    ...props,
    style: [{ ...styles.button, ...props.style }, disabled && styles.disabled],
    styleText: styles.text,
  };

  return <Button {...propsButton} />;
};

export default BtnPrimary;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: COLORS.main,
    paddingVertical: 18,
    width: "80%",
    alignSelf: "center",
  },

  text: {
    fontWeight: "700",
    fontSize: 20,
    color: "#fff",
  },

  disabled: {
    opacity: 0.5,
  },
});
