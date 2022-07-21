// React imports
import React from "react";
import { View } from "react-native";

// Buttons imports
import Link from "button/Link";

// Libraries imports
import { controller as ctrl } from "model/Main";

// Constants imports
import { STYLES_NAV } from "constants/STYLES";

const NavigationDisconnect = (...props) => {
  const [{ nav }] = props;
  const isConnected = ctrl.this_is_connected;

  if (isConnected) return null;
  return (
    <View>
      <View style={STYLES_NAV.section}>
        <Link
          text={"Accueil"}
          style_container={STYLES_NAV.navButton}
          style_text={STYLES_NAV.navText}
          func={() => ctrl.goTo.home(nav)}
        />
        <Link
          text={"Se connecter / Créer un compte"}
          style_container={STYLES_NAV.navButton}
          style_text={STYLES_NAV.navText}
          func={() => ctrl.goTo.connection(nav)}
        />
      </View>

      <View style={STYLES_NAV.section}>
        <Link
          text={"Nos prestations"}
          style_container={STYLES_NAV.navButton}
          style_text={STYLES_NAV.navText}
          func={() => ctrl.goTo.services(nav)}
        />
      </View>

      <View style={STYLES_NAV.section}>
        <Link
          text={"Nous contacter"}
          style_container={STYLES_NAV.navButton}
          style_text={STYLES_NAV.navText}
          func={() => ctrl.goTo.contact(nav)}
        />
      </View>
    </View>
  );
};

export default NavigationDisconnect;
