import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ServiceInfo = ({ text, value, unit, flex }) => {
  return (
    <View style={[styles.container, { flex }]}>
      <Text style={styles.h1}>{text}</Text>
      <View style={styles.container_value}>
        <Text style={styles.h2}>{value}</Text>
        <Text style={styles.h2}>{unit}</Text>
      </View>
    </View>
  );
};

export default ServiceInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container_value: {
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 2,
    justifyContent: "center",
  },

  h2: {
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 5,
  },

  h1: {
    fontWeight: "200",
    fontSize: 15,
  },
});
