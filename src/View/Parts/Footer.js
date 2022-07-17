import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Absolute from "../Buttons/Absolute";
import Round from "../Buttons/Round";

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
          Oh WoW
        </Text>
      </TouchableOpacity>

      {/* <Round text={"Consulter toutes les prestations"} style={{top: -75}} /> */}

      <TouchableOpacity
        style={[styles.button, styles.button_center]}
        onPress={() => nav("AllServices")}
        disabled={current == "AllServices"}
      >
        <Text
          {...props_text}
          style={[styles.text, current == "AllServices" && styles.current_text]}
        >
          Prendre rendez-vous
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
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
          Mes rendez-vous
        </Text>
      </TouchableOpacity> */}
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
    backgroundColor: "#faa4af",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },

  button: {
    marginHorizontal: 5,
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },

  button_center: {
    borderLeftWidth: 2,
    borderColor: "#f5f5f5",
  },

  current_text: {
    // fontWeight: "700",
    color: "#fff",
    textDecorationLine: "underline",
  },
});
