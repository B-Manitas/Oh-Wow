import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Utils from "../../model/Utils";

import Menu from "../Buttons/Menu";

const Header = ({
  title,
  type,
  editable,
  navigation,
  func,
  setValue,
  is_valid,
}) => {
  return (
    <View style={styles.header}>
      <Menu type={type} navigation={navigation} func={func} />
      {editable ? (
        <TextInput
          style={styles.title}
          allowFontScaling={true}
          numberOfLines={1}
          value={title}
          returnKeyType={"done"}
          editable={!Utils.isNull(editable)}
          onChangeText={(t) => setValue(t)}
          placeholder={"Click to edit"}
          placeholderTextColor={!is_valid && "red"}
        />
      ) : (
        <Text
          style={styles.title}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
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
