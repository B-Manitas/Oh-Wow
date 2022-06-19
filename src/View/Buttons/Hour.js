import React from "react";
import { StyleSheet } from "react-native";

import Utils from "../../model/Utils";
import Round from "./Round";

const Hour = ({ hour, is_available }) => {

  const colors = is_available ? "#383838" : "#CECECE";
  return (
    <Round size={40} text={hour + "h"} colors={colors} enabled={is_available} />
  );
};

export default Hour;
