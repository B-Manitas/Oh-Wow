import React from "react";
import { View, StyleSheet } from "react-native";
import Calendars from "model/Calendars";

import Hour from "../Buttons/Hour";

const HoursList = ({ date }) => {
  const hours = Calendars.hours(date);

  return (
    <View>
      <View style={styles.container}>
        {hours.morning.map((h_info, id) => (
          <Hour key={id} hour={h_info.date.getHours()} is_available={h_info.is_available} />
        ))}
      </View>
      <View style={styles.container}>
        {hours.afternoon.map((h_info, id) => (
          <Hour key={id} hour={h_info.date.getHours()} is_available={h_info.is_available} />
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
