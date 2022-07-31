// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnents imports
import Button from "buttons/Button";

// Constants imports
import COLORS from "constants/COLORS";

const BtnSecondary = (props) => {
  const disabled = props.disabled === true ? true : false;

  // Define props
  const propsButton = {
    ...props,
    style: [styles.button, disabled && styles.disabled],
    styleText: styles.text,
  };

  return <Button {...propsButton} />;
};

export default BtnSecondary;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderColor: COLORS.main,
    borderWidth: 2,

    paddingVertical: 15,
  },

  btnOff: { opacity: 0.4 },

  text: {
    fontWeight: "600",
    color: COLORS.main,
    fontSize: 18,
  },
});
