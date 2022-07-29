// React imports
import React from "react";
import { FlatList, StyleSheet } from "react-native";

// Componnent imports
import BtnDay from "buttons/BtnDay";
import Empty from "./Empty";

const PickerCalendar = (props) => {
  // Destructure props
  const { data, header, footer, onPress, date, isSelected } = props;

  const propsBtnDay = { onPress, isSelected, calendarDate: date };

  return (
    <FlatList
      data={data}
      style={styles.container}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      renderItem={(day) => <BtnDay {...propsBtnDay} data={day.item} />}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      numColumns={7}
      ListEmptyComponent={<Empty />}
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
