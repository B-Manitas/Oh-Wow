// React import
import React from "react";
import { StyleSheet } from "react-native";

// Componnent import
import Button from "buttons/Button";

const CtnPhoto = (props) => {
  // Destructure props
  const { data, onPress } = props;

  return (
    <Button
      image={{ uri: data.img }}
      style={styles.container}
      onPress={() => onPress(data)}
    />
  );
};

export default CtnPhoto;

const styles = StyleSheet.create({
  container: {
    width: "45%",
    aspectRatio: 1,
    margin: 5,
  },
});
