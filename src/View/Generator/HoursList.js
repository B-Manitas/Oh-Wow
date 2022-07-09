import React from "react";
import { View, StyleSheet } from "react-native";
import CDate from "../../model/utils/CDate";

import Hour from "../Buttons/Hour";

const HoursList = ({ date, onPress, calendar, selected }) => {
  const am_hour = calendar.find((day) =>
    day === 0 ? 0 : date.isSameDate(day.date)
  )?.am_hours;

  const pm_hours = calendar.find((day) =>
    day === 0 ? 0 : date.isSameDate(day.date)
  )?.pm_hours;

  return (
    <View>
      <View style={styles.container}>
        {am_hour?.map((h_info, id) => (
          <Hour
            key={id}
            hour={CDate.toTimeString(h_info.time)}
            func={() => onPress(h_info.time)}
            is_available={h_info.is_on}
            is_selected={selected.getTime() === h_info.time}
          />
        ))}
      </View>
      <View style={styles.container}>
        {pm_hours?.map((h_info, id) => (
          <Hour
            key={id}
            hour={CDate.toTimeString(h_info.time)}
            func={() => onPress(h_info.time)}
            is_available={h_info.is_on}
            is_selected={selected.getTime() === h_info.time}
          />
        ))}
      </View>
    </View>
  );
};

export default HoursList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
