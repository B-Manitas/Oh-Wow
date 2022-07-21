// React imports
import React from "react";
import { View } from "react-native";

// Componnents imports
import Link from "button/Link";
import NavigationAdmin from "./NavigationAdmin";
import NavigationStaff from "./NavigationStaff";

// Librairies imports
import { controller as ctrl } from "model/Main";

// Constants imports
import { STYLES_NAV } from "constants/STYLES";

const NavigationConnect = (...props) => {
  const [{ nav }] = props;
  const isConnected = ctrl.this_is_connected;

  if (!isConnected) return null;
  return (
    <View>
      <View style={STYLES_NAV.section}>
        <Link
          text={"Accueil"}
          style_container={STYLES_NAV.navButton}
          style_text={STYLES_NAV.navText}
          func={() => ctrl.goTo.home()}
        />
        <Link
          text={"Nos prestations"}
          style_container={styles.navButton}
          style_text={styles.navText}
          func={() => ctrl.goTo.services()}
        />
        <Link
          text={"Mes rendez-vous"}
          style_container={styles.navButton}
          style_text={styles.navText}
          func={() => ctrl.goTo.appointments()}
        />
      </View>

      <NavigationStaff nav={nav} />
      <NavigationAdmin nav={nav} />

      <View style={STYLES_NAV.section}>
        <Link
          text={"Mes paramètres"}
          style_container={styles.navButton}
          style_text={styles.navText}
          func={() => ctrl.goTo.settings(nav)}
        />
        <Link
          text={"Nous contacter"}
          style_container={styles.navButton}
          style_text={styles.navText}
          func={() => ctrl.goTo.contact(nav)}
        />
      </View>
    </View>
  );
};

export default NavigationConnect;
