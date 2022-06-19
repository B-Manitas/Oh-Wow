import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemsMonths from "../Generator/ItemsMonths";

const PickerMonths = ({onChange, value}) => {
  return (
    <Picker
      style={styles.picker}
      itemStyle={styles.item}
      numberOfLines={1}
      selectedValue={value}
      onValueChange={(v) => onChange(v)}
    >
      <Picker.Item value={0} label="Janvier"/>
      <Picker.Item value={1} label="Février"/>
      <Picker.Item value={2} label="Mars"/>
      <Picker.Item value={3} label="Avril"/>
      <Picker.Item value={4} label="Mai"/>
      <Picker.Item value={5} label="Juin"/>
      <Picker.Item value={6} label="Juillet"/>
      <Picker.Item value={7} label="Août"/>
      <Picker.Item value={8} label="Septembre"/>
      <Picker.Item value={9} label="Octobre"/>
      <Picker.Item value={10} label="Novembre"/>
      <Picker.Item value={11} label="Décembre"/>
    </Picker>
  );
};

export default PickerMonths;

const styles = StyleSheet.create({
  picker: {
    flex: 1,
  },

  item: {
    height: 130,
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: -5,
  },
});
