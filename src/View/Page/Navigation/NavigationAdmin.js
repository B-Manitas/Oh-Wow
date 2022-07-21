import React from "react";
import { View } from "react-native";
import Link from "button/Link";

import { controller } from "model/Main";

// Constants imports
import { STYLES_NAV } from "constants/STYLES";
import PAGES from "constants/PAGES";

const NavigationAdmin = (...props) => {
  const [{ nav }] = props;
  const isAdmin = controller.this_is_admin;

  if (!isAdmin) return null;
  return (
    <View style={styles.nav}>
      <Link
        text={"Gérer les salons"}
        style_container={STYLES_NAV.navButton}
        style_text={STYLES_NAV.navText}
        func={() => nav.navigate(PAGES.SALONS)}
      />
      <Link
        text={"Rechercher un utilisateur"}
        style_container={STYLES_NAV.navButton}
        style_text={STYLES_NAV.navText}
        func={() => nav.navigate(PAGES.SEARCH)}
      />
    </View>
  );
};

export default NavigationAdmin;
