import React from "react";
import { StyleSheet } from "react-native";

import Round from "./Round";

const Hour = ({ hour, is_available, func, is_selected }) => {
  const colors = is_available ? "#383838" : "#faa4af";

  return (
    <Round
      size={40}
      text={hour}
      colors={colors}
      enabled={is_available}
      func={func}
      style_ctn_enabled={is_selected && styles.ctn_enabled}
      style_txt_enabled={is_selected && styles.txt_enabled}
    />
  );
};

export default Hour;

const styles = StyleSheet.create({
  ctn_enabled: {
    backgroundColor: "#faa4af",
    borderColor: "#faa4af",
  },

  txt_enabled: {
    color: "#fff",
  },
});
