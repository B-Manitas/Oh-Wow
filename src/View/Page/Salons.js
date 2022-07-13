import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Page from "../Container/Page";
import Header from "../Parts/Header";

import RadioBox from "../Componnent/RadioBox";
import { useState } from "react";
import InputLong from "../Input/InputLong";
import InputHours from "../Input/InputHours";
import DaysCheckBoxList from "../Generator/DaysCheckBoxList";

import { controller as ctrl } from "model/Main";
import { useEffect } from "react";
import ToggleLong from "../Componnent/ToggleLong";
import CDate from "../../model/utils/CDate";
import Chevron from "../Buttons/Chevron";
import Primary from "../Buttons/Primary";
import Utils from "model/Utils";

const Salons = ({ navigation }) => {
  const schema = ctrl.frontend.schemaSalon();

  const [select, setSelect] = useState(0);
  const [salons, setSalons] = useState(undefined);
  const [salons_init, setSalonsInit] = useState(undefined);
  const [audit, setAudit] = useState(ctrl.fakeAudit(schema));

  const formatTime = (t) => (typeof t === "number" ? CDate.toTimeString(t) : t);
  const is_saved = (id) =>
    salons_init &&
    salons &&
    id < salons_init.length &&
    Utils.isEquals(salons[id], salons_init[id]);

  const updateTime = (id, key, value) =>
    setSalons((p) =>
      p.map((item, i) => {
        if (id === i) {
          value = ctrl.onFormat.time(value);
          return { ...item, [key]: value };
        } else return item;
      })
    );

  const updateDayOff = (id, value) =>
    setSalons((p) =>
      p.map((item, i) => {
        if (id === i) {
          return { ...item, day_off: { ...p[id].day_off, ...value } };
        } else return item;
      })
    );

  const update = (id, key, value) =>
    setSalons((p) =>
      p.map((item, i) => {
        if (id === i) return { ...item, [key]: value };
        else return item;
      })
    );

  const onPressSalon = (id) => {
    setSelect(id);
    setAudit(ctrl.fakeAudit(schema));
  };

  const onPressSave = () => {
    ctrl.update.salon(salons[select], salons_init, setSalonsInit, setAudit);
    setAudit(ctrl.fakeAudit(schema));
  };

  const onPressDelete = () => {
    ctrl.delete.salon(
      salons[select],
      salons_init,
      setSalons,
      setSalonsInit,
      setSelect
    );

    setAudit(ctrl.fakeAudit(schema));
  };

  useEffect(() => {
    ctrl.get.allSalons(setSalons, setSalonsInit);
  }, []);

  useEffect(() => {
    if (select == salons?.length) setSalons((p) => [...p, schema]);
  }, [select, salons?.length]);

  if (!salons || select == salons?.length) return <Text>Fecthing data...</Text>;
  return (
    <Page>
      <Header
        title={"Gestion des salons"}
        type={"close"}
        navigation={navigation}
      />
      <View style={styles.ctn_nav_button}>
        {salons.map((salon, id) => (
          <RadioBox
            key={id}
            id={id}
            id_selected={select}
            text={salon.name}
            onPress={onPressSalon}
            style={styles.radio}
            style_txt={[
              styles.txt_radio,
              !is_saved(id) && styles.txt_radio_modified,
            ]}
            style_active={styles.radio_on}
          />
        ))}
        <RadioBox
          id={salons.length}
          id_selected={select}
          text={"+"}
          onPress={onPressSalon}
          style={styles.radio}
          style_txt={styles.txt_radio}
          style_active={styles.radio_on}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.section_h1}>Information Générale :</Text>
            <InputLong
              text={"Nom du salon"}
              placeholder={"salon"}
              value={salons[select].name}
              setValue={(t) => update(select, "name", t)}
              length={12}
              is_valid={audit.name}
            />
            <InputLong
              text={"Adresse"}
              placeholder={"1 rue du salon"}
              value={salons[select].address}
              setValue={(t) => update(select, "address", t)}
              is_valid={audit.address}
            />
            <InputLong
              text={"Téléphone"}
              placeholder={"00 00 00 00 00"}
              key_type={"numeric"}
              length={14}
              value={salons[select].phone}
              setValue={(t) =>
                update(
                  select,
                  "phone",
                  ctrl.onFormat.phone(salons[select].phone, t)
                )
              }
              is_valid={audit.phone}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.section_h1}>Position sur la map :</Text>
            <InputLong
              text={"Longitude"}
              placeholder={"10.0000"}
              setValue={(t) =>
                update(select, "longitude", ctrl.onFormat.float(t))
              }
              length={10}
              key_type={"numeric"}
              value={salons[select].longitude.toString()}
              is_valid={audit.longitude}
            />
            <InputLong
              text={"Latitude"}
              placeholder={"10.0000"}
              value={salons[select].latitude.toString()}
              setValue={(t) =>
                update(select, "latitude", ctrl.onFormat.float(t))
              }
              key_type={"numeric"}
              length={10}
              is_valid={audit.latitude}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.section_h1}>Les horaires :</Text>
            <InputHours
              text={"Le matin"}
              plh_1={"9h30"}
              plh_2={"12h30"}
              value_1={formatTime(salons[select].am_on)}
              value_2={formatTime(salons[select].am_off)}
              func_1={(t) => updateTime(select, "am_on", t)}
              func_2={(t) => updateTime(select, "am_off", t)}
              is_valid_1={audit.am_on}
              is_valid_2={audit.am_off}
            />
            <InputHours
              text={"L'après-midi"}
              plh_1={"14h"}
              plh_2={"18h"}
              value_1={formatTime(salons[select].pm_on)}
              value_2={formatTime(salons[select].pm_off)}
              func_1={(t) => updateTime(select, "pm_on", t)}
              func_2={(t) => updateTime(select, "pm_off", t)}
              is_valid_1={audit.pm_on}
              is_valid_2={audit.pm_off}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.section_h1}>Les jours de fermeture :</Text>
            <DaysCheckBoxList
              value={salons[select].day_off}
              setValue={(v) => updateDayOff(select, v)}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.section_h1}>Les dates de fermeture :</Text>
            <TextInput
              style={[
                styles.input,
                !audit.date_off && { borderColor: "#DA573D" },
              ]}
              placeholder={"14/07;15/08"}
              multiline={true}
              value={salons[select].date_off}
              onChangeText={(t) => update(select, "date_off", t)}
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.section_h1}>Autres :</Text>
            <ToggleLong
              text={"Prise de nouveau RDV"}
              value={salons[select].is_opened}
              func={(b) => update(select, "is_opened", b)}
            />
            <Chevron
              text={"Supprimer définitivement le salon"}
              func={onPressDelete}
              fontWeight={"500"}
              color={"#DA573D"}
            />
          </View>
          <View style={styles.section}>
            <Primary
              text={"Sauvegarder"}
              height={10}
              font_size={20}
              is_active={!is_saved(select)}
              func={onPressSave}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Page>
  );
};

export default Salons;

const styles = StyleSheet.create({
  ctn_nav_button: {
    flexDirection: "row",
    marginHorizontal: 30,
  },

  radio: {
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    margin: 2,
    borderColor: "#f5f5f5",
  },

  txt_radio: {
    fontSize: 20,
    fontWeight: "300",
  },

  txt_radio_modified: {
    color: "#DA573D",
  },

  radio_on: {
    backgroundColor: "#f5f5f5",
    flex: 2,
  },

  container: {
    marginVertical: 10,
    marginBottom: 150,
  },

  section: {
    marginVertical: 15,
    marginHorizontal: 30,
  },

  section_h1: {
    fontSize: 25,
    fontWeight: "500",
    width: "100%",
    borderBottomWidth: 2,
    textDecorationLine: "underline",
    marginBottom: 10,
  },

  ctn_input: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },

  section_h2: {
    fontSize: 20,
  },

  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 60,
    minWidth: "20%",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: "transparent",
  },
});