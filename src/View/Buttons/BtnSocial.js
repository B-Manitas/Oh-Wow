// React import
import React from "react";
import { StyleSheet } from "react-native";

// Componnent import
import Button from "./Button";

// Libraries import
import { controller as ctrl } from "model/Main";

const BtnSocial = (props) => {
  // Destructure
  const { url, icon } = props;

  return (
    <Button
      image={icon}
      onPress={() => ctrl.onPress.link(url)}
      style={styles.icon}
    />
  );
};

export default BtnSocial;

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
