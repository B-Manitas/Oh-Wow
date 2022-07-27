// React import
import React from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "constants/COLORS";

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>...</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },

  text: {
    fontSize: 50,
    fontWeight: "600",
    color: COLORS.darkGray,
  },
});
