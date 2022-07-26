// React import
import React from "react";
import { View, StyleSheet } from "react-native";

// Componnent import
import PickerStaff from "pickers/PickerStaff";
import Picker from "pickers/Picker";
import GeneratePickItems from "generators/GeneratePickItems";
import DaysList from "generators/DaysList";

// Constants import
import { MONTHS, YEARS } from "constants/DAYS";

// Libraries imports
import { controller as ctrl } from "model/Main";

const HeaderPicker = (props) => {
  // Destructure componnent props
  const { date, setDate, staff, setStaff, allOption, showStaff } = props;

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

        <PickerStaff
          visible={ctrl.thisIsAdmin() && showStaff}
          allOption={allOption}
          value={staff}
          onChange={(v) => setStaff(v)}
        />
      </View>

      <DaysList />
    </View>
  );
};

export default HeaderPicker;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  pickerCtn: {
    flexDirection: "row",
  },
});
