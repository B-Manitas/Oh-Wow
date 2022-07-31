// React imports
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

// Componnents imports
import Button from "buttons/Button";

// Model import
import { controller as ctrl } from "model/Main";

// Constants imports
import TEXTS from "constants/TEXTS";
import COLORS from "constants/COLORS";
import { STYLES_SHADOW } from "constants/STYLES";

const HomeHeader = (props) => {
  const { app, setApp, refreshing } = props;
  const isFocused = useIsFocused();

  const [isAdmin, setAdmin] = useState(ctrl.thisIsAdmin());

  // On focus homepage
  useEffect(() => {
    setAdmin(ctrl.thisIsAdmin());
  }, [isFocused]);

  // Define props of the button image
  const propsButtonImage = {
    visible: isAdmin,
    text: TEXTS.newImage,
    style: styles.buttonImage,
    onPress: () => ctrl.onPress.image(setApp),
  };

  return (
    <View style={styles.container}>
      <View style={styles.refresh}>
        <Text style={styles.refreshText}>
          {refreshing ? TEXTS.loading : TEXTS.pullToRefresh}
        </Text>
      </View>

      <Image source={{ uri: app?.img }} style={styles.image} />

      <Button {...propsButtonImage} />
      <Text style={styles.h1}>{TEXTS.titleH1}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    ...STYLES_SHADOW.high,
    marginBottom: 50,
  },

  refresh: {
    top: -60,
    right: 0,
    left: 0,
    padding: 0,
    position: "absolute",
  },

  refreshText: {
    fontSize: 25,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    marginBottom: 18,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  buttonImage: {
    position: "absolute",
    top: 62,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  h1: {
    fontSize: 75,
    textAlign: "center",
    color: COLORS.main,
    fontFamily: "title",
  },
});
