// React import
import React from "react";
import { View } from "react-native";

const CtnView = (props) => {
  // Destructure componnent props
  const { children, visible } = props;

  if (!visible) return null;
  return <View {...props}>{children}</View>;
};

export default CtnView;
