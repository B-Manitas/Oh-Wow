import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Day from "../Buttons/Day";

const PickerCalendar = ({ data, header, footer, onPressDay, date }) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      renderItem={(day) => (
        <Day day={day.item} onPressDay={onPressDay} date={date} />
      )}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      numColumns={7}
    />
  );
};

export default PickerCalendar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
