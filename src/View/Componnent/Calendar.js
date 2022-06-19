import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Day from "../Buttons/Day";

const Calendar = ({ arr, header }) => {
  return (
    <FlatList
      data={arr}
      style={styles.container}
      ListHeaderComponent={header}
      renderItem={(day) => <Day day={day.item} />}
      numColumns={7}
    />
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  }
})
