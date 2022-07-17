import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../../Buttons/Link";

import { controller } from "model/Main";

const NavigationAdmin = ({ navigation }) => {
  const is_admin = controller.this_is_admin;

  return (
    <View>
      {is_admin && (
        <View style={styles.nav}>
          <Link
            text={"Gérer les salons"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
            func={() => navigation.navigate("Salons")}
          />
          <Link
            text={"Rechercher un utilisateur"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
            func={() => navigation.navigate("Search")}
          />
        </View>
      )}
    </View>
  );
};

export default NavigationAdmin;

const styles = StyleSheet.create({
  nav: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    // borderColor: "#faa4af"
  },

  button_nav: {
    width: "100%",
    marginVertical: 5,
  },

  text_nav: {
    fontSize: 20,
    // color: "#faa4af"
  },
});
