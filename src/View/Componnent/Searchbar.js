import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ICON } from "constants/IMAGES";

const Searchbar = ({ plh }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container_search}>
      <TextInput
        style={styles.search}
        value={text}
        returnKeyType="search"
        placeholder="Rechercher un service"
        onChangeText={(v) => setText(v)}
      />
      <TouchableOpacity style={styles.btn_clear} onPress={() => setText("")}>
        <Image source={ICON.close} style={styles.img_clear} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container_search: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginVertical: 5,
  },

  search: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: 40,
    paddingVertical: 10,
    borderColor: "#c4c4c4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  btn_clear: {
    position: "absolute",
    right: 0,
    padding: 13,
  },

  img_clear: {
    aspectRatio: 1,
    width: 12,
    height: 12,
  },
});
