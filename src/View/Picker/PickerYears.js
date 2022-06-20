import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemsYears from "../Generator/ItemsYearsPicker";

const PickerYears = ({ onChange, value }) => {
  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      <Picker.Item value="2022" label="2022" />
      <Picker.Item value="2023" label="2023" />
    </Picker>
  );
};

export default PickerYears;

const styles = StyleSheet.create({
  picker: {
    flex: 1,
  },

  item: {
    height: 130,
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: -5,
    marginVertical: -8,
  },
});
