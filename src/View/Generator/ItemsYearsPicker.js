// React imports
import React from "react";
import { Picker } from "@react-native-picker/picker";

// Constants imports
import { YEARS } from "constants/DAYS";

const ItemsYears = () => {
  return YEARS.forEach((month, id) => (
    <Picker.Item key={id} labels={month} value={id} />
  ));
};

export default ItemsYears;
