import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Absolute from "../../Buttons/Absolute";

import { controller as ctrl } from "model/Main";

const HomeHeader = ({ refreshing, app, setApp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.refresh}>
        <Text style={styles.refresh_text}>
          {refreshing ? "Chargement..." : "Tirer pour rafraichir"}
        </Text>
      </View>
      <Image source={{ uri: app?.img }} style={styles.image} />
      {ctrl.this_is_admin && (
        <Absolute
          text={"Modifier"}
          top={60}
          right={20}
          ctn_style={styles.btn_edit}
          func={() => ctrl.update.image(setApp)}
        />
      )}
      <Text style={styles.h1}>Oh WoW...</Text>
    </View>
  );
};

export default HomeHeader;

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
    // backgroundColor: "#faa4af"
  },

  btn_edit: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 7,
    margin: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderWidth: 0,
    borderColor: "#383838",
  },

  h1: {
    fontSize: 45,
    // textDecorationLine: "underline",
    fontWeight: "500",
    textAlign: "center",
    color: "#F87788"
  },
});
