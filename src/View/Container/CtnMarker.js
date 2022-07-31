// React imports
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CtnMarker = (props) => {
  const { marker } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{marker.name}</Text>
    </View>
  );
};

export default CtnMarker;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 12,
    backgroundColor: "#8F64C9",
    borderRadius: 25,
    opacity: 0.9,
  },
  
  text: {
    color: "#fff",
    fontFamily: "title",
    fontSize: 30
  },
});
