// React imports
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Componnent imports
import BtnThird from "buttons/BtnThird";
import ToggleLong from "componnents/ToggleLong";
import InputLong from "inputs/InputLong";

// Librairies imports
import { controller as ctrl } from "model/Main";
import _ from "lodash";

// Constants imports
import { TITLE } from "constants/TEXTS";
import { STYLE_GENERAL } from "constants/STYLES";
import {
  KEYBOARD_AVOIDING_VIEW,
  INPUT_FIRSTNAME,
  INPUT_LASTNAME,
  INPUT_PHONE,
} from "constants/PROPS";

const ClientInfo = (props) => {
  // Destructure props
  const { client, setClient, audit, salon, visible } = props;

  // Define componnent function
  const update = (key, v) => setClient((p) => ({ ...p, [key]: v }));

  if (!visible) return null;
  return (
    <KeyboardAvoidingView {...KEYBOARD_AVOIDING_VIEW} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.globalInfo}</Text>
          <InputLong
            {...INPUT_FIRSTNAME}
            value={client.firstname}
            setValue={(t) => update("firstname", t)}
            valid={audit?.valid?.firstname}
          />
          <InputLong
            {...INPUT_LASTNAME}
            value={client.lastname}
            setValue={(t) => update("lastname", t)}
            valid={audit?.valid?.lastname}
          />
          <InputLong
            {...INPUT_PHONE}
            value={client.phone}
            setValue={(t) =>
              update("phone", ctrl.onFormat.phone(client.phone, t))
            }
            valid={audit?.valid?.phone}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>Gestion des droits :</Text>
          <ToggleLong
            text={"Employé"}
            value={client.is_admin || client.id_salon != null}
            setValue={(b) => update("id_salon", b ? salon._id : null)}
          />
          <ToggleLong
            text={"Administrateur"}
            value={client.is_admin}
            setValue={(b) => update("is_admin", b)}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
          <BtnThird
            text={"Supprimer définitivement le compte"}
            onPres={() => controller.delete.user(navigation, user)}
            important
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ClientInfo;

const styles = StyleSheet.create({
  container: {
    top: 50,
    height: "90%",
  },
});
