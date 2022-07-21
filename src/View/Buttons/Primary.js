// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnents imports
import Button from "button/Button";

const Primary = (props) => {
  const disabled = props.disabled === true ? true : false;

  // Define props
  const propsButton = {
    ...props,
    style: [{ ...styles.button, ...props.style }, disabled && styles.disabled],
    styleText: styles.text,
  };

  return <Button {...propsButton} />;
};

export default Primary;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "#faa4af",
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
