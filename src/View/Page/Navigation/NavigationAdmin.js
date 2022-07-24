// React imports
import React from "react";
import { View } from "react-native";

// Componnents imports
import Button from "button/Button";

// Model import
import { controller as ctrl } from "model/Main";

// Constants imports
import { NAVIGATION } from "constants/PROPS";
import { STYLES_NAV } from "constants/STYLES";

const NavigationAdmin = (props) => {
  const { nav } = props;
  const isAdmin = ctrl.this_is_admin;

  if (!isAdmin) return null;
  return (
    <View style={STYLES_NAV.section}>
      <Button
        text="Rechercher un utilisateur"
        onPress={() => ctrl.goTo.search(nav)}
        {...NAVIGATION}
      />
      <Button
        text="Gérer mon application"
        onPress={() => ctrl.goTo.salons(nav)}
        {...NAVIGATION}
      />
    </View>
  );
};

export default NavigationAdmin;
