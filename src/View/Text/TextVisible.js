// React import
import React from "react";
import { Text } from "react-native";

const TextVisible = (props) => {
  // Destructure componnent props
  const { children, visible } = props;

  if (!visible) return null;
  return <Text {...props}>{children}</Text>;
};

export default TextVisible;
