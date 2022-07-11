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
        <Text style={styles.h1}>{data.name}</Text>

        <Text style={styles.h2} numberOfLines={2}>
          {data.description}
        </Text>

        <Text style={styles.info}>
          {data.price}€ - {CDate.toTimeString(data.duration)}
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
    padding: 10,
    paddingBottom: 5,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 30,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  container_text: {
    height: 90,
    flex: 1,
  },

  img: {
    marginRight: 15,
    width: 90,
    height: 90,
    borderRadius: 2
  },

  h1: {
    fontSize: 20,
    fontWeight: "500",
  },

  h2: {
    marginVertical: 5,
    fontSize: 13,
  },

  info: {
    position: "absolute",
    bottom: 0,
    fontWeight: "bold",
  },
});
