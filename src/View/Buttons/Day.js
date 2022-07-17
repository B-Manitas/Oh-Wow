import React from "react";
import { StyleSheet } from "react-native";

import Round from "./Round";

const Day = ({ day, date, onPressDay }) => {
  const day_date = day.date;
  const is_today = day_date?.isToday();
  const is_selected = day_date?.isSameDate(date);

  var params = {
    size: 40,
    text: day_date?.getDate(),
    enabled: day.is_on,
    func: () => onPressDay(day_date),
    style_ctn_enabled: styles.enabled_ctn,
    style_txt_enabled: styles.enabled_txt,
    colors: "#CECECE",
  };

  if (!day) params = { ...params, colors: "#fff", enabled: false };
  else if (!is_today && is_selected && day.is_on)
    params = {
      ...params,
      style_txt_enabled: styles.selected_txt,
      style_ctn_enabled: styles.selected_ctn,
      colors: "#faa4af",
    };
  else if (is_today && is_selected)
    params = {
      ...params,
      style_txt_enabled: styles.selected_txt,
      style_ctn_enabled: styles.selected_ctn,
      colors: "#faa4af",
    };
  else if (is_today && !is_selected)
    params = {
      ...params,
      colors: "#000",
      style_ctn_enabled: undefined,
      style_txt_enabled: undefined,
    };

  return <Round {...params} />;
};

export default Day;

const styles = StyleSheet.create({
  enabled_ctn: {
    borderColor: "#faa4af",
  },

  enabled_txt: {
    color: "#faa4af",
  },

  selected_ctn: {
    backgroundColor: "#faa4af",
    borderColor: "#faa4af",
  },

  selected_txt: {
    color: "#fff",
  },
});
