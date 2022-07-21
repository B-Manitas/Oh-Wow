// React imports
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Componnent imports
import Page from "container/Page";
import FooterSocial from "../Parts/FooterSocial";
import Button from "button/Button";
import ContactSalon from "container/ContactSalon";
import Loader from "./Loader";
import Markers from "../Generator/Markers";

// Libraries imports
import { controller as ctrl } from "model/Main";
import MapView from "react-native-maps";

// Constants imports
import { ICON } from "constants/IMAGES";
import COLORS from "constants/COLORS";

const Contact = (...props) => {
  // Destructure props
  const [{ navigation: nav }] = props;

  // Define componnent state
  const [salons, setSalons] = useState(undefined);

  // On load componnent
  useEffect(() => {
    ctrl.get.allSalons(setSalons);
  }, []);

  // Defin default map region
  const region = {
    latitude: 36.8065,
    longitude: 10.1815,
    latitudeDelta: 0.7,
    longitudeDelta: 0.7,
  };

  if (!salons) return <Loader />;
  else
    return (
      <Page>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={region}>
            <Markers salons={salons} />
          </MapView>

          <Button
            image={ICON.back_wh}
            style={styles.backButton}
            onPress={() => ctrl.goTo.home(nav)}
          />
        </View>

        <FlatList
          data={salons}
          keyExtractor={(item) => item._id}
          renderItem={(item) => <ContactSalon salon={item.item} />}
        />

        <FooterSocial />
      </Page>
    );
};

export default Contact;

const styles = StyleSheet.create({
  mapContainer: {
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
    borderColor: COLORS.main,
    marginBottom: 10,
  },

  map: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },

  backButton: {
    position: "absolute",
    backgroundColor: COLORS.main,
    top: 0,
    margin: 10,
    padding: 5,
    width: 40,
    height: 40,
  },
});
