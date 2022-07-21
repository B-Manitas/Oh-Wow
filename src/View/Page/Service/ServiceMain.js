// React imports
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Libraries import
import CDate from "model/utils/CDate";

const ServiceMain = (...props) => {
  // Destructure props
  const [{ service, visible }] = props;

  // Define text
  const durationText = CDate.toTimeString(service.duration);
  const priceText = `${service.price}DT`;

  if (visible) return null;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.h1}>{service.name}</Text>

      <View style={styles.section}>
        <View style={styles.parts}>
          <Text style={styles.h2}>{durationText}</Text>
        </View>

        <View style={styles.parts}>
          <Text style={styles.h2}>{priceText}</Text>
        </View>
      </View>

      <Text style={styles.p}>{service.description}</Text>
    </ScrollView>
  );
};

export default ServiceMain;

const styles = StyleSheet.create({
  container: {
    top: -20,
    height: "70%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
  },

  h1: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
  },

  section: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 25,
  },

  parts: {
    borderBottomColor: "#383838",
    borderBottomWidth: 2,
    marginHorizontal: 5,
    flex: 1,
  },

  h2: {
    fontSize: 22,
    fontWeight: "300",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    textAlign: "center",
  },

  p: {
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "300",
    marginBottom: 200,
  },
});
