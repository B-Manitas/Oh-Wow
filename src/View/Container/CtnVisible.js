// React import
import React from "react";
import { View } from "react-native";

const CtnVisible = (props) => {
  // Destructure componnent props
  const { children } = props;
  const visible = props.visible === false ? false : true;

  if (!visible) return null;
  return <View {...props}>{children}</View>;
};

export default CtnVisible;
