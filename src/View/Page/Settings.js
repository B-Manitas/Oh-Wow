// React imports
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

// Libraries imports
import { controller as ctrl } from "model/Main";
import _ from "lodash";

// Componnent imports
import Page from "containers/Page";
import Header from "parts/Header";
import InputSecondary from "inputs/InputSecondary";
import ButtonThird from "buttons/ButtonThird";

// Constants imports
import { INPUT_FIRSTNAME } from "constants/PROPS";
import { INPUT_LASTNAME, INPUT_PHONE } from "constants/PROPS";
import { TITLE } from "constants/TEXTS";
import { STYLE_GENERAL } from "constants/STYLES";

const Settings = ({ navigation }) => {
  // Define componnent state
  const [data, setData] = useState(ctrl.get.thisUserData);
  const [audit, setAudit] = useState();

  return (
    <Page>
      <Header nav={navigation} type={"close"} text={"Paramètres"} />

      <ScrollView>
        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.globalInfo}</Text>
          <InputSecondary
            value={data.firstname}
            setValue={(t) => setData((p) => ({ ...p, firstname: t }))}
            valid={audit?.valid?.firstname}
            {...INPUT_FIRSTNAME}
          />
          <InputSecondary
            value={data.lastname}
            setValue={(t) => setData((p) => ({ ...p, lastname: t }))}
            valid={audit?.valid?.lastname}
            {...INPUT_LASTNAME}
          />
          <InputSecondary
            value={data.phone}
            setValue={(t) => setData((p) => ({ ...p, phone: t }))}
            valid={audit?.valid?.phone}
            {...INPUT_PHONE}
          />

          <ButtonThird
            text={"Sauvegarder"}
            disabled={_.isEqual(data, ctrl.get.thisUserData)}
            onPress={() => ctrl.onClose.settings(data, navigation, setAudit)}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
          <ButtonThird
            text={"Se déconnecter"}
            onPress={() => ctrl.update.logout(navigation)}
          />
          <ButtonThird
            text={"Supprimer votre compte"}
            important
            onPress={() => ctrl.delete.user(navigation)}
          />
        </View>
      </ScrollView>
    </Page>
  );
};

export default Settings;
