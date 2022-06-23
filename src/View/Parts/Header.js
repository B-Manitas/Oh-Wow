import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Utils from "../../model/Utils";

import Menu from "../Buttons/Menu";

const Header = ({ title, type, editable }) => {
  return (
    <View style={styles.header}>
      <Menu type={type} />
      {editable ? (
        <TextInput
          style={styles.title}
          allowFontScaling={true}
          numberOfLines={1}
          value={title}
          returnKeyType={"done"}
          editable={!Utils.isNull(editable)}
        />
      ) : (
        <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
  },

  title: {
    paddingLeft: 20,
    marginHorizontal: 30,
    fontWeight: "bold",
    fontSize: 32,
  },
});
