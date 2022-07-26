// React imports
import React from "react";
import { StyleSheet, View } from "react-native";

// Componnent imports
import Button from "buttons/Button";

// Libraries imports
import { controller as ctrl } from "model/Main";

// Constants imports
import TEXTS from "constants/TEXTS";
import COLORS from "constants/COLORS";
import { STYLES_SHADOW } from "constants/STYLES";

const Footer = (props) => {
  // Destructure props
  const { isHome, nav } = props;

  // Define text props
  const propsText = { numberOfLines: 1, adjustsFontSizeToFit: true };
  const propsButtonHome = {
    text: TEXTS.titleH2,
    onPress: () => ctrl.goTo.home(nav),
    disabled: isHome,
    style: [styles.button, styles.buttonLeft],
    styleText: [styles.text, isHome && styles.textOn],
    styleDisabled: styles.disabled,
    noShadow: true,
  };
  const propsButtonServices = {
    text: TEXTS.booking,
    onPress: () => ctrl.goTo.services(nav),
    disabled: !isHome,
    style: [styles.button, styles.buttonRight],
    styleText: [styles.text, !isHome && styles.textOn],
    styleDisabled: styles.disabled,
    noShadow: true,
  };

  return (
    <View style={styles.container}>
      <Button {...propsButtonHome} />
      <Button {...propsButtonServices} />
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
    padding: 3,
    backgroundColor: COLORS.main,

    ...STYLES_SHADOW.high,
  },

  button: {
    flex: 1,
    backgroundColor: COLORS.main,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },

  buttonRight: {
    borderLeftColor: "#fff",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },

  buttonLeft: {
    borderRightColor: "#fff",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },

  disabled: {
    opacity: 1,
    ...STYLES_SHADOW.noShadow,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },

  textOn: { textDecorationLine: "underline", fontWeight: "700" },
});
