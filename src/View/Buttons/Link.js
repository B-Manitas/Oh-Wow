import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Link = ({ text, style_container, style_text, pad_top, func }) => {
  return (
    <TouchableOpacity
      onPress={func}
      style={[style_container, { paddingTop: pad_top }]}
    >
      <Text style={style_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;
