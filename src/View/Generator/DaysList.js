import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { DAYS } from "../../constants/DAYS";

const DaysList = () => {
  return DAYS.map((day, id) => (
    <Text key={id} style={styles.day} numberOfLines={1} allowFontScaling={true}>
      {day}
    </Text>
  ));
};

export default DaysList;

const styles = StyleSheet.create({
  day: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
