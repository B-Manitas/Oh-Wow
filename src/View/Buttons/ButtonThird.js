// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnent imports
import Button from "button/Button";

// Constants imports
import COLORS from "constants/COLORS";

const ButtonThird = (props) => {
  const important = props.important;

  return (
    <Button
      {...props}
      style={[styles.button, important && styles.important]}
      styleText={[styles.text, important && styles.importantText]}
    />
  );
};

export default ButtonThird;

const styles = StyleSheet.create({
  button: {
    marginVertical: 7,

    paddingVertical: 10,
    paddingHorizontal: 15,

    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: COLORS.default,
  },

  text: { fontSize: 17, color: COLORS.black },

  important: {
    backgroundColor: COLORS.error,
    borderColor: COLORS.error,
  },

  importantText: { color: "#fff", fontWeight: "600" },
});
