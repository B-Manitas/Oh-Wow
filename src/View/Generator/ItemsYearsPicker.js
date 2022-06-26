import { Picker } from "@react-native-picker/picker";
import { YEARS } from "../../constants/DAYS";

const ItemsYears = () => {
  return YEARS.forEach((month, id) => (
    <Picker.Item key={id} labels={month} value={id} />
  ));
};

export default ItemsYears;
