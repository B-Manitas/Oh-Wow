// React import
import React from "react";
import { View, StyleSheet } from "react-native";

// Componnent import
import Primary from "button/Primary";
import HoursList from "../../Generator/HoursList";

// Libraries import
import CDate from "model/utils/CDate";
import { controller as ctrl } from "model/Main";

const BookingFooter = (props) => {
  // Destructure props
  const { date, calendar, nav, onPress, data } = props;

  // Define componnent state
  const aptDate = new CDate(data.apt.date);

  return (
    <View>
      <HoursList
        date={date}
        onPress={onPress}
        calendar={calendar}
        selected={aptDate}
      />

      <Primary
        text={"Prendre rendez-vous"}
        disabled={aptDate.isZeroTime()}
        onPress={() => ctrl.goTo.confirmApt(nav, data)}
      />
    </View>
  );
};

export default BookingFooter;
