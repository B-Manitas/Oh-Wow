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
  else if (!is_today && !day_date.isPast() && is_selected)
    params = {
      ...params,
      style_txt_enabled: styles.selected_txt,
      style_ctn_enabled: styles.selected_ctn,
      colors: "#4489C5",
    };
  else if (is_today && is_selected)
    params = {
      ...params,
      style_txt_enabled: styles.selected_txt,
      style_ctn_enabled: styles.selected_ctn,
      colors: "#D95959",
    };
  else if (is_today && !is_selected)
    params = {
      ...params,
      colors: "#D95959",
      style_ctn_enabled: undefined,
      style_txt_enabled: undefined,
    };

  return <Round {...params} />;
};

export default Day;

const styles = StyleSheet.create({
  enabled_ctn: {
    borderColor: "#383838",
  },

  enabled_txt: {
    color: "#383838",
  },

  selected_ctn: {
    backgroundColor: "#4489C5",
    borderColor: "#4489C5",
  },

  selected_txt: {
    color: "#fff",
  },
});
