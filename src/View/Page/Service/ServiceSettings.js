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
import ToggleLong from "../../Componnent/ToggleLong";
import Button from "button/Button";
import InputLong from "../../Input/InputLong";
import ButtonThird from "button/ButtonThird";

// Model imports
import { controller as ctrl } from "model/Main";

// Libraries imports
import CDate from "../../../model/utils/CDate";
import _ from "lodash";

// Constants imports
import { ICON } from "constants/IMAGES";
import { KEYBOARD_AVOIDING_VIEW } from "constants/PROPS";
import { PLH, TITLE } from "constants/TEXTS";
import COLORS from "constants/COLORS";
import Primary from "../../Buttons/Primary";
import InputError from "../../Input/InputError";
import { ERROR_TEXT } from "../../../constants/TEXTS";
import { STYLE_GENERAL } from "../../../constants/STYLES";
import HeaderSave from "../../Parts/HeaderSave";

const ServiceSettings = (props) => {
  // Destructure props
  const { data, setData, init, setInit, nav, visible, close } = props;

  // Define componnent state
  const [audit, setAudit] = useState(ctrl.fakeAudit(init));
  const [saving, setSaving] = useState(false);

  // Define componnent function
  const duration = (t) => (typeof t == "number" ? CDate.toTimeString(t) : t);
  const setDur = (t) => setData((p) => ({ ...p, duration: t }));
  const setPrice = (t) => setData((p) => ({ ...p, price: t }));
  const onSave = () =>
    ctrl.onPress.service(setSaving, data, init, setInit, setAudit);

  console.log(audit?.valid?.name && !saving);

  // On save service
  useEffect(() => {
    if (!audit?.valid?.all && saving) setSaving(false);
  }, [audit]);

  if (!visible) return null;
  return (
    <KeyboardAvoidingView {...KEYBOARD_AVOIDING_VIEW} style={styles.ctn}>
      <HeaderSave
        saving={saving}
        canSave={_.isEqual(data, init)}
        onSave={onSave}
        onClose={close}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.globalInfo}</Text>
          <InputLong
            text={"Nom"}
            placeholder={PLH.serviceName}
            valid={audit?.valid?.name && !saving}
            value={data.name}
            setValue={(t) => setData((p) => ({ ...p, name: t }))}
            errorText={ERROR_TEXT.name}
          />
          <InputLong
            text={"Prix en dinar tunisien"}
            key_type={"numeric"}
            placeholder={PLH.price}
            valid={audit?.valid?.price && !saving}
            value={data.price.toString()}
            setValue={(t) => ctrl.onFormat.price(t, setPrice)}
            errorText={ERROR_TEXT.number}
          />
          <InputLong
            text={"Durée"}
            placeholder={PLH.duration}
            valid={audit?.valid?.duration && !saving}
            value={duration(data.duration)}
            setValue={(t) => ctrl.onFormat.time(t, setDur)}
            errorText={ERROR_TEXT.duration}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.description}</Text>
          <InputError
            value={data.description}
            setValue={(t) => setData((p) => ({ ...p, description: t }))}
            placeholder={PLH.description}
            valid={audit?.valid?.description && !saving}
            multiline
            errorText={ERROR_TEXT.name}
          />
        </View>

        <View style={STYLE_GENERAL.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.visibility}</Text>
          <ToggleLong
            text={"Afficher"}
            value={!data.is_hidden}
            func={(b) => setData((p) => ({ ...p, is_hidden: !b }))}
          />
          <ToggleLong
            text={"Afficher en page d'accueil"}
            value={data.is_trend}
            func={(b) => setData((p) => ({ ...p, is_trend: b }))}
          />
        </View>

        <View style={styles.sectionCtn}>
          <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
          <ButtonThird
            text={"Supprimer la prestation"}
            fontWeight={"500"}
            color={COLORS.error}
            func={() => ctrl.delete.data(data._id, nav)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ServiceSettings;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
    height: 110,
    elevation: 5,
    zIndex: 5,
    top: 0,
    right: 0,
    left: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  close: {
    height: 35,
    width: 35,
    position: "absolute",
    padding: 5,
    top: 60,
    left: 30,
  },

  savingText: {
    position: "absolute",
    top: 70,
    left: 30,
  },

  save: {
    paddingVertical: 7,
    width: 120,
    paddingHorizontal: 10,
    position: "absolute",
    top: 60,
    right: 20,
  },

  ctn: {
    paddingTop: 110,
    paddingBottom: 0,
    marginBottom: 50,
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});
