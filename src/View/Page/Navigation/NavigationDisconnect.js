// React imports
import React from "react";
import { View } from "react-native";

// Buttons imports
import Button from "buttons/Button";

// Libraries imports
import { controller as ctrl } from "model/Main";

// Constants imports
import { STYLES_NAV } from "constants/STYLES";
import { NAVIGATION } from "constants/PROPS";

const NavigationDisconnect = (props) => {
  const { nav } = props;
  const isConnected = ctrl.thisIsConnected();

  if (isConnected) return null;
  return (
    <View>
      <View style={STYLES_NAV.section}>
        <Button
          text={"Accueil"}
          onPress={() => ctrl.goTo.home(nav)}
          {...NAVIGATION}
        />
        <Button
          text={"Se connecter / Créer un compte"}
          onPress={() => ctrl.goTo.connection(nav)}
          {...NAVIGATION}
        />
      </View>

      <View style={STYLES_NAV.section}>
        <Button
          text={"Nos prestations"}
          onPress={() => ctrl.goTo.services(nav)}
          {...NAVIGATION}
        />
        <Button
          text={"Nos photos"}
          onPress={() => ctrl.goTo.photo(nav)}
          {...NAVIGATION}
        />
      </View>

      <View style={STYLES_NAV.section}>
        <Button
          text={"Nous contacter"}
          onPress={() => ctrl.goTo.contact(nav)}
          {...NAVIGATION}
        />
        <Button
          text={"Légal"}
          onPress={() => ctrl.goTo.legal(nav)}
          {...NAVIGATION}
        />
      </View>
    </View>
  );
};

export default NavigationDisconnect;
