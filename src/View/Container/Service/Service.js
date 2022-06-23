import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Round from "../../Buttons/Round";

const Service = ({ data, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Service", { data })}
      >
        <View style={styles.info}>
          <Text style={styles.info_h1}>{data.name}</Text>
          <Text style={styles.info_h2}>
            {data.price}€ - {data.duration}min
          </Text>
        </View>
        <Image source={data.img} style={styles.img} />
      </TouchableOpacity>
      <Round
        text="RDV"
        style_ctn_enabled={styles.btn_rdv}
        style_txt_enabled={styles.txt_rdv}
        size={40}
        enabled={true}
      />
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
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomWidth: 0,
    backgroundColor: "#fff",
  },

  info_h1: {
    fontWeight: "500",
  },

  info_h2: {
    fontWeight: "200",
  },

  img: {
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },

  btn_rdv: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    right: 0,
    borderColor: "#383838",
  },

  txt_rdv: {
    fontWeight: "300",
  },
});
