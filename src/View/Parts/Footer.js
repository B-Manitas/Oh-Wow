import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Footer = ({ navigation, current }) => {
  const props_text = { numberOfLines: 1, adjustsFontSizeToFit: true };
  const nav = (page) => navigation.navigate(page);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav("Home")}
        disabled={current == "Home"}
      >
        <Text
          {...props_text}
          style={[styles.text, current == "Home" && styles.current_text]}
        >
          Accueil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button_center]}
        onPress={() => nav("AllServices")}
        disabled={current == "AllServices"}
      >
        <Text
          {...props_text}
          style={[styles.text, current == "AllServices" && styles.current_text]}
        >
          Catalogues
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => nav("Appointments")}
        disabled={current == "Appointments"}
      >
        <Text
          {...props_text}
          style={[
            styles.text,
            current == "Appointments" && styles.current_text,
          ]}
        >
          Rendez-vous
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 45,
    left: 15,
    right: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderWidth: 2,
    borderColor: "#f5f5f5",
  },

  button: {
    marginHorizontal: 5,
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#383838",
  },

  button_center: {
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#f5f5f5",
  },

  current_text: {
    fontWeight: "500",
    textDecorationLine: "underline"
  },
});
