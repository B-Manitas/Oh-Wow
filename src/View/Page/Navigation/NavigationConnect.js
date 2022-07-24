// React imports
import React from "react";
import { View } from "react-native";

// Componnents imports
import Button from "button/Button";
import NavigationAdmin from "./NavigationAdmin";
import NavigationStaff from "./NavigationStaff";

// Librairies imports
import { controller as ctrl } from "model/Main";

// Constants imports
import { STYLES_NAV } from "constants/STYLES";
import { NAVIGATION } from "constants/PROPS";

const NavigationConnect = (props) => {
  const { nav } = props;
  const isConnected = ctrl.this_is_connected;

  if (!isConnected) return null;
  return (
    <View>
      <View style={STYLES_NAV.section}>
        <Button
          text={"Accueil"}
          onPress={() => ctrl.goTo.home(nav)}
          {...NAVIGATION}
        />
        <Button
          text={"Nos prestations"}
          onPress={() => ctrl.goTo.services(nav)}
          {...NAVIGATION}
        />
        <Button
          text={"Mes rendez-vous"}
          onPress={() => ctrl.goTo.appointments(nav)}
          {...NAVIGATION}
        />
      </View>

      <NavigationStaff nav={nav} />
      <NavigationAdmin nav={nav} />

      <View style={STYLES_NAV.section}>
        <Button
          text={"Mes paramètres"}
          onPress={() => ctrl.goTo.settings(nav)}
          {...NAVIGATION}
        />
        <Button
          text={"Nous contacter"}
          onPress={() => ctrl.goTo.contact(nav)}
          {...NAVIGATION}
        />
      </View>
    </View>
  );
};

export default NavigationConnect;
