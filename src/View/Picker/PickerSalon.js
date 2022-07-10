import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import _ from "lodash";
import { ItemsSalon } from "../Generator/ItemsSalon";

const PickerSalon = ({ value, onChange }) => {
  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      {ItemsSalon({ onChange })}
    </Picker>
  );
};

export default PickerSalon;

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
    // backgroundColor: "red",
    marginLeft: -5,
    // marginRight: -15,
    // width: 60
  },
});
