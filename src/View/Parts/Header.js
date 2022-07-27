// React imports
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// Componnent imports
import Button from "buttons/Button";

// Libraries imports
import Utils from "model/utils/Utils";

// Constants imports
import { PHOTO } from "constants/IMAGES";
import COLORS from "constants/COLORS";

const Header = (props) => {
  // Destructure props
  const { text, type, nav, onPress, addLogo } = props;
  const [headerType, setHeaderType] = useState();

  // On load componnent
  useEffect(() => {
    setHeaderType(Utils.headerType(type, nav));
  }, []);

  // Define text props
  const propsText = {
    style: styles.h1,
    numberOfLines: 1,
    adjustsFontSizeToFit: true,
  };

  // Define button props
  const propsButton = {
    image: headerType?.img,
    onPress: onPress ? onPress : headerType?.onPress,
    style: styles.button,
    noShadow: true,
    visible: nav,
  };

  return (
    <View style={styles.container}>
      <Button {...propsButton} />
      {addLogo && <Image source={PHOTO.logo} style={styles.img} />}
      <Text {...propsText}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
  },

  img: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },

  h1: {
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    color: COLORS.black,
    marginHorizontal: 35,
  },

  button: {
    position: "absolute",
    left: 20,
    padding: 2,
    width: 35,
    height: 35,
  },
});
