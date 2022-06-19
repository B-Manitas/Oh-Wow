import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Menu from "../Buttons/Menu";

const Header = ({ title, type }) => {
  return (
    <View style={styles.header}>
      <Menu type={type} />
      <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
  },

  title: {
    paddingLeft: 20,
    marginHorizontal: 30,
    fontWeight: "bold",
    fontSize: 32,
  },
});
