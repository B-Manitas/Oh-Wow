// React import
import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Constant import
import { YEARS } from "constants/DAYS";

const PickerYears = (props) => {
  // Destructure props
  const { onChange, value } = props;

  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      <Picker.Item value={YEARS[0]} label={YEARS[0]} />
      <Picker.Item value={YEARS[1]} label={YEARS[1]} />
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
