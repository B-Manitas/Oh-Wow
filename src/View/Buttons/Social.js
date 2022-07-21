import React from "react";
import { StyleSheet, Linking } from "react-native";
import Button from "./Button";

import { controller as ctrl } from "model/Main";

const Social = (...props) => {
  const [{ url, icon }] = props;

  return (
    <Button
      image={icon}
      onPress={() => ctrl.onPress.link(url)}
      style={styles.icon}
    />
  );
};

export default Social;

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
