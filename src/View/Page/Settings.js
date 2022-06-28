import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { controller } from "model/Main";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import InputSecondary from "../Input/InputSecondary";
import Chevron from "../Buttons/Chevron";

const Settings = ({ navigation }) => {
  const [data, setData] = useState(controller.user_data);
  const [valid_format, setValidFormat] = useState(
    controller.frontend.audit(data)
  );

  return (
    <Page>
      <Header
        navigation={navigation}
        type={"close"}
        title={"Paramètres"}
        func={() =>
          controller.onCloseSettings(data, setValidFormat, navigation)
        }
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
            value={data["firstname"]}
            setValue={(t) => setData((p) => ({ ...p, firstname: t }))}
            isValidFormat={valid_format["firstname"]}
          />
          <InputSecondary
            plh={"Nom"}
            typeAndroid={"name-family"}
            typeIOS={"familyName"}
            returnKeyType={"next"}
            maxLength={12}
            keyboardType={"default"}
            value={data["lastname"]}
            setValue={(t) => setData((p) => ({ ...p, lastname: t }))}
            isValidFormat={valid_format["lastname"]}
          />
          <InputSecondary
            plh={"Mail"}
            typeAndroid={"email"}
            typeIOS={"emailAddress"}
            returnKeyType={"next"}
            maxLength={50}
            keyboardType={"email-address"}
            value={data["mail"]}
            setValue={(t) => setData((p) => ({ ...p, mail: t }))}
            isValidFormat={valid_format["mail"]}
          />
          <InputSecondary
            plh={"0600000000"}
            typeAndroid={"tel"}
            typeIOS={"telephoneNumber"}
            returnKeyType={"done"}
            maxLength={10}
            keyboardType={"phone-pad"}
            value={data["phone"]}
            setValue={(t) => setData((p) => ({ ...p, phone: t }))}
            isValidFormat={valid_format["phone"]}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.h1}>Actions :</Text>
          <Chevron
            text={"Se déconnecter"}
            func={() => controller.logout(navigation)}
          />
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
