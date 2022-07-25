// React import
import React from "react";
import { View, StyleSheet } from "react-native";

// Componnent import
import DaysList from "../../Generator/DaysList";
import PickerEmployee from "../../Picker/PickerEmployee";
import Picker from "../../Picker/Picker";
import GeneratePickItems from "../../Generator/GeneratePickItems";

// Constants import
import { MONTHS, YEARS } from "constants/DAYS";

// Libraries imports
import { controller as ctrl } from "model/Main";

const BookingHeader = ({ date, setDate, staff, setStaff }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pickerCtn}>
        <Picker
          generator={() => GeneratePickItems({ data: MONTHS })}
          value={date.getMonth() - 1}
          onChange={(m) => ctrl.onChange.month(setDate, m + 1)}
        />
        <Picker
          generator={() => GeneratePickItems({ data: YEARS })}
          value={YEARS.findIndex((year) => year == date.getFullYear())}
          onChange={(y) => ctrl.onChange.year(setDate, y)}
        />
        <PickerEmployee value={staff} onChange={(v) => setStaff(v)} />
      </View>

      <DaysList />
    </View>
  );
};

export default BookingHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  pickerCtn: {
    flexDirection: "row",
  },
});
