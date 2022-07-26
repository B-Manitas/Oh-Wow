import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BtnPrimary from "buttons/BtnPrimary";
import FooterSocial from "parts/FooterSocial";
import Header from "parts/Header";
import Page from "containers/Page";

import PAGES from "constants/PAGES";

const Connection = ({ navigation }) => {
  return (
    <Page>
      <Header nav={navigation} type="back" />

      <View style={styles.textCtn}>
        <Text style={styles.text}>Bienvenue</Text>
        <Text style={styles.text}>Oh WoW</Text>
      </View>

      <View style={styles.buttonsCtn}>
        <BtnPrimary
          text={"Créer un compte"}
          onPress={() => navigation.navigate(PAGES.SIGNUP)}
        />
        <BtnPrimary
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
  textCtn: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "300",
    fontSize: 28,
  },

  buttonsCtn: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});
