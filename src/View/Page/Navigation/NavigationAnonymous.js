import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../../Buttons/Link";

const NavigationAnonymous = ({ navigation }) => {
  return (
    <View style={styles.nav}>
      <Link
        text={"Nous contacter"}
        style_container={styles.button_nav}
        style_text={styles.text_nav}
        func={() => navigation.navigate("Contact")}
      />
      <Link
        text={"Mes paramètres"}
        style_container={styles.button_nav}
        style_text={styles.text_nav}
        func={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default NavigationAnonymous;

const styles = StyleSheet.create({
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
