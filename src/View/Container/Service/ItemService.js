// React imports
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

// Componnents imports
import TEXTS from "constants/TEXTS";
import Button from "button/Button";

// Libraries imports
import { controller as ctrl } from "model/Main";
import CDate from "model/utils/CDate";

const ItemService = (props) => {
  // Destructure props
  const { nav, service } = props;

  // Define props
  const propsCtn = { style: [styles.ctn, service.is_hidden && styles.hidden] };
  const propsButton = { onPress: () => ctrl.goTo.service(nav, service) };
  const propsImage = { source: { uri: service.img }, style: styles.img };
  const propsServiceText = {
    numberOfLines: 2,
    styles: styles.infoH1,
    allowFontScaling: true,
  };

  // Define the text of service infos
  const durationText = CDate.toTimeString(service.duration);
  const serviceTextInfo = `${service.price}DT - ${durationText}`;

  return (
    <View {...propsCtn}>
      <TouchableOpacity {...propsButton}>
        <Image {...propsImage} />

        <View style={styles.info}>
          <Text {...propsServiceText}>{service.name}</Text>
          <Text style={styles.infoH2}>{serviceTextInfo}</Text>
        </View>
      </TouchableOpacity>

      <Button
        text={TEXTS.booking}
        style={styles.aptButton}
        styleText={styles.aptText}
        onPress={() => ctrl.goTo.booking(nav, service)}
        noShadow
      />
    </View>
  );
};

export default ItemService;

const styles = StyleSheet.create({
  ctn: {
    marginHorizontal: 2,
    marginVertical: 10,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 5,
    borderWidth: 2,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: "#faa4af",
  },

  hidden: {
    opacity: 0.7,
    borderColor: "#f5f5f5",
  },

  info: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  infoH1: {
    fontWeight: "500",
  },

  infoH2: {
    fontWeight: "200",
  },

  img: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },

  aptButton: {
    backgroundColor: "#fff",
    borderColor: "#faa4af",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  aptText: {
    textAlign: "center",
    fontWeight: "800",
    color: "#faa4af",
  },
});
