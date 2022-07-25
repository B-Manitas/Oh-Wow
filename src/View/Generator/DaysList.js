// React import
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// Constants import
import { SHORT_DAYS } from "constants/DAYS";

const DaysList = () => {
  return (
    <View style={styles.container}>
      {SHORT_DAYS.map((day, id) => (
        <Text
          key={id}
          style={styles.day}
          numberOfLines={1}
          allowFontScaling={true}
        >
          {day}
        </Text>
      ))}
    </View>
  );
};

export default DaysList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  day: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
