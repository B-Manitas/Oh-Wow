import { StyleSheet, View } from "react-native";
import { DAYS, SHORT_DAYS } from "../../constants/DAYS";
import CheckBoxText from "../Componnent/CheckBoxText";

const DaysCheckBoxList = ({ value, setValue }) => {
  return (
    <View style={styles.container}>
      {SHORT_DAYS.map((day, id) => (
        <CheckBoxText
          text={day}
          key={id}
          flex={1}
          size={40}
          state={value[id]}
          func={(b) => setValue({ [id]: !b })}
          color_bd_active={"#EE7860"}
          color_bg_active={"#fff"}
          color_txt_active={"#EE7860"}
        />
      ))}
    </View>
  );
};

export default DaysCheckBoxList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
