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
  const { nav } = props;
  const isStaff = ctrl.this_is_staff;

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
