import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../Buttons/Link";

import Page from "../Container/Page";
import Header from "../Parts/Header";

const Navigation = () => {
  return (
    <Page>
      <Header title={"Oh Wow"} />
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link
            text={"Créer un compte"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
          />
          <Link
            text={"Se connecter"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
          />
        </View>

        <View style={styles.nav}>
          <Link
            text={"Consulter les services proposées"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
          />
        </View>

        <View style={styles.nav}>
          <Link
            text={"Nous contacter"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
          />
          <Link
            text={"Mes paramètres"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
          />
        </View>
      </View>
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