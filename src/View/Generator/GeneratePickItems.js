import { Picker as ReactPicker } from "@react-native-picker/picker";

export default GeneratePickItems = ({ data }) => {
  return data.map((item, id) => (
    <ReactPicker.Item key={id} value={id} label={item} />
  ));
};
