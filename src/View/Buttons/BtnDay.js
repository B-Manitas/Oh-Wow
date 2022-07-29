// React imports
import React from "react";
import { StyleSheet } from "react-native";

// Componnent imports
import Button from "./Button";

// Constants imports
import COLORS from "constants/COLORS";

const BtnDay = (props) => {
  // Destructure componnent props
  const { data, calendarDate, onPress } = props;

  // Define componnent state
  const date = data.date;
  const isToday = date?.isToday();
  const isHidden = !date;
  const noCanOn = !data.is_on && !isHidden;
  const isSelected = props.isSelected === false ? false : true;
  const isOn = date?.isSameDate(calendarDate) && !noCanOn;

  const propsButton = {
    onPress: () => onPress(date),
    text: date?.getDate(),
    disabled: isHidden || noCanOn,
    noShadow: isHidden || noCanOn,
    style: [
      styles.button,
      isHidden && styles.hidden,
      noCanOn && styles.btnNoCanOn,
      isToday && styles.btnToday,
      isSelected && isOn && styles.btnOn,
    ],
    styleText: [
      styles.txt,
      noCanOn && styles.txtNoCanOn,
      isToday && styles.txtToday,
      isSelected && isOn && styles.txtOn,
    ],
  };

  return <Button {...propsButton} />;
};

export default BtnDay;

const styles = StyleSheet.create({
  hidden: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  button: {
    flex: 1,
    padding: 10,
    margin: 3,
    backgroundColor: "#fff",
    borderColor: COLORS.darkGray,
    borderWidth: 1,
  },

  btnOn: {
    backgroundColor: COLORS.main,
    borderColor: "transparent",
  },

  btnToday: {},

  btnNoCanOn: {
    borderColor: "#fff",
  },

  txt: {
    fontWeight: "600",
    color: COLORS.black,
  },

  txtToday: {
    color: COLORS.main,
  },

  txtNoCanOn: {
    color: COLORS.darkGray,
  },

  txtOn: {
    color: "#fff",
    fontWeight: "800",
  },
});
