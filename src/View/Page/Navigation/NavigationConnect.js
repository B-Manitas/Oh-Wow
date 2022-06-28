import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../../Buttons/Link";

const NavigationConnect = ({ navigation }) => {
  return (
    <View style={styles.nav}>
      <Link
        text={"Consulter les services proposées"}
        style_container={styles.button_nav}
        style_text={styles.text_nav}
        func={() => navigation.navigate("AllServices")}
      />
      <Link
        text={"Consulter mes rendez-vous"}
        style_container={styles.button_nav}
        style_text={styles.text_nav}
        func={() => navigation.navigate("Appointments")}
      />
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
