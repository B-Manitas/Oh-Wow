import React from "react";

import { View, Text, StyleSheet } from "react-native";
import CDate from "model/utils/CDate";
import Utils from "../../model/Utils";

const ContactSalon = ({ salon }) => {
  const am_on = CDate.toTimeString(salon.am_on);
  const am_off = CDate.toTimeString(salon.am_off);
  const pm_on = CDate.toTimeString(salon.pm_on);
  const pm_off = CDate.toTimeString(salon.pm_off);
  const day = Utils.openDaysText(salon.day_off);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{salon.name}</Text>

      <View style={styles.field}>
        <Text style={styles.h2_key}>Adresse:</Text>
        <Text style={styles.h2_value} selectable>
          {salon.address}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.h2_key}>Téléphone:</Text>
        <Text style={styles.h2_value} selectable>
          {salon.phone}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.h2_key}>{day.key}</Text>
        <Text style={styles.h2_value} numberOfLines={2}>
          {day.value}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.h2_key}>Le matin de</Text>
        <Text style={styles.h2_value}>
          {am_on} à {am_off}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.h2_key}>L'après-midi de</Text>
        <Text style={styles.h2_value}>
          {pm_on} à {pm_off}
        </Text>
      </View>
    </View>
  );
};

export default ContactSalon;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 20,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },

  h1: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 15,
  },

  h2_key: {
    fontSize: 18,
    fontWeight: "400",
    textDecorationLine: "underline",
  },

  h2_value: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
    flexWrap: "wrap",
    flex: 1,
  },

  field: {
    flexDirection: "row",
    marginVertical: 5,
  },
});
