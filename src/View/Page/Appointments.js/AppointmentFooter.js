import React from "react";
import { View, StyleSheet } from "react-native";

import Utils from "../../../model/Utils";
import HoursList from "../../Generator/HoursList";

const AppointmentFooter = ({ date }) => {
  return (
    <View style={styles.container}>
      <HoursList date={date}/>
    </View>
  );
};

export default AppointmentFooter;

const styles = StyleSheet.create({
  container: {},
});
