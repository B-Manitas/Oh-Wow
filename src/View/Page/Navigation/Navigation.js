import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { PHOTO } from "../../../constants/IMAGES";
import Link from "../../Buttons/Link";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import NavigationBody from "./NavigationBody";

const Navigation = ({ navigation }) => {
  return (
    <Page is_safe_input={false}>
      <Header title={"Oh Wow"} navigation={navigation} />
      <NavigationBody navigation={navigation} />
    </Page>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 50,
    paddingVertical: 10,
  },

  nav: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  button_nav: {
    width: "100%",
    marginVertical: 5,
  },

  text_nav: {
    fontSize: 20,
  },
});
