// React import
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

// Componnent import
import Button from "buttons/Button";
import TextVisible from "componnents/TextVisible";

// Libraries import
import { controller as ctrl } from "model/Main";

// Constants imports
import { ICON } from "constants/IMAGES";
import COLORS from "constants/COLORS";

const PhotosViewing = (props) => {
  // Destructure props
  const { image, setImage, setPhotos } = props;

  // Define componnent state
  const [zooming, setZooming] = useState(false);
  const height = Dimensions.get("screen").height;
  const pos = useRef(new Animated.Value(height));

  // On change selected image
  useEffect(() => {
    const toValue = !image ? height : 0;

    Animated.timing(pos.current, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [image]);

  // Hide componnent only if their is no image and the container is bottom of the screen
  if (!image && pos.current == height) return null;
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: pos.current }] }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollview}
        horizontal={true}
        directionalLockEnabled={false}
        scrollEnabled={zooming}
      >
        <Button
          activeOpacity={1}
          image={{ uri: image?.img }}
          onPress={() => setZooming((b) => !b)}
          style={[styles.image, zooming && styles.imgZooming]}
        />
      </ScrollView>

      <Button
        image={ICON.closeBlack}
        style={styles.closeBtn}
        onPress={() => setImage()}
        noShadow
        visible={!zooming}
      />

      <TextVisible visible={zooming} style={styles.infoText}>
        Toucher l'image pour zoomer/dézoomer.
      </TextVisible>

      <Button
        text={"SUPPRIMER"}
        style={styles.removeBtn}
        styleText={styles.removeText}
        visible={ctrl.thisIsAdmin() && !zooming}
        noShadow
        onPress={() =>
          ctrl.delete.photo(image._id, setPhotos, setZooming, setImage)
        }
      />
    </Animated.View>
  );
};

export default PhotosViewing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.default,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFill,
    zIndex: 3,
    elevation: 3,
  },

  scrollview: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },

  closeBtn: {
    backgroundColor: COLORS.default,
    position: "absolute",
    top: 70,
    right: 40,
    width: 30,
    height: 30,
  },

  removeBtn: {
    position: "absolute",
    bottom: 50,
    width: 100,
    height: 30,
    backgroundColor: COLORS.default,
  },

  removeText: {
    color: COLORS.error,
    fontSize: 14,
  },

  image: {
    width: Dimensions.get("window").width - 10,
    height: "45%",
    aspectRatio: 1,
    borderRadius: 3,
  },

  imgZooming: {
    width: "100%",
    height: "80%",
  },

  infoText: {
    color: COLORS.darkGray,
    fontSize: 15,
    bottom: 200,
  },
});
