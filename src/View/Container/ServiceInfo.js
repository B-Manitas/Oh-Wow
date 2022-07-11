import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const ServiceInfo = ({ text, value, unit, enabled, flex, setValue, type }) => {
  return (
    <View style={[styles.container, { flex }]}>
      <Text style={styles.h2}>{text}</Text>
      <View style={styles.container_value}>
        <TextInput
          style={styles.h1}
          value={value}
          maxLength={5}
          editable={enabled}
          returnKeyType={"done"}
          keyboardType={type}
          allowFontScaling={true}
          onChangeText={(t) => setValue(t)}
        />
        <Text style={styles.h3}>{unit}</Text>
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
  },

  h1: {
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 5,
    minWidth: 30,
    textAlign: "center"
  },

  h2: {
    fontWeight: "200",
    fontSize: 15,
  },

  h3: {
    fontWeight: "500",
    fontSize: 15,
  },
});
