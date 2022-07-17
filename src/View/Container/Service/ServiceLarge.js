import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import CDate from "../../../model/utils/CDate";

const ServiceLarge = ({ navigation, data }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Service", { data })}
    >
      <Image source={{ uri: data.img }} style={styles.img} />

      <View style={styles.container_text}>
        <Text style={styles.h1} numberOfLines={2}>
          {data.name}
        </Text>

        <Text style={styles.h2} numberOfLines={2}>
          {data.description}
        </Text>

        <Text style={styles.info}>
          {data.price}DT - {CDate.toTimeString(data.duration)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceLarge;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#f5f5f5",
    marginVertical: 3,
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    paddingRight: 10,
  },

  container_text: {
    height: 90,
    flex: 1,
  },

  img: {
    marginRight: 15,
    width: 115,
    height: 115,
  },

  h1: {
    fontSize: 18,
    fontWeight: "500",
  },

  h2: {
    marginVertical: 5,
    fontSize: 13,
  },

  info: {
    position: "absolute",
    bottom: -10,
    fontWeight: "bold",
  },
});
