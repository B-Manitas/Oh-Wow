// React imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Librarie imports
import CDate from "model/utils/CDate";
import Utils from "model/Utils";

// Constants imports
import COLORS from "constants/COLORS";

const CtnSalonContact = (props) => {
  // Destructure props
  const { salon } = props;

  // Define date and time text
  const amOn = CDate.toTimeString(salon.am_on);
  const amOff = CDate.toTimeString(salon.am_off);
  const pmOn = CDate.toTimeString(salon.pm_on);
  const pmOff = CDate.toTimeString(salon.pm_off);
  const day = Utils.openDaysText(salon.day_off);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{salon.name}</Text>

      <View style={styles.field}>
        <Text style={styles.key}>Adresse:</Text>
        <Text style={styles.value} selectable>
          {salon.address}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.key}>Téléphone:</Text>
        <Text style={styles.value} selectable>
          {salon.phone}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.key}>{day.key}</Text>
        <Text style={styles.value} numberOfLines={2}>
          {day.value}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.key}>Le matin de</Text>
        <Text style={styles.value}>
          {amOn} à {amOff}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.key}>L'après-midi de</Text>
        <Text style={styles.value}>
          {pmOn} à {pmOff}
        </Text>
      </View>
    </View>
  );
};

export default CtnSalonContact;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    marginHorizontal: 10,
    borderTopWidth: 2,
    borderColor: COLORS.main,
  },

  h1: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
    paddingBottom: 10,
  },

  key: {
    fontSize: 18,
    fontWeight: "400",
    textDecorationLine: "underline",
  },

  value: {
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
