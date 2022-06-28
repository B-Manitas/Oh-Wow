import React from "react";
import { View, StyleSheet } from "react-native";

import { controller } from "model/Main";
import NavigationConnect from "./NavigationConnect";
import NavigationDisconnect from "./NavigationDisconnect";
import NavigationAnonymous from "./NavigationAnonymous";

const NavigationBody = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {controller.is_connected ? (
        <NavigationConnect navigation={navigation} />
      ) : (
        <NavigationDisconnect navigation={navigation} />
      )}
      <NavigationAnonymous navigation={navigation} />
    </View>
  );
};

export default NavigationBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 50,
    paddingVertical: 10,
  },
});
