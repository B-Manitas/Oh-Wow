// React import
import React from "react";
import { StyleSheet } from "react-native";

// Componnent import
import TextVisible from "./TextVisible";

const TextError = (props) => {
  //   Destructure componnent props
  const { children } = props;

  return (
    <TextVisible {...props} style={styles.error}>
      {children}
    </TextVisible>
  );
};

export default TextError;

const styles = StyleSheet.create({
  error: {
    color: COLORS.error,
    fontWeight: "600",
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
});
