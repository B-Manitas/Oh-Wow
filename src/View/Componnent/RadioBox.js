// React imports
import React from "react";
import { StyleSheet } from "react-native";

import CheckBoxText from "componnents/CheckBoxText";

const RadioBox = (props) => {
  // Destructure props
  const { id, idSelected } = props;

  // Define button props
  const propsButton = {
    ...props,
    styleText: styles.text,
    state: id == idSelected,
    noResize: true,
    onPress: () => props.onPress(id),
  };

  return <CheckBoxText {...propsButton} />;
};

export default RadioBox;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
