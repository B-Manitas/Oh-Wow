// React imports
import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

// Contants imports
import { ICON } from "constants/IMAGES";

const Searchbar = (props) => {
  const { plh, setValue, value } = props;

  const propsInput = {
    value: value,
    onChangeText: setValue,
    placeholder: plh,
    returnKeyType: "search",
    style: styles.input,
    maxLength: 50,
  };

  const propsClear = {
    onPress: () => setValue(""),
    style: styles.clearButton,
  };

  return (
    <View style={styles.container}>
      <TextInput {...propsInput} />

      <TouchableOpacity {...propsClear}>
        <Image source={ICON.close} style={styles.clearImg} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 5,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#a5a5a5",
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: 40,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  clearButton: {
    position: "absolute",
    right: 0,
    padding: 13,
  },

  clearImg: {
    aspectRatio: 1,
    width: 12,
    height: 12,
  },
});
