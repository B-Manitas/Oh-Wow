import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Primary from "../Buttons/Primary";
import Footer from "../Parts/Footer";
import Header from "../Parts/Header";
import Page from "../Container/Page";

const Connection = () => {
  return (
    <Page>
      <Header />

      <View style={styles.content_text}>
        <Text style={styles.text}>Oh Wow !</Text>
        <Text style={styles.text}>Bienvenue</Text>
      </View>

      <View style={styles.content_btn}>
        <Primary
          width={"75%"}
          font_size={28}
          height={20}
          text={"Créer un compte"}
        />
        <Primary
          width={"75%"}
          font_size={28}
          height={20}
          text={"Se connecter"}
        />
      </View>

      <Footer />
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
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});
