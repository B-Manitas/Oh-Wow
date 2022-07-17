import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import CDate from "../../../model/utils/CDate";
import Round from "../../Buttons/Round";

import { controller as ctrl } from "model/Main";

const Service = ({ data, navigation }) => {
  const onPressBook = () => {
    if (ctrl.this_is_connected) navigation.navigate("Booking", { data });
    else navigation.navigate("Connection");
  };

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
            {data.price}DT - {CDate.toTimeString(data.duration)}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn_apt} onPress={onPressBook}>
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
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
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
    borderColor: "#faa4af",
    // borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  info_h1: {
    fontWeight: "500",
  },

  info_h2: {
    fontWeight: "200",
  },

  img: {
    // borderRadius: 15,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
    borderColor: "#faa4af",
    borderWidth: 2,
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },

  btn_apt: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#faa4af",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  txt_apt: {
    textAlign: "center",
    fontWeight: "800",
    color: "#faa4af"
  },
});
