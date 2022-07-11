import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../../Buttons/Link";
import NavigationAdmin from "./NavigationAdmin";
import NavigationStaff from "./NavigationStaff";

const NavigationConnect = ({ navigation }) => {
  return (
    <View>
      <View style={styles.nav}>
        <Link
          text={"Accueil"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("Home")}
        />
        <Link
          text={"Notre catalogue"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("AllServices")}
        />
        <Link
          text={"Mes rendez-vous"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("Appointments")}
        />
      </View>

      <NavigationStaff navigation={navigation} />
      <NavigationAdmin navigation={navigation} />

      <View style={styles.nav}>
        <Link
          text={"Mes paramètres"}
          style_container={styles.button_nav}
          style_text={styles.text_nav}
          func={() => navigation.navigate("Settings")}
        />
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

export default NavigationConnect;

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
