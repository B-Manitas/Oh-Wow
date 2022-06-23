import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import InputSecondary from "../Input/InputSecondary";
import Chevron from "../Buttons/Chevron";

const Settings = ({ navigation }) => {
  return (
    <Page>
      <Header navigation={navigation} type={"close"} title={"Paramètres"} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Vos informations personnelles :</Text>
          <InputSecondary
            plh={"Nom"}
            typeAndroid={"name-family"}
            typeIOS={"familyName"}
            returnKeyType={"next"}
            maxLength={12}
            keyboardType={"default"}
          />
          <InputSecondary
            plh={"Prénom"}
            typeAndroid={"name-given"}
            typeIOS={"givenName"}
            returnKeyType={"next"}
            maxLength={12}
            keyboardType={"default"}
          />
          <InputSecondary
            plh={"Mail"}
            typeAndroid={"email"}
            typeIOS={"emailAddress"}
            returnKeyType={"next"}
            maxLength={50}
            keyboardType={"email-address"}
          />
          <InputSecondary
            plh={"+216 070011001100"}
            typeAndroid={"tel"}
            typeIOS={"telephoneNumber"}
            returnKeyType={"done"}
            maxLength={14}
            keyboardType={"phone-pad"}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.h1}>Actions :</Text>
          <Chevron text={"Supprimer votre compte"} />
        </View>
      </ScrollView>
    </Page>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
    paddingVertical: 20,
  },

  h1: {
    marginHorizontal: -10,
    fontWeight: "400",
    fontSize: 22,
    paddingBottom: 15,
    textDecorationLine: "underline",
  },
});
