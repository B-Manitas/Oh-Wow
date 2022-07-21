import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import CDate from "model/utils/CDate";

import { controller as ctrl } from "model/Main";

const ItemServiceLarge = (...props) => {
  // Destructure props
  const [{ nav, service }] = props;

  // Define props
  const propsContainer = {
    onPress: () => ctrl.goTo.service(nav, service),
    style: styles.container,
  };
  const propsImage = { source: { uri: service.img }, style: styles.img };
  const propsServiceH1 = { numberOfLines: 2, style: styles.h1 };
  const propsServiceH2 = { numberOfLines: 2, style: styles.h2 };

  // Define the text of service infos
  const durationText = CDate.toTimeString(service.duration);
  const serviceTextInfo = `${service.price}DT - ${durationText}`;

  return (
    <TouchableOpacity {...propsContainer}>
      <Image {...propsImage} />

      <View style={styles.ctnText}>
        <Text {...propsServiceH1}>{service.name}</Text>
        <Text {...propsServiceH2}>{service.description}</Text>
        <Text style={styles.h3}>{serviceTextInfo}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemServiceLarge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",

    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#faa4af",

    alignItems: "center",
    backgroundColor: "#fff",

    marginHorizontal: 15,
    marginVertical: 3,
    paddingRight: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 5,
  },

  ctnText: {
    height: 90,
    flex: 1,
  },

  img: {
    marginRight: 15,
    width: 115,
    height: 115,
  },

  h1: {
    fontSize: 18,
    fontWeight: "500",
  },

  h2: {
    marginVertical: 5,
    fontSize: 13,
  },

  h3: {
    position: "absolute",
    bottom: -5,
    fontWeight: "600",
  },
});
