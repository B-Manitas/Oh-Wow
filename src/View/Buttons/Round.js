import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Round = ({
  text,
  enabled,
  colors,
  size,
  style_ctn_enabled,
  style_txt_enabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { width: size, height: size },
        { borderColor: colors },
        enabled && [styles.enabled, style_ctn_enabled],
      ]}
      disabled={!enabled}
    >
      <Text
        style={[
          styles.text,
          { color: colors },
          enabled && [styles.txt_enabled, style_txt_enabled],
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Round;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "#CECECE",
  },

  text: {
    color: "#CECECE",
  },

  enabled: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
  },

  txt_enabled: {
    fontWeight: "bold",
  },
});
