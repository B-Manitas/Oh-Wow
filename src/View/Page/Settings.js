import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { controller } from "model/Main";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import InputSecondary from "../Input/InputSecondary";
import Chevron from "../Buttons/Chevron";

const Settings = ({ navigation }) => {
  const [data, setData] = useState(controller.get.this_user_data);
  const [audit, setAudit] = useState(controller.fakeAudit(data));

  return (
    <Page>
      <Header
        navigation={navigation}
        type={"close"}
        title={"Paramètres"}
        func={() => controller.onClose.settings(data, setAudit, navigation)}
      />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Vos informations personnelles :</Text>
          <InputSecondary
            plh={"Prénom"}
            typeAndroid={"name-given"}
            typeIOS={"givenName"}
            returnKeyType={"next"}
            maxLength={12}
            keyboardType={"default"}
            value={data.firstname}
            setValue={(t) => setData((p) => ({ ...p, firstname: t }))}
            isValidFormat={audit.firstname}
          />
          <InputSecondary
            plh={"Nom"}
            typeAndroid={"name-family"}
            typeIOS={"familyName"}
            returnKeyType={"next"}
            maxLength={12}
            keyboardType={"default"}
            value={data.lastname}
            setValue={(t) => setData((p) => ({ ...p, lastname: t }))}
            isValidFormat={audit.lastname}
          />
          <InputSecondary
            plh={"Mail"}
            typeAndroid={"email"}
            typeIOS={"emailAddress"}
            returnKeyType={"next"}
            maxLength={50}
            keyboardType={"email-address"}
            value={data.mail}
            setValue={(t) => setData((p) => ({ ...p, mail: t }))}
            isValidFormat={audit.mail}
          />
          <InputSecondary
            plh={"0600000000"}
            typeAndroid={"tel"}
            typeIOS={"telephoneNumber"}
            returnKeyType={"done"}
            maxLength={10}
            keyboardType={"phone-pad"}
            value={data.phone}
            setValue={(t) => setData((p) => ({ ...p, phone: t }))}
            isValidFormat={audit.phone}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.h1}>Actions :</Text>
          <Chevron
            text={"Se déconnecter"}
            func={() => controller.update.logout(navigation)}
          />
          <Chevron
            text={"Supprimer votre compte"}
            func={() => controller.delete.user(navigation)}
          />
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
