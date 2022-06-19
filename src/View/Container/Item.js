import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const Item = ({ title, descr, price, duration }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} />

      <View style={styles.container_text}>
        <Text style={styles.h1}>{title}</Text>

        <Text style={styles.h2} numberOfLines={2}>
          {descr}
        </Text>

        <Text style={styles.info}>
          {price}€ - {duration}min
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    paddingBottom: 5,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
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
  },

  img: {
    marginRight: 15,
    width: 90,
    aspectRatio: 1,
  },

  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },

  h2: {
    marginVertical: 5,
    fontSize: 13,
  },

  info: {
    position: "absolute",
    bottom: 10,
    fontWeight: "bold",
  },
});
