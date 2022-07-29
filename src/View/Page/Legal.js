// React import
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

// Componnent import
import Page from "containers/Page";
import Header from "parts/Header";

// Constants import
import LEGAL from "constants/LEGAL";

const Legal = (props) => {
  const { navigation: nav } = props;

  return (
    <Page>
      <Header type="back" text="Légal" nav={nav} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{LEGAL}</Text>
      </ScrollView>
    </Page>
  );
};

export default Legal;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  text: {
    textAlign: "justify",
  },
});
