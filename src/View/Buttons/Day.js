import React from "react";
import { StyleSheet } from "react-native";

import Utils from "../../model/Utils";
import Round from "./Round";

const Day = ({ day }) => {
  if (day == 0) {
    return <Round size={40} colors="#fff" enabled={false} />;
  } else {
    var isPast = Utils.isPast(day.day);
    var isToday = Utils.isToday(day.day);

    if (isToday) {
      return (
        <Round
          size={40}
          text={day.day}
          colors="#d95959"
          enabled={day.is_available}
        />
      );
    } else {
      return (
        <Round
          size={40}
          text={day.day}
          style_ctn_enabled={styles.enabled_ctn}
          style_txt_enabled={styles.enabled_txt}
          enabled={!isPast && day.is_available}
          colors="#CECECE"
        />
      );
    }
  }
};

export default Day;

const styles = StyleSheet.create({
  enabled_ctn: {
    borderColor: "#383838",
  },

  enabled_txt: {
    color: "#383838",
  },
});
