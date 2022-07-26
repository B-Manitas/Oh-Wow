// React import
import React from "react";
import { StyleSheet } from "react-native";
import { Picker as ReactPicker } from "@react-native-picker/picker";

const Picker = (props) => {
  // Destructure props
  const { generator, value, onChange } = props;
  return (
    <ReactPicker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      {generator()}
    </ReactPicker>
  );
};

export default Picker;

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
