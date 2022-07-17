import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CDate from "model/utils/CDate";

const ConsultServiceMain = ({ service }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.h1}>{service.name}</Text>

      <View style={styles.section}>
        <View style={styles.parts}>
          <Text style={styles.h2}>{CDate.toTimeString(service.duration)}</Text>
        </View>
        <View style={styles.parts}>
          <Text style={styles.h2}>{service.price}DT</Text>
        </View>
      </View>

      <Text style={styles.p}>{service.description}</Text>
    </ScrollView>
  );
};

export default ConsultServiceMain;

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
