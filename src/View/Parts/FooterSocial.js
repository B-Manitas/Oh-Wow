// React imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Componnents imports
import Social from "buttons/Social";

// Constants imports
import { ICON } from "constants/IMAGES";

const FooterSocial = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Retrouvez-nous sur</Text>
      <Social url="https://www.instagram.com/oh.wow.rades/" icon={ICON.insta} />
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
