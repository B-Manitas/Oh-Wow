// React imports
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

// Constants imports
import { ICON } from "constants/IMAGES";
import { STYLES_SHADOW } from "constants/STYLES";

const Button = (props) => {
  // Define componnent state
  const visible = props.visible === false ? false : true;
  const noShadow = props.noShadow;
  const disabled = props.disabled;

  // Define button props
  const propsButton = {
    style: [
      styles.button,
      !noShadow && !disabled && STYLES_SHADOW.medium,
      disabled && !noShadow && { ...styles.disabled, ...props.styleDisabled },
      props.style,
    ],
    disabled,
    onPress: props.onPress,
    activeOpacity: props.activeOpacity,
  };

  // Define image props
  const propsImage = {
    style: { ...styles.image, ...props.styleImg },
    source: props.image,
    defaultSource: ICON.default,
  };

  // Define button props
  const propsText = {
    style: props.styleText,
    numberOfLines: props.nbLines ? props.nbLines : 1,
    allowFontScalling: true,
    adjustsFontSizeToFit: props.noResize === true ? false : true,
  };

  if (!visible) return null;
  return (
    <TouchableOpacity {...propsButton}>
      {props.image && <Image {...propsImage} />}
      {props.text && <Text {...propsText}>{props.text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 3,
  },

  disabled: {
    opacity: 0.5,
    ...STYLES_SHADOW.low,
  },

  image: {
    width: "100%",
    height: "100%",
    zIndex: 6,
  },
});
