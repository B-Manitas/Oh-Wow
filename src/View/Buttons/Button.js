// React imports
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

// Constants imports
import { ICON } from "constants/IMAGES";
import { STYLES_SHADOW } from "constants/STYLES";

const Button = (props) => {
  // Define componnent state
  const shadow = props.shadow === false ? false : true;
  const visible = props.visible === false ? false : true;
  const disabled = props.disabled;

  // Define button props
  const propsButton = {
    style: [
      styles.button,
      shadow && !disabled && STYLES_SHADOW.medium,
      disabled && styles.disabled,
      props.style,
    ],
    disabled,
    onPress: props.onPress,
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

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 5,
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
