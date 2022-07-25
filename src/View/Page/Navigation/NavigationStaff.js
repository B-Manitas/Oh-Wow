// React imports
import React from "react";
import { View } from "react-native";

// Componnent imports
import Button from "button/Button";

// Libraries imports
import { controller as ctrl } from "model/Main";

// Constants imports
import { STYLES_NAV } from "constants/STYLES";
import { NAVIGATION } from "constants/PROPS";

const NavigationStaff = (props) => {
  // Destructure props
  const { nav } = props;

  // Define componnent state
  const isStaff = ctrl.this_is_staff || ctrl.this_is_admin();

  if (!isStaff) return null;
  return (
    <View style={STYLES_NAV.section}>
      <Button
        text={"Le planning des réservations"}
        onPress={() => ctrl.goTo.planning(nav)}
        {...NAVIGATION}
      />
    </View>
  );
};

export default NavigationStaff;
