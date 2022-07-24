// Reacts imports
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Componnents imports
import Page from "container/Page";
import Header from "../Parts/Header";
import InputLong from "../Input/InputLong";
import InputHours from "../Input/InputHours";
import DaysCheckBoxList from "../Generator/DaysCheckBoxList";
import ToggleLong from "../Componnent/ToggleLong";
import Primary from "button/Primary";
import Loader from "./Loader";
import InputError from "../Input/InputError";

// Libraries imports
import _ from "lodash";
import { controller as ctrl } from "model/Main";
import CDate from "model/utils/CDate";

// Constant imports
import {
  INPUT_ADDRESS,
  INPUT_COORD,
  INPUT_PHONE,
  INPUT_SALONS,
  KEYBOARD_AVOIDING_VIEW,
} from "constants/PROPS";
import { TITLE } from "constants/TEXTS";
import { STYLE_GENERAL } from "constants/STYLES";
import { ERROR_TEXT } from "../../constants/TEXTS";
import HeaderSave from "../Parts/HeaderSave";

const Salons = (...props) => {
  // Destructure props
  const [{ navigation: nav }] = props;

  // Define componnent state
  const [initSalon, setInitSalon] = useState();
  const [salon, setSalon] = useState();
  const [audit, setAudit] = useState();
  const [saving, setSaving] = useState();

  // Define componnent function
  const formatHours = (t) => (typeof t == "number" ? CDate.toTimeString(t) : t);
  const strPhone = (v) => ctrl.onFormat.phone(salon.phone, v);
  const strFloat = (v) => ctrl.onFormat.float(v);
  const strTime = (v) => ctrl.onFormat.time(v);
  const onSave = () =>
    ctrl.update.salon(salon, initSalon, setInitSalon, setAudit, setSaving);

  // On load componnent
  useEffect(() => {
    ctrl.get.salon(setInitSalon, setSalon);
  }, []);

  useEffect(() => {
    setSaving(false);
  }, [audit]);

  if (!initSalon || !salon) return <Loader />;
  return (
    <Page>
      <HeaderSave
        canSave={_.isEqual(initSalon, salon)}
        saving={saving}
        onSave={onSave}
        onClose={() => ctrl.goTo.back(nav)}
      />

      <KeyboardAvoidingView
        {...KEYBOARD_AVOIDING_VIEW}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>{TITLE.globalInfo}</Text>
            <InputLong
              {...INPUT_SALONS}
              value={salon.name}
              setValue={(v) => setSalon({ ...salon, name: v })}
              valid={audit?.valid?.name && !saving}
            />
            <InputLong
              {...INPUT_ADDRESS}
              value={salon.address}
              setValue={(v) => setSalon({ ...salon, address: v })}
              valid={audit?.valid?.address && !saving}
            />
            <InputLong
              {...INPUT_PHONE}
              value={salon.phone}
              setValue={(v) => setSalon({ ...salon, phone: strPhone(v) })}
              valid={audit?.valid?.phone && !saving}
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>Position sur la map :</Text>
            <InputLong
              {...INPUT_COORD}
              text={"Longitude"}
              setValue={(v) => setSalon({ ...salon, longitude: strFloat(v) })}
              value={salon.longitude.toString()}
              valid={audit?.valid?.longitude && !saving}
            />
            <InputLong
              {...INPUT_COORD}
              text={"Latitude"}
              value={salon.latitude.toString()}
              setValue={(v) => setSalon({ ...salon, latitude: strFloat(v) })}
              valid={audit?.valid?.latitude && !saving}
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>Les horaires :</Text>
            <InputHours
              text={"Le matin"}
              maxLength={5}
              errorText={ERROR_TEXT.hours}
              textLeft="Ouverture"
              textRight="Fermeture"
              plhLeft={"10h00"}
              plhRight={"12h"}
              valueLeft={formatHours(salon.am_on)}
              valueRight={formatHours(salon.am_off)}
              setValueLeft={(v) => setSalon({ ...salon, am_on: strTime(v) })}
              setValueRight={(v) => setSalon({ ...salon, am_off: strTime(v) })}
              validLeft={audit?.valid?.am_on}
              validRight={audit?.valid?.am_off}
            />
            <InputHours
              text={"L'après-midi"}
              maxLength={5}
              errorText={ERROR_TEXT.hours}
              textLeft="Ouverture"
              textRight="Fermeture"
              plhLeft={"13h30"}
              plhRight={"18h"}
              valueLeft={formatHours(salon.pm_on)}
              valueRight={formatHours(salon.pm_off)}
              setValueLeft={(v) => setSalon({ ...salon, pm_on: strTime(v) })}
              setValueRight={(v) => setSalon({ ...salon, pm_off: strTime(v) })}
              validLeft={audit?.valid?.pm_on}
              validRight={audit?.valid?.pm_off}
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>
              Les jours de fermeture :
            </Text>
            <DaysCheckBoxList
              value={salon.day_off}
              setValue={(v) =>
                setSalon({
                  ...salon,
                  day_off: { ...salon.day_off, ...v },
                })
              }
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>
              Les dates de fermeture :
            </Text>
            <InputError
              value={salon.date_off}
              setValue={(v) => setSalon({ ...salon, date_off: v })}
              placeholder="14/07;15/08"
              multiline
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
            <ToggleLong
              text={"Prise de nouveau RDV"}
              value={salon.is_opened}
              onPress={(b) => setSalon({ ...salon, date_off: b })}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Page>
  );
};

export default Salons;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
});
