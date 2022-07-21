// React imports
import React from "react";
import { View } from "react-native";

// Componnent imports
import Link from "button/Link";

// Libraries imports
import { controller as ctrl } from "model/Main";

// Constants imports
import STYLES_NAV from "constants/STYLES";

const NavigationStaff = (...props) => {
  const [{ nav }] = props;
  const isStaff = controller.this_is_staff;

  if (!isStaff) return null;
  return (
    <View style={STYLES_NAV.section}>
      <Link
        text={"Le planning des réservations"}
        style_container={STYLES_NAV.navButton}
        style_text={STYLES_NAV.textButton}
        func={() => ctrl.goTo.planning(nav)}
      />
    </View>
  );
};

export default NavigationStaff;
