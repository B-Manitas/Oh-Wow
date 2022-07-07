import React from "react";
import { View, StyleSheet } from "react-native";
import Calendars from "../../../model/Calendars";

import Primary from "../../Buttons/Primary";
import HoursList from "../../Generator/HoursList";

const BookingFooter = ({ date, calendar, navigation, onPress, data }) => {
  return (
    <View style={styles.container}>
      <HoursList date={date} onPress={onPress} calendar={calendar} />

      <Primary
        text={"Prendre RDV"}
        height={10}
        font_size={18}
        style={styles.button_appt}
        is_active={!Calendars.isZeroTime(new Date(date))}
        func={() => navigation.navigate("ConfirmAppt", data)}
      />
    </View>
  );
};

export default BookingFooter;

const styles = StyleSheet.create({
  button_appt: {
    borderWidth: 0,
    marginTop: 15,
    marginBottom: 30,
  },
});
