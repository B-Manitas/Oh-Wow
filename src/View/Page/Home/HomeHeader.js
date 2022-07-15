import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { PHOTO } from "../../../constants/IMAGES";

const Home = ({ refreshing }) => {
  return (
    <View style={styles.container}>
      <View style={styles.refresh}>
        <Text style={styles.refresh_text}>
          {refreshing ? "Chargement..." : "Tirer pour rafraichir"}
        </Text>
      </View>
      <Image source={PHOTO.home} style={styles.image} />
      <Text style={styles.h1}>Oh Wow</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 50,
  },

  refresh: {
    top: -60,
    right: 0,
    left: 0,
    padding: 0,
    position: "absolute",
  },

  refresh_text: {
    fontSize: 25,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    marginBottom: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  h1: {
    fontSize: 40,
    textDecorationLine: "underline",
    fontWeight: "300",
    textAlign: "center",
  },
});
