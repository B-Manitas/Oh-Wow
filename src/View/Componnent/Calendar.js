import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Day from "../Buttons/Day";

const Calendar = ({ arr, header, footer, state_day }) => {
  return (
    <FlatList
      data={arr}
      style={styles.container}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      renderItem={(day) => <Day day={day.item} state_day={state_day} />}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      numColumns={7}
    />
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
});
