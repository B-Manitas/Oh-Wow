import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Page from "../Container/Page";
import Footer from "../Parts/Footer";

import { controller } from "model/Main";
import Absolute from "../Buttons/Absolute";
import ContactSalon from "../Container/ContactSalon";
import { ICON } from "../../constants/IMAGES";

const Contact = ({ navigation }) => {
  const [salons, setSalons] = useState(undefined);

  useEffect(() => {
    controller.get.allSalons(setSalons);
  }, []);

  if (!salons) return <Text>Fecthing data...</Text>;
  else
    return (
      <Page>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: 36.8065,
              longitude: 10.1815,
              latitudeDelta: 0.7,
              longitudeDelta: 0.7,
            }}
          >
            {salons.map((item, i) => (
              <Marker
                key={i}
                coordinate={{
                  longitude: item.longitude,
                  latitude: item.latitude,
                }}
              >
                <View style={styles.marker}>
                  <Text style={styles.txt_marker}>{item.name}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
          <Absolute
            img={ICON.close}
            left={10}
            top={10}
            ctn_style={styles.btn_back}
            txt_style={styles.txt_style}
            func={() => navigation.navigate("Home")}
          />
        </View>

        <FlatList
          style={styles.container_salons}
          data={salons}
          keyExtractor={(item) => item._id}
          renderItem={(item) => <ContactSalon salon={item.item} />}
        />

        <Footer />
      </Page>
    );
};

export default Contact;

const styles = StyleSheet.create({
  parts: {
    marginVertical: 10,
    marginHorizontal: 30,
  },

  btn_back: {
    borderWidth: 0,
    backgroundColor: "#f5f5f5",
  },

  txt_style: {
    color: "#383838",
    fontSize: 16,
    fontWeight: "500",
  },

  h1: {
    fontWeight: "400",
    fontSize: 22,
    paddingBottom: 15,
    textDecorationLine: "underline",
  },

  container: {
    justifyContent: "center",
    height: "60%",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#f5f5f5",
  },

  map: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },

  marker: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "#8F64C9",
    borderRadius: 25,
    opacity: 0.9,
  },

  txt_marker: {
    color: "#fff",
  },

  container_salons: {
    marginTop: 10,
  },
});
