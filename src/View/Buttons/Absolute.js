import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Utils from "../../model/Utils";

const Absolute = ({
  text,
  img,
  bottom,
  top,
  right,
  left,
  ctn_style,
  txt_style,
  func,
}) => {
  return (
    <TouchableOpacity
      onPress={func}
      style={[
        { position: "absolute", bottom, top, right, left },
        styles.container,
        ctn_style,
      ]}
    >
      {!Utils.isNull(img) && (
        <Image
          source={img}
          style={[styles.img, !Utils.isNull(text) && { marginRight: 15 }]}
        />
      )}

      <Text style={txt_style}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Absolute;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  img: {
    width: 25,
    height: 25,
  },
});
