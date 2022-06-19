import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

const Round = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.container_img}>
        <Image style={styles.img} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Round;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },

  container_img: {
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginVertical: 10,
  },

  img: {
    width: 64,
    height: 64,
  },
});
