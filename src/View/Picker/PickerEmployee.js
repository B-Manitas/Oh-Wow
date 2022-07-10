import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import _ from "lodash";
import { ItemsStaff } from "../Generator/ItemsStaff";

const PickerEmployee = ({ onChange, value, all }) => {
  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      {ItemsStaff({onChange, all})}
    </Picker>
  );
};

export default PickerEmployee;

const styles = StyleSheet.create({
  picker: {
    flex: 2,
  },

  item: {
    height: 130,
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: -5,
    marginVertical: -8,
  },
});
