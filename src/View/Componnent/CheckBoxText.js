import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CheckBoxText = ({
  state,
  size,
  text,
  color_txt_active,
  color_bg_active,
  color_bd_active,
  flex,
  func,
}) => {
  return (
    <Pressable
      onPress={() => func(state)}
      style={[
        styles.button,
        { width: size, height: size, flex: flex },
        state && {
          backgroundColor: color_bg_active,
          borderColor: color_bd_active,
        },
      ]}
    >
      <Text
        style={state && { color: color_txt_active }}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CheckBoxText;

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    borderWidth: 2,
    backgroundColor: "#fafafa",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  text: {},
});
