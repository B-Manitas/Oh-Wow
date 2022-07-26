// React imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Componnents imports
import Button from "buttons/Button";
import BtnPrimary from "buttons/BtnPrimary";

// Libraries imports
import _ from "lodash";

// Constants imports
import { ICON } from "constants/IMAGES";
import { STYLES_SHADOW } from "constants/STYLES";

const HeaderSave = (props) => {
  const { saving, onSave, onClose, canSave, isBack } = props;

  return (
    <View style={styles.header}>
      <Button
        visible={!saving}
        image={isBack ? ICON.back : ICON.close}
        style={styles.close}
        onPress={onClose}
        noShadow
      />
      {saving && <Text style={styles.savingText}>Sauvegarde en cours....</Text>}

      <BtnPrimary
        text={"Sauvegarder"}
        style={styles.save}
        styleText={styles.saveText}
        disabled={!canSave || saving}
        onPress={onSave}
      />
    </View>
  );
};

export default HeaderSave;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
    height: 110,
    elevation: 5,
    zIndex: 5,
    top: 0,
    right: 0,
    left: 0,

    ...STYLES_SHADOW.medium,

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  close: {
    height: 35,
    width: 35,
    position: "absolute",
    padding: 5,
    top: 60,
    left: 30,
  },

  savingText: {
    position: "absolute",
    top: 70,
    left: 30,
  },

  save: {
    paddingVertical: 7,
    width: 120,
    paddingHorizontal: 10,
    position: "absolute",
    top: 60,
    right: 20,
  },
});
