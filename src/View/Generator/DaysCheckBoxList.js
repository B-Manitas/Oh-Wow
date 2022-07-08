import { DAYS, SHORT_DAYS } from "../../constants/DAYS";
import CheckBoxText from "../Componnent/CheckBoxText";

const DaysCheckBoxList = ({ value, setValue }) => {
  return SHORT_DAYS.map((day, id) => (
    <CheckBoxText
      text={day}
      key={id}
      flex={1}
      size={40}
      state={value[id]}
      func={(b) => setValue({ [id]: !b })}
      color_bd_active={"#c92a2a"}
      color_txt_active={"#c92a2a"}
    />
  ));
};

export default DaysCheckBoxList;
