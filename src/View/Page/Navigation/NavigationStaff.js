import React from "react";
import { View, StyleSheet } from "react-native";
import Link from "../../Buttons/Link";

import { controller } from "model/Main";

const NavigationStaff = ({ navigation }) => {
  const is_staff = controller.this_is_staff;
  const is_admin = controller.this_is_admin;

  return (
    <View>
      {(is_staff || is_admin) && (
        <View style={styles.nav}>
          <Link
            text={"Le planning des réservations"}
            style_container={styles.button_nav}
            style_text={styles.text_nav}
            func={() => navigation.navigate("Plannings")}
          />
        </View>
      )}
    </View>
  );
};

export default NavigationStaff;

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
