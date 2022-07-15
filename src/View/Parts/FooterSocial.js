import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Social from "../Buttons/Social";

const FooterSocial = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Retrouvez-nous sur</Text>
      <Social />
    </View>
  );
};

export default FooterSocial;

const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#fff",
    width: "100%",
  },

  text: {
    fontWeight: "300",
    fontSize: 16,
    marginHorizontal: 10,
  },
});
