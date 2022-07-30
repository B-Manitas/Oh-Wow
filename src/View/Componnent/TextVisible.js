// React import
import React from "react";
import { Text } from "react-native";

const TextVisible = (props) => {
  // Destructure componnent props
  const { children } = props;
  const visible = props.visible === false ? false : true;

  if (visible) return null;
  return <Text {...props}>{children}</Text>;
};

export default TextVisible;
