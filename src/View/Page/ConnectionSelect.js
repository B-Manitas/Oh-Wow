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
import Footer from "../Componnent/Footer";
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
        <ButtonRoundValid width={"75%"} font_size={28} height={20} text={"Créer un compte"} />
        <ButtonRoundValid width={"75%"} font_size={28} height={20} text={"Se connecter"} />
      </View>

      <Footer />
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
