import React from "react";
import { View, StyleSheet } from "react-native";

import DaysList from "../../Generator/DaysList";
import PickerEmployee from "../../Picker/PickerEmployee";
import Picker from "../../Picker/Picker";
import { MONTHS, YEARS } from "../../../constants/DAYS";

import GeneratePickItems from "../../Generator/GeneratePickItems";

import { controller } from "model/Main";

const BookingHeader = ({ date, setDate, staff, setStaff }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.container_picker}>
          <Picker
            generator={() => GeneratePickItems({ data: MONTHS })}
            value={date.getMonth() - 1}
            onChange={(m) => controller.onChange.month(setDate, m + 1)}
          />
          <Picker
            generator={() => GeneratePickItems({ data: YEARS })}
            value={YEARS.findIndex((year) => year == date.getFullYear())}
            onChange={(y) => controller.onChange.year(setDate, y)}
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
