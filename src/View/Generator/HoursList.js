import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Utils from "../../model/Utils";
import Hour from "../Buttons/Hour";

const HoursList = ({ date }) => {
  const hours = Utils.hours(date);

  return (
    <View>
      <View style={styles.container}>
        {hours["morning"].map((h_info, id) => (
          <Hour key={id} hour={h_info.date.getHours()} is_available={h_info.is_available} />
        ))}
      </View>
      <View style={styles.container}>
        {hours["afternoon"].map((h_info, id) => (
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
