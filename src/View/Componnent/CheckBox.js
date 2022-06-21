import React from "react";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

const CheckBox = ({ state, size }) => {
  const [is_active, setIs_active] = useState(state);

  return (
    <Pressable
      onPress={() => setIs_active((v) => !v)}
      style={[
        styles.container,
        is_active && styles.container_active,
        { width: size, height: size },
      ]}
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
