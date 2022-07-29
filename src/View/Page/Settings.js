// React imports
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

// Libraries imports
import { controller as ctrl } from "model/Main";
import _ from "lodash";

// Componnent imports
import Page from "containers/Page";
import Header from "parts/Header";
import InputError from "inputs/InputError";
import BtnThird from "buttons/BtnThird";

// Constants imports
import { INPUT_FIRSTNAME } from "constants/PROPS";
import { INPUT_LASTNAME, INPUT_PHONE } from "constants/PROPS";
import { TITLE } from "constants/TEXTS";
import { STYLE_GENERAL } from "constants/STYLES";

const Settings = (props) => {
  const { navigation: nav } = props;

  // Define componnent state
  const [data, setData] = useState(ctrl.get.thisUserData);
  const [audit, setAudit] = useState();
  const [sending, setSending] = useState(false);

  // After save data.
  useEffect(() => {
    setSending(false);
  }, [audit]);

  return (
    <Page>
      <Header nav={nav} type={"close"} text={"Paramètres"} />

      <ScrollView>
        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.globalInfo}</Text>
          <InputError
            value={data.firstname}
            setValue={(t) => setData((p) => ({ ...p, firstname: t }))}
            valid={audit?.valid?.firstname}
            editable={!ctrl.thisIsStaff()}
            {...INPUT_FIRSTNAME}
          />
          <InputError
            value={data.lastname}
            setValue={(t) => setData((p) => ({ ...p, lastname: t }))}
            valid={audit?.valid?.lastname}
            editable={!ctrl.thisIsStaff()}
            {...INPUT_LASTNAME}
          />
          <InputError
            value={data.phone}
            setValue={(t) => setData((p) => ({ ...p, phone: t }))}
            valid={audit?.valid?.phone}
            editable={!ctrl.thisIsStaff()}
            {...INPUT_PHONE}
          />

          <BtnThird
            text={"Sauvegarder"}
            disabled={_.isEqual(data, ctrl.get.thisUserData) || sending}
            onPress={() => ctrl.update.settings(data, setAudit, setSending)}
            visible={!ctrl.thisIsStaff()}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
          <BtnThird
            text={"Se déconnecter"}
            onPress={() => ctrl.update.logout(nav)}
          />
          <BtnThird
            text={"Supprimer votre compte"}
            important
            onPress={() => ctrl.delete.thisUser(nav)}
            visible={!ctrl.thisIsStaff()}
          />
        </View>
      </ScrollView>
    </Page>
  );
};

export default Settings;
