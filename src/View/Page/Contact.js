// React imports
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Componnent imports
import Page from "containers/Page";
import CtnSalonContact from "containers/CtnSalonContact";
import FooterSocial from "parts/FooterSocial";
import Button from "buttons/Button";
import Markers from "generators/Markers";
import Loader from "./Loader";
import Empty from "componnents/Empty";

// Libraries imports
import { controller as ctrl } from "model/Main";
import MapView from "react-native-maps";

// Constants imports
import { ICON } from "constants/IMAGES";
import COLORS from "constants/COLORS";
import { STYLES_SHADOW } from "constants/STYLES";

const Contact = (props) => {
  // Destructure props
  const { navigation: nav } = props;

  // Define componnent state
  const [salons, setSalons] = useState();

  // On load componnent
  useEffect(() => {
    ctrl.get.allSalons(setSalons);
  }, []);

  // Define default map region
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
            image={ICON.backWhite}
            style={styles.backButton}
            onPress={() => ctrl.goTo.home(nav)}
          />
        </View>

        <FlatList
          data={salons}
          keyExtractor={(item) => item._id}
          renderItem={(item) => <CtnSalonContact salon={item.item} />}
          ListEmptyComponent={<Empty />}
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
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.main,
    marginBottom: 10,

    ...STYLES_SHADOW.high,
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
