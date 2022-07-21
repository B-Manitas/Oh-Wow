// React imports
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Constants imports
import TEXTS from "constants/TEXTS";

import { controller as ctrl } from "model/Main";

const Footer = (props) => {
  const { isHome, nav } = props;

  const props_text = { numberOfLines: 1, adjustsFontSizeToFit: true };
  const propsButtonHome = {
    style: styles.button,
    onPress: () => ctrl.goTo.home(nav),
    disabled: isHome,
  };
  const propsButtonServices = {
    style: [styles.button, styles.buttonRight],
    onPress: () => ctrl.goTo.services(nav),
    disabled: !isHome,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity {...propsButtonHome}>
        <Text {...props_text} style={[styles.text, isHome && styles.textOn]}>
          {TEXTS.title_h2}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity {...propsButtonServices}>
        <Text {...props_text} style={[styles.text, !isHome && styles.textOn]}>
          {TEXTS.booking}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    bottom: 45,

    marginHorizontal: 15,

    borderRadius: 5,
    backgroundColor: "#faa4af",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  button: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },

  buttonRight: { borderLeftColor: "#fff" },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
  },

  textOn: { textDecorationLine: "underline" },
});
