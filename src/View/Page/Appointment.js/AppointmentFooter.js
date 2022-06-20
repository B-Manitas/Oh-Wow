import React from "react";
import { View, StyleSheet } from "react-native";

import Utils from "../../../model/Utils";
import Primary from "../../Buttons/Primary";
import HoursList from "../../Generator/HoursList";

const AppointmentFooter = ({ date }) => {
  return (
    <View style={styles.container}>
      <HoursList date={date} />
      <Primary
        text={"Prendre RDV"}
        height={10}
        font_size={18}
        style={styles.button_appt}
      />
    </View>
  );
};

export default AppointmentFooter;

const styles = StyleSheet.create({
  button_appt: {
    borderWidth: 0,
    marginTop: 15,
    marginBottom: 30,
  },
});