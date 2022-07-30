// React imports
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

// Componnents imports
import TEXTS from "constants/TEXTS";
import Button from "buttons/Button";

// Libraries imports
import { controller as ctrl } from "model/Main";
import CDate from "model/utils/CDate";

// Constants imports
import COLORS from "constants/COLORS";
import { STYLES_SHADOW } from "constants/STYLES";

const CtnService = (props) => {
  // Destructure props
  const { nav, service } = props;

  // Define props
  const propsCtn = { style: [styles.ctn, service.is_hidden && styles.hidden] };
  const propsButton = { onPress: () => ctrl.goTo.service(nav, service) };
  const propsImage = { source: { uri: service.img }, style: styles.img };
  const propsServiceText = {
    numberOfLines: 2,
    style: styles.infoH1,
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

export default CtnService;

const styles = StyleSheet.create({
  ctn: {
    marginHorizontal: 2,
    marginVertical: 10,
    flex: 1,
    borderWidth: 2,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: COLORS.main,
    ...STYLES_SHADOW.high,
  },

  hidden: {
    opacity: 0.7,
    borderColor: COLORS.default,
  },

  info: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  infoH1: {
    fontWeight: "500",
    textAlign: "center",
    top: -2
  },

  infoH2: {
    fontWeight: "200",
    bottom: -3
  },

  img: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },

  aptButton: {
    backgroundColor: "#fff",
    borderColor: COLORS.main,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  aptText: {
    textAlign: "center",
    fontWeight: "800",
    color: COLORS.main,
  },
});
