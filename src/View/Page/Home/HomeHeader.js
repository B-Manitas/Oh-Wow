import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import NavRound from "../../Buttons/NavRound";

import { PHOTO } from "../../../Constants/IMAGES";

const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container_img}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image source={PHOTO.home} style={styles.img} />
      </TouchableOpacity>

      <View style={styles.nav}>
        <NavRound
          func={() => navigation.navigate("AllServices")}
          img={PHOTO.services}
          title={"Les prestations"}
        />
        <NavRound
          func={() => navigation.navigate("AllServices")}
          img={PHOTO.nails}
          title={"Le catalogue"}
        />
        <NavRound
          func={() => navigation.navigate("Appointments")}
          img={PHOTO.plannings}
          title={"Mes RDV"}
        />
      </View>

      <View style={styles.trend}>
        <Text style={styles.text_trend}>Nos soins tendances</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
  },

  container_img: {
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 2,
    borderWidth: 3,
  },

  img: {
    width: "100%",
    height: 169,
    resizeMode: "cover",
    // aspectRatio: 1
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
    marginTop: 8,
    paddingVertical: 10,
  },

  text_trend: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "300",
    paddingHorizontal: 20,
  },
});
