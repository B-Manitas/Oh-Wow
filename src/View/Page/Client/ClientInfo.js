// React imports
import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Componnent imports
import BtnThird from "buttons/BtnThird";
import ToggleLong from "componnents/ToggleLong";
import InputError from "inputs/InputError";
import InputLong from "inputs/InputLong";
import CtnView from "containers/CtnView";
import DaysCheckBoxList from "generators/DaysCheckBoxList";

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
  INPUT_PASSWORD,
  INPUT_DATE_OFF,
} from "constants/PROPS";

const ClientInfo = (props) => {
  // Destructure props
  const { client, setClient, audit, salon, visible, nav } = props;
  const staff = ctrl.schema.staff();
  const isStaff = !client.is_admin && client.id_salon != null;

  // Define componnent function
  const update = (key, v) => setClient((p) => ({ ...p, [key]: v }));
  const setStaff = (b) =>
    setClient((p) => ({
      ...p,
      id_salon: b ? salon._id : null,
      is_admin: false,
      date_off: staff.date_off,
      day_off: staff.day_off,
    }));
  const setAdmin = (b) =>
    setClient((p) => ({ ...p, id_salon: b ? salon._id : null, is_admin: b }));

  const setDateOff = (t) =>
    setClient({
      ...client,
      date_off: ctrl.onFormat.dateOff(client.date_off, t),
    });

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
          <InputLong
            {...INPUT_PASSWORD}
            value={client.password}
            setValue={(t) => update("password", t)}
            valid={audit?.valid?.password}
            contextMenuHidden
            secureTextEntry={false}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>Gestion des droits :</Text>
          <ToggleLong
            text={"Employé"}
            value={client.is_admin || client.id_salon != null}
            setValue={(b) => setStaff(b)}
          />
          <ToggleLong
            text={"Administrateur"}
            value={client.is_admin}
            setValue={setAdmin}
          />
        </View>

        <CtnView style={STYLE_GENERAL.sectionCtn} visible={isStaff}>
          <Text style={STYLE_GENERAL.sectionH1}>Les jours de repos :</Text>
          <DaysCheckBoxList
            value={client.day_off}
            setValue={(v) =>
              setClient({
                ...client,
                day_off: { ...client.day_off, ...v },
              })
            }
          />
        </CtnView>

        <CtnView style={STYLE_GENERAL.sectionCtn} visible={isStaff}>
          <Text style={STYLE_GENERAL.sectionH1}>Les dates de congés :</Text>
          <InputError
            {...INPUT_DATE_OFF}
            value={client.date_off}
            setValue={(t) => setDateOff(t)}
            valid={audit?.valid?.date_off}
          />
        </CtnView>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
          <BtnThird
            text={"Supprimer définitivement le compte"}
            onPress={() => ctrl.delete.user(nav, client._id)}
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
    height: Dimensions.get("screen").height - 200,
  },
});
