// React import
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

// Componnent import
import Page from "containers/Page";
import Header from "parts/Header";
import Button from "buttons/Button";
import CtnPhoto from "containers/CtnPhoto";
import Empty from "componnents/Empty";

// Librairies import
import { controller as ctrl } from "model/Main";

// Constants imports
import COLORS from "constants/COLORS";
import PhotosViewing from "./PhotosViewing";

const Photos = (props) => {
  // Destructure componnent props
  const { navigation: nav } = props;

  // Define componnent state
  const [photos, setPhotos] = useState();
  const [selected, setSelected] = useState();
  const [newPhotos, setNewPhotos] = useState();

  // On load componnent
  useEffect(() => {
    ctrl.get.allPhotos(setPhotos);
  }, []);

  useEffect(() => {
    ctrl.add.photo(newPhotos, setNewPhotos, setPhotos);
  }, [newPhotos]);

  return (
    <Page>
      <Header type="close" text="Nos photos" nav={nav} />

      <FlatList
        data={photos}
        renderItem={(i) => <CtnPhoto data={i.item} onPress={setSelected} />}
        keyExtractor={(img) => img._id}
        numColumns={2}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={styles.flatlist}
      />

      <PhotosViewing
        image={selected}
        setImage={setSelected}
        setPhotos={setPhotos}
      />

      <Button
        text="+"
        style={styles.addButton}
        styleText={styles.addText}
        disabled={newPhotos}
        visible={ctrl.thisIsAdmin() && !selected}
        onPress={() => ctrl.onPress.image(setNewPhotos)}
      />
    </Page>
  );
};

export default Photos;

const styles = StyleSheet.create({
  flatlist: {
    marginHorizontal: 10,
    width: "100%",
    marginTop: 15,
    justifyContent: "center",
  },

  addButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: 40,
    borderWidth: 2,
    borderColor: COLORS.main,
    paddingVertical: 5,
    width: "15%",
    zIndex: 2,
    elevation: 2,
  },

  addText: {
    fontWeight: "700",
    fontSize: 22,
    color: COLORS.main,
    top: -1,
  },
});
