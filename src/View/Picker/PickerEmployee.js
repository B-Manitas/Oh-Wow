// React imports
import React from "react";
import { StyleSheet } from "react-native";

// React imports
import { Picker } from "@react-native-picker/picker";
import { ItemsStaff } from "generators/ItemsStaff";

const PickerEmployee = (props) => {
  // Define componnent props
  const { onChange, value, allOption, visible } = props;

  if (!visible) return null;
  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      {ItemsStaff({ onChange, allOption })}
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
