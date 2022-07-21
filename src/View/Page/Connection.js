import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Primary from "../Buttons/Primary";
import FooterSocial from "../Parts/FooterSocial";
import Header from "../Parts/Header";
import Page from "../Container/Page";

import PAGES from "constants/PAGES";

const Connection = ({ navigation }) => {
  return (
    <Page>
      <Header nav={navigation} type="back" />

      <View style={styles.content_text}>
        <Text style={styles.text}>Bienvenue</Text>
        <Text style={styles.text}>Oh WoW</Text>
      </View>

      <View style={styles.content_btn}>
        <Primary
          text={"Créer un compte"}
          onPress={() => navigation.navigate(PAGES.SIGNUP)}
        />
        <Primary
          text={"Se connecter"}
          onPress={() => navigation.navigate(PAGES.LOGIN)}
        />
      </View>

      <FooterSocial />
    </Page>
  );
};

export default Connection;

const styles = StyleSheet.create({
  content_text: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "300",
    fontSize: 28,
  },

  content_btn: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});
