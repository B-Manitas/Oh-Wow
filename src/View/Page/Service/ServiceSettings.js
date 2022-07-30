// React imports
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

// Componnents imports
import ToggleLong from "componnents/ToggleLong";
import InputLong from "inputs/InputLong";
import BtnThird from "buttons/BtnThird";
import HeaderSave from "parts/HeaderSave";
import InputError from "inputs/InputError";

// Model imports
import { controller as ctrl } from "model/Main";

// Libraries imports
import CDate from "model/utils/CDate";
import _ from "lodash";

// Constants imports
import { KEYBOARD_AVOIDING_VIEW } from "constants/PROPS";
import { PLH, TITLE } from "constants/TEXTS";
import COLORS from "constants/COLORS";
import { ERROR_TEXT } from "constants/TEXTS";
import { STYLE_GENERAL } from "constants/STYLES";
import { INPUT_DURATION, INPUT_PRICE, INPUT_SERVICE } from "constants/PROPS";

const ServiceSettings = (props) => {
  // Destructure props
  const { data, setData, init, setInit, nav, visible, close } = props;

  // Define componnent state
  const [audit, setAudit] = useState();
  const [saving, setSaving] = useState(false);

  // Define componnent function
  const duration = (t) => (typeof t == "number" ? CDate.toTimeString(t) : t);
  const setDur = (t) => setData((p) => ({ ...p, duration: t }));
  const setPrice = (t) => setData((p) => ({ ...p, price: t }));
  const onSave = () =>
    ctrl.update.service(setSaving, data, init, setInit, setAudit);

  // After saving service
  useEffect(() => {
    if (!audit?.valid?.all && saving) setSaving(false);
  }, [audit]);

  if (!visible) return null;
  return (
    <KeyboardAvoidingView {...KEYBOARD_AVOIDING_VIEW} style={styles.ctn}>
      <HeaderSave
        saving={saving}
        canSave={!_.isEqual(data, init)}
        onSave={onSave}
        onClose={close}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.globalInfo}</Text>
          <InputLong
            {...INPUT_SERVICE}
            valid={audit?.valid?.name}
            value={data.name}
            setValue={(t) => setData((p) => ({ ...p, name: t }))}
          />
          <InputLong
            {...INPUT_DURATION}
            valid={audit?.valid?.duration}
            value={duration(data.duration)}
            setValue={(t) => ctrl.onFormat.time(t, setDur)}
          />
          <InputLong
            {...INPUT_PRICE}
            valid={audit?.valid?.price}
            value={data.price.toString()}
            setValue={(t) => ctrl.onFormat.integer(t, setPrice)}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.description}</Text>
          <InputError
            value={data.description}
            setValue={(t) => setData((p) => ({ ...p, description: t }))}
            placeholder={PLH.description}
            valid={audit?.valid?.description}
            multiline
            errorText={ERROR_TEXT.name}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.visibility}</Text>
          <ToggleLong
            text={"Afficher"}
            value={!data.is_hidden}
            setValue={(b) => setData((p) => ({ ...p, is_hidden: !b }))}
          />
          <ToggleLong
            text={"Afficher en page d'accueil"}
            value={data.is_trend}
            setValue={(b) => setData((p) => ({ ...p, is_trend: b }))}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
          <BtnThird
            text={"Supprimer la prestation"}
            fontWeight={"500"}
            color={COLORS.error}
            onPress={() => ctrl.delete.service(data._id, nav)}
            important
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ServiceSettings;

const styles = StyleSheet.create({
  ctn: {
    paddingTop: 110,
    marginBottom: 20,
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});
