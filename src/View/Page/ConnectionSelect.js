import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import ButtonRoundValid from "../Componnent/ButtonRoundValid";
import ButtonSocial from "../Componnent/ButtonSocial";
import Header from "../Componnent/Header";
import Page from "./Page";

const ConnectionSelect = () => {
  return (
    <Page>
      <Header />

      <View style={styles.content_text}>
        <Text style={styles.text}>Oh Wow !</Text>
        <Text style={styles.text}>Bienvenue</Text>
      </View>

      <View style={styles.content_btn}>
        <ButtonRoundValid text={"Créer un compte"} />
        <ButtonRoundValid text={"Se connecter"} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footer_text}>Retrouvez-nous sur</Text>
        <ButtonSocial />
      </View>
    </Page>
  );
};

export default ConnectionSelect;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },

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
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    right: 0,
    marginVertical: 10,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  footer_text: {
    fontWeight: "300",
    fontSize: 16,
    marginHorizontal: 10,
  },
});
