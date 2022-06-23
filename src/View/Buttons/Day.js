import React from "react";
import { StyleSheet } from "react-native";
import Calendars from "../../model/Calendars";

import Utils from "../../model/Utils";
import Round from "./Round";

const Day = ({ day, state_day }) => {
  if (day == 0) {
    return <Round size={40} colors="#fff" enabled={false} />;
  } else {
    var date = day.date;
    var isPast = Calendars.isPast(date);
    var isToday = Calendars.isToday(date);

    if (state_day.val == day.date.getDate()) {
      return (
        <Round
          size={40}
          text={date.getDate()}
          colors="#4489C5"
          enabled={day.is_available}
          func={() => state_day.func(date.getDate())}
        />
      );
    } else if (isToday) {
      return (
        <Round
          size={40}
          text={date.getDate()}
          colors="#D95959"
          enabled={day.is_available}
          func={() => state_day.func(date.getDate())}
        />
      );
    } else {
      return (
        <Round
          size={40}
          text={date.getDate()}
          style_ctn_enabled={styles.enabled_ctn}
          style_txt_enabled={styles.enabled_txt}
          enabled={!isPast && day.is_available}
          colors="#CECECE"
          func={() => state_day.func(date.getDate())}
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
