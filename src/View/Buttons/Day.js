import React from "react";
import { StyleSheet } from "react-native";
import Calendars from "model/Calendars";

import Round from "./Round";

const Day = ({ day, date, onPressDay }) => {
  const size = 40;

  if (day == 0) return <Round size={size} colors="#fff" enabled={false} />;
  else {
    const day_date = day.date;
    const isToday = Calendars.isToday(day_date);

    if (date.getTime() === day_date.getTime()) {
      return (
        <Round
          size={size}
          text={day_date.getDate()}
          enabled={day.is_available_day}
          func={() => onPressDay(day_date)}
          style_ctn_enabled={{
            backgroundColor: "#4489C5",
            borderColor: "#4489C5",
          }}
          style_txt_enabled={{ color: "#fff" }}
          colors={"#4489C5"}
        />
      );
    }
    else if (isToday) {
      return (
        <Round
          size={size}
          text={day_date.getDate()}
          colors="#D95959"
          enabled={day.is_available_day}
          func={() => onPressDay(day_date)}
        />
      );
    }
    else {
      return (
        <Round
          size={size}
          text={day_date.getDate()}
          style_ctn_enabled={styles.enabled_ctn}
          style_txt_enabled={styles.enabled_txt}
          enabled={day.is_available_day}
          colors="#CECECE"
          func={() => onPressDay(day_date)}
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
