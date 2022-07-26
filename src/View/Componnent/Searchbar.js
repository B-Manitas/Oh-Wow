// React imports
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

// Componnent imports
import Button from "buttons/Button";

// Contants imports
import { ICON } from "constants/IMAGES";
import { STYLES_SHADOW } from "constants/STYLES";
import COLORS from "constants/COLORS";

const Searchbar = (props) => {
  // Destructure componnent props
  const { plh, setValue, value } = props;

  // Define input props
  const propsInput = {
    value: value,
    onChangeText: setValue,
    placeholder: plh,
    returnKeyType: "search",
    style: styles.input,
    maxLength: 50,
  };

  return (
    <View style={[styles.container, props.style]}>
      <TextInput {...propsInput} />

      <Button
        style={styles.clearButton}
        noShadow
        image={ICON.closeGray}
        onPress={() => setValue("")}
      />
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
    borderColor: COLORS.darkGray,
    borderRadius: 3,
    paddingLeft: 15,
    paddingRight: 40,
    paddingVertical: 10,

    ...STYLES_SHADOW.medium,
  },

  clearButton: {
    position: "absolute",
    right: 10,
    padding: 5,
    width: 25,
    height: 25,
  },

  clearImg: {
    aspectRatio: 1,
    width: 12,
    height: 12,
  },
});
