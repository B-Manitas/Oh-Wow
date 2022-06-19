import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Link = ({ text, style, pad_top }) => {
  return (
    <TouchableOpacity style={{ paddingTop: pad_top }}>
      <Text style={[styles.link, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    marginBottom: 4,
  },
});
