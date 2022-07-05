import React from "react";

import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Page from "../Container/Page";
import TextEdit from "../Input/TextEdit";
import Footer from "../Parts/Footer";
import Header from "../Parts/Header";

const Contact = ({ navigation }) => {
  return (
    <Page>
      <Header type={"close"} title={"Nous contacter"} navigation={navigation} />

      <View style={styles.parts}>
        <TextEdit
          pre_text={"Tél:"}
          value={"+216 09.00.00.00.00"}
          plh={"+216 09.00.00.00.00"}
          editable={false}
          isValidFormat={true}
        />
      </View>

      <View style={styles.parts}>
        <Text style={styles.h1}>Nos centres esthétiques</Text>
        <MapView
          style={styles.map}
          region={{
            latitude: 36.8065,
            longitude: 10.1815,
            latitudeDelta: 0.7,
            longitudeDelta: 0.7,
          }}
        />
      </View>

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

  h1: {
    fontWeight: "400",
    fontSize: 22,
    paddingBottom: 15,
    textDecorationLine: "underline",
  },

  map: {
    width: "100%",
    height: "70%",
    borderRadius: 5,
  },
});
