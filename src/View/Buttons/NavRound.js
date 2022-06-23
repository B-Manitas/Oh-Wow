import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

const NavRound = ({ title, img, func }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={func}>
      <View style={styles.container_img}>
        <Image style={styles.img} source={img} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavRound;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },

  container_img: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginVertical: 10,
    borderRadius: 10,
  },

  img: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 2,
  },
});
