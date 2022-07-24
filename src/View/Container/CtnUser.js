// React import
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

// Libraries imports
import { controller as ctrl } from "model/Main";
import Utils from "model/Utils";

// Constants imports
import { STYLES_SHADOW } from "constants/STYLES";
import COLORS from "constants/COLORS";

const CtnUser = (props) => {
  // Destructure props
  const { nav, user } = props;

  // Define componnent state
  const isAdmin = user.is_admin;
  const isStaff = user.id_salon != null && !isAdmin;

  // Define button props
  const propsButton = {
    style: styles.ctn,
    onPress: () => ctrl.goTo.searchToUser(nav, user),
  };

  // Define h2 text props
  const propsH2 = {
    style: [styles.h2, isAdmin && styles.h2Admin, isStaff && styles.h2Staff],
  };

  return (
    <TouchableOpacity {...propsButton}>
      <Text style={styles.h1}>
        {user.firstname} {user.lastname}
      </Text>
      <Text {...propsH2}>{Utils.strStatus(isAdmin, isStaff)}</Text>
    </TouchableOpacity>
  );
};

export default CtnUser;

const styles = StyleSheet.create({
  ctn: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",

    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 5,

    borderWidth: 1,
    borderRadius: 3,

    backgroundColor: "#fff",
    borderColor: COLORS.darkGray,

    ...STYLES_SHADOW.medium,
  },

  h1: { fontSize: 20, color: COLORS.black },

  h2: {
    fontSize: 16,
    marginLeft: 10,
    position: "absolute",
    right: 10,
  },

  h2Admin: { fontWeight: "700" },

  h2Staff: { fontWeight: "300" },
});
