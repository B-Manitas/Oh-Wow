// React import
import React from "react";
import { View, StyleSheet } from "react-native";

// Componnent import
import BtnHour from "buttons/BtnHour";

// Libraries import
import CDate from "model/utils/CDate";

const HoursList = (props) => {
  // Destructure props
  const { date, onPress, calendar, selected } = props;

  // Define am hours list
  const hoursAM = calendar.find((day) =>
    day === 0 ? 0 : date.isSameDate(day.date)
  )?.am_hours;

  // Define pm hours list
  const hoursPM = calendar.find((day) =>
    day === 0 ? 0 : date.isSameDate(day.date)
  )?.pm_hours;

  return (
    <View style={styles.container}>
      <View style={styles.hoursCtn}>
        {hoursAM?.map((hour, id) => (
          <BtnHour
            key={id}
            hour={CDate.toTimeString(hour.time)}
            onPress={() => onPress(hour.time)}
            visible={hour.is_on}
            isOn={selected.getTime() === hour.time}
          />
        ))}
      </View>

      <View style={styles.hoursCtn}>
        {hoursPM?.map((hour, id) => (
          <BtnHour
            key={id}
            hour={CDate.toTimeString(hour.time)}
            onPress={() => onPress(hour.time)}
            visible={hour.is_on}
            isOn={selected.getTime() === hour.time}
          />
        ))}
      </View>
    </View>
  );
};

export default HoursList;

const styles = StyleSheet.create({
  container: { marginBottom: 20 },

  hoursCtn: { flexDirection: "row", flexWrap: "wrap" },
});
