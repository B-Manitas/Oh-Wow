import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import NavRound from "../../Buttons/NavRound";
import Item from "../../Container/Item";

import { PHOTO } from "../../../Constants/IMAGES";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container_img}>
        <Image source={PHOTO.home} style={styles.img} />
      </TouchableOpacity>

      <View style={styles.nav}>
        <NavRound title={"Les prestations"} />
        <NavRound title={"Le catalogues"} />
      </View>

      <View style={styles.trend}>
        <Text style={styles.text_trend}>Nos soins tendances</Text>
      </View>
      <Item title={"Pose d'ongles"} price={20} duration={60} descr={"Sed severitas amicitiae ."} />
      <Item title={"Pose d'ongles"} price={20} duration={60} descr={"Sed severitas amicitiae ."} />
      <Item title={"Pose d'ongles"} price={20} duration={60} descr={"Sed severitas amicitiae ."} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,

  },

  container_img: {
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    height: 170,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#fff",
  },

  img: {
    flex: 1,
    resizeMode: "contain",
  },

  nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  trend: {
    borderTopWidth: 2,
    borderTopColor: "#000",
    width: "85%",
    marginVertical: 20,
    paddingVertical: 10,
  },

  text_trend: {
    fontSize: 25,
    fontWeight: "200",
    paddingHorizontal: 20,
  },
});
