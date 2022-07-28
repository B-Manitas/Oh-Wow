// React imports
import React from "react";
import { View } from "react-native";

// Componnents imports
import Button from "buttons/Button";

// Model import
import { controller as ctrl } from "model/Main";

// Constants imports
import { NAVIGATION } from "constants/PROPS";
import { STYLES_NAV } from "constants/STYLES";

const NavigationAdmin = (props) => {
  // Destructure props
  const { nav } = props;

  // Define componnent state
  const isAdmin = ctrl.thisIsAdmin();

  if (!isAdmin) return null;
  return (
    <View style={STYLES_NAV.section}>
      <Button
        text="Rechercher un utilisateur"
        onPress={() => ctrl.goTo.search(nav)}
        {...NAVIGATION}
      />
      <Button
        text="Gérer mon salon"
        onPress={() => ctrl.goTo.salons(nav)}
        {...NAVIGATION}
      />
    </View>
  );
};

export default NavigationAdmin;
