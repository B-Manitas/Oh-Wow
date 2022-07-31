// React imports
import React from "react";
import { StyleSheet, View } from "react-native";

// Componnents imports
import Page from "containers/Page";
import Header from "parts/Header";
import NavigationConnect from "./NavigationConnect";
import NavigationDisconnect from "./NavigationDisconnect";

const Navigation = (props) => {
  const { navigation: nav } = props;

  return (
    <Page>
      <Header addLogo isTitle text="Oh Wow" nav={nav} type="back" />

      <View style={styles.container}>
        <NavigationDisconnect nav={nav} />
        <NavigationConnect nav={nav} />
      </View>
    </Page>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 50,
    paddingVertical: 10,
  },
});
