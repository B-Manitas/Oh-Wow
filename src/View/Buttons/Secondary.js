// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnents imports
import Button from "button/Button";

const Secondary = (props) => {
  const disabled = props.disabled === true ? true : false;

  // Define props
  const propsButton = {
    ...props,
    style: [styles.button, disabled && styles.disabled],
    styleText: styles.text,
  };

  return <Button {...propsButton} />;
};

export default Secondary;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderColor: "#faa4af",
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: 15,
  },

  button_off: { opacity: 0.4 },

  text: {
    fontWeight: "600",
    color: "#faa4af",
    fontSize: 18,
  },
});
