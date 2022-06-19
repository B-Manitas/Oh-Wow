import { Picker } from "@react-native-picker/picker";
import { YEARS } from "../../Constants/DAYS";

const ItemsYears = () => {
  return YEARS.forEach((month, id) => (
    <Picker.Item key={id} labels={month} value={id} />
  ));
};

export default ItemsYears;
