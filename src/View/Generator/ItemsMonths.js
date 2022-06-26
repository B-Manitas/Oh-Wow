import { Picker } from "@react-native-picker/picker";
import { MONTHS } from "../../constants/DAYS";

const ItemsMonths = () => {
  return MONTHS.forEach((month, id) => (
    <Picker.Item labels={month} value={id} />
  ));
};

export default ItemsMonths;
