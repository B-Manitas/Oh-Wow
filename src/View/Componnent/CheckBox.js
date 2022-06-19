import React from "react";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

const CheckBox = ({ state }) => {
    const [is_active, set_is_active] = useState(state);

    return (
    <Pressable
      onPress={() => set_is_active(!is_active)}
      style={[styles.container, is_active && styles.container_active]}
    ></Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#fafafa",
    width: 30,
    height: 30,
  },

  container_active: { backgroundColor: "#383838" },
});
