import { StyleSheet, View } from "react-native";
import { DAYS, SHORT_DAYS } from "constants/DAYS";
import CheckBoxText from "../Componnent/CheckBoxText";

const DaysCheckBoxList = (props) => {
  const { value, setValue } = props;

  return (
    <View style={styles.container}>
      {SHORT_DAYS.map((day, id) => (
        <CheckBoxText
          {...props}
          isFlex
          text={day}
          key={id}
          state={value[id]}
          onPress={(b) => setValue({ [id]: b })}
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
