import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import DaysList from "../../Generator/DaysList";
import PickerEmployee from "../../Picker/PickerEmployee";
import Picker from "../../Picker/Picker";
import { MONTHS, YEARS } from "../../../constants/DAYS";

import GeneratePickItems from "../../Generator/GeneratePickItems";

const BookingHeader = ({ date, setDate, staff, setStaff }) => {
  const onChangeMonth = (v) =>
    setDate(new Date(date.getFullYear(), v, date.getDate() + 1));

  const onChangeYear = (v) =>
    setDate(new Date(YEARS[v], date.getMonth(), date.getDate() + 1));

  return (
    <View style={styles.container}>
      <View style={styles.container_nextslot}>
        <Text style={styles.text_slot}>Prochain créneau</Text>
        <TouchableOpacity style={styles.btn_nextslot}>
          <Text style={styles.btn_txt_nextslot}>Le 20/05 à 16h</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text_slot}>Autres créneaux</Text>

        <View style={styles.container_picker}>
          <Picker
            generator={() => GeneratePickItems({ data: MONTHS })}
            value={date.getMonth()}
            onChange={(v) => onChangeMonth(v)}
          />
          <Picker
            generator={() => GeneratePickItems({ data: YEARS })}
            value={YEARS.findIndex((year) => year == date.getFullYear())}
            onChange={(v) => onChangeYear(v)}
          />
          <PickerEmployee value={staff} onChange={(v) => setStaff(v)} />
        </View>
      </View>

      <View style={styles.container_day}>
        <DaysList />
      </View>
    </View>
  );
};

export default BookingHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  container_nextslot: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },

  text_slot: {
    fontSize: 20,
    fontWeight: "300",
  },

  btn_nextslot: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    position: "absolute",
    right: 0,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#fff",
  },

  btn_txt_nextslot: {
    fontSize: 20,
    fontWeight: "300",
  },

  container_picker: {
    flexDirection: "row",
  },

  container_day: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
});
