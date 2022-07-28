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
import Page from "containers/Page";
import InputLong from "inputs/InputLong";
import InputHours from "inputs/InputHours";
import DaysCheckBoxList from "generators/DaysCheckBoxList";
import ToggleLong from "componnents/ToggleLong";
import Loader from "./Loader";
import InputError from "inputs/InputError";
import HeaderSave from "parts/HeaderSave";

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
import { ERROR_TEXT, PLH } from "constants/TEXTS";

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
    ctrl.update.salon(setSaving, salon, initSalon, setInitSalon, setAudit);
  const setHoursOn = (k, v) =>
    setSalon({ ...salon, hours_on: { ...salon.hours_on, [k]: strTime(v) } });

  // On load componnent
  useEffect(() => {
    ctrl.get.salon(setInitSalon, setSalon);
  }, []);

  // After saving
  useEffect(() => {
    setSaving(false);
  }, [audit]);

  if (!initSalon || !salon) return <Loader />;
  return (
    <Page>
      <HeaderSave
        canSave={!_.isEqual(initSalon, salon)}
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
              valid={audit?.valid?.name}
            />
            <InputLong
              {...INPUT_ADDRESS}
              value={salon.address}
              setValue={(v) => setSalon({ ...salon, address: v })}
              valid={audit?.valid?.address}
            />
            <InputLong
              {...INPUT_PHONE}
              value={salon.phone}
              setValue={(v) => setSalon({ ...salon, phone: strPhone(v) })}
              valid={audit?.valid?.phone}
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>Position sur la map :</Text>
            <InputLong
              {...INPUT_COORD}
              text={"Longitude"}
              setValue={(v) => setSalon({ ...salon, longitude: strFloat(v) })}
              value={salon.longitude.toString()}
              valid={audit?.valid?.longitude}
            />
            <InputLong
              {...INPUT_COORD}
              text={"Latitude"}
              value={salon.latitude.toString()}
              setValue={(v) => setSalon({ ...salon, latitude: strFloat(v) })}
              valid={audit?.valid?.latitude}
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
              plhLeft={PLH.amOn}
              plhRight={PLH.amOff}
              valueLeft={formatHours(salon?.hours_on.am_on)}
              valueRight={formatHours(salon?.hours_on.am_off)}
              setValueLeft={(v) => setHoursOn("am_on", v)}
              setValueRight={(v) => setHoursOn("am_off", v)}
              validLeft={audit?.valid?.hours_on?.am_on}
              validRight={audit?.valid?.hours_on?.am_off}
            />
            <InputHours
              text={"L'après-midi"}
              maxLength={5}
              errorText={ERROR_TEXT.hours}
              textLeft="Ouverture"
              textRight="Fermeture"
              plhLeft={PLH.pmOn}
              plhRight={PLH.pmOff}
              valueLeft={formatHours(salon?.hours_on.pm_on)}
              valueRight={formatHours(salon?.hours_on.pm_off)}
              setValueLeft={(v) => setHoursOn("pm_on", v)}
              setValueRight={(v) => setHoursOn("pm_off", v)}
              validLeft={audit?.valid?.hours_on?.pm_on}
              validRight={audit?.valid?.hours_on?.pm_off}
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
              placeholder={PLH.dateOff}
              multiline
            />
          </View>

          <View style={STYLE_GENERAL.sectionCtn}>
            <Text style={STYLE_GENERAL.sectionH1}>{TITLE.others}</Text>
            <ToggleLong
              text={"Prise de nouveau RDV"}
              value={salon.is_opened}
              setValue={(b) => setSalon({ ...salon, date_off: b })}
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
