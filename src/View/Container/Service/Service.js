import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import CDate from "../../../model/utils/CDate";
import Round from "../../Buttons/Round";

const Service = ({ data, navigation }) => {
  return (
    <View style={[styles.container, data.is_hidden && { opacity: 0.7 }]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Service", { data })}
      >
        <Image source={{ uri: data.img }} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.info_h1} numberOfLines={2}>
            {data.name}
          </Text>
          <Text style={styles.info_h2}>
            {data.price}€ - {CDate.toTimeString(data.duration)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn_apt}
        onPress={() => navigation.navigate("Booking", { data })}
      >
        <Text style={styles.txt_apt}>Prendre rendez-vous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
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
  },

  info: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderBottomWidth: 0,
    backgroundColor: "#fff",
    borderColor: "#f5f5f5",
  },

  info_h1: {
    fontWeight: "500",
  },

  info_h2: {
    fontWeight: "200",
  },

  img: {
    borderColor: "#f5f5f5",
    borderWidth: 2,
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },

  btn_apt: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#f5f5f5",
    paddingVertical: 8,
    borderTopWidth: 1,
  },

  txt_apt: {
    textAlign: "center",
    fontWeight: "500",
  },
});
