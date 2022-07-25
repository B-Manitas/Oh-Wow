// React imports
import React from "react";
import { StyleSheet, View } from "react-native";

// Componnent imports
import CheckBoxText from "../Componnent/CheckBoxText";

// Constants imports
import { SHORT_DAYS } from "constants/DAYS";

const DaysCheckBoxList = (props) => {
  // Destructure props
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
