import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Utils from "../../../model/Utils";

import DaysList from "../../Generator/DaysList";
import PickerMonths from "../../Picker/PickerMonths";
import PickerYears from "../../Picker/PickerYears";

const AppointmentHeader = (props) => {
  const onChangeMonth = (v) =>
    Utils.onChangeCalendarPicker(
      Utils.dictState(v, props.month.func),
      props.year,
      props.calendar
    );

  const onChangeYear = (v) =>
    Utils.onChangeCalendarPicker(
      props.month,
      Utils.dictState(v, props.year.func),
      props.calendar
    );

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
          <PickerMonths
            value={props.month.val}
            onChange={(v) => onChangeMonth(v)}
          />
          <PickerYears
            value={props.year.val}
            onChange={(v) => onChangeYear(v)}
          />
        </View>
      </View>

      <View style={styles.container_day}>
        <DaysList />
      </View>
    </View>
  );
};

export default AppointmentHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  container_nextslot: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
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
