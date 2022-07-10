import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../../Buttons/Link";

const NavigationDisconnect = ({ navigation }) => {
  return (
    <View>
      <View style={styles.nav}>
        <Link
          text={"Créer un compte"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("SignUp")}
        />
        <Link
          text={"Se connecter"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.nav}>
        <Link
          text={"Notre catalogue"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("AllServices")}
        />
      </View>
      <View style={styles.nav}>
        <Link
          text={"Nous contacter"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("Contact")}
        />
      </View>
    </View>
  );
};

export default NavigationDisconnect;

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
