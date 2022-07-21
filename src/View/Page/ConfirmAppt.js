import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Primary from "../Buttons/Primary";
import RadioBox from "../Componnent/RadioBox";

import Page from "../Container/Page";
import InputSecondary from "../Input/InputSecondary";
import Header from "../Parts/Header";

import { controller as ctrl } from "model/Main";
import CDate from "../../model/utils/CDate";

const ConfirmAppt = ({ navigation, route }) => {
  const service = route.params.service;
  const salon = route.params.salon;
  const apt_init = route.params.apt;
  const user = ctrl.this_user_data;

  const [apt, setApt] = useState(apt_init);
  const [audit, setAudit] = useState(ctrl.fakeAudit(apt_init));
  const [radio, setRadio] = useState(0);

  const apt_date = new CDate(apt.date);

  const radioOffer = (id) => ctrl.onPress.radioOffer(setApt, setRadio, id);
  const updateOffer = (k, t) =>
    setApt((p) => ({ ...p, offer: { ...p.offer, [k]: t } }));

  return (
    <Page>
      <Header
        text={"Valider votre réservation"}
        type={"back"}
        nav={navigation}
      />

      <View style={styles.container}>
        <RadioBox
          style={styles.radio}
          style_txt={styles.txt_radio}
          style_active={styles.radio_on}
          text={"Pour moi"}
          id={0}
          id_selected={radio}
          style_txt_active={styles.txt_radio_on}
          onPress={radioOffer}
          />
        <RadioBox
          style={styles.radio}
          style_txt_active={styles.txt_radio_on}
          style_txt={styles.txt_radio}
          style_active={styles.radio_on}
          text={"Pour un proche"}
          id={1}
          id_selected={radio}
          onPress={radioOffer}
        />
      </View>

      <View style={styles.ctn_inputs}>
        <InputSecondary
          plh={"Prénom"}
          typeAndroid={"name-given"}
          typeIOS={"givenName"}
          returnKeyType={"next"}
          maxLength={20}
          isValidFormat={audit.offer?.firstname}
          value={radio ? apt.offer?.firstname : user.firstname}
          setValue={(t) => updateOffer("firstname", t)}
          disabled={!radio}
        />
        <InputSecondary
          plh={"Nom"}
          typeAndroid={"name-family"}
          typeIOS={"familyName"}
          returnKeyType={"next"}
          maxLength={20}
          isValidFormat={audit.offer?.lastname}
          value={radio ? apt.offer?.lastname : user.lastname}
          setValue={(t) => updateOffer("lastname", t)}
          disabled={!radio}
        />
        <InputSecondary
          plh={"Téléphone"}
          typeAndroid={"tel"}
          typeIOS={"telephoneNumber"}
          returnKeyType={"done"}
          maxLength={14}
          keyboardType={"phone-pad"}
          isValidFormat={audit.offer?.phone}
          value={radio ? apt.offer?.phone : user.phone}
          setValue={(t) =>
            updateOffer("phone", ctrl.onFormat.phone(apt.offer?.phone, t))
          }
          disabled={!radio}
        />
      </View>

      <View style={styles.ctn_resume}>
        <Text style={styles.h1}>Récapitulatif :</Text>
        <View style={styles.field}>
          <Text style={styles.h2_key}>Prestation :</Text>
          <Text style={styles.h2_val} numberOfLines={2}>
            {service.name}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2_key}>Date :</Text>
          <Text style={styles.h2_val}>{apt_date.toDateString()}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2_key}>Heure :</Text>
          <Text style={styles.h2_val}>{apt_date.toTimeString()}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2_key}>Durée :</Text>
          <Text style={styles.h2_val}>
            {CDate.toTimeString(service.duration)}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2_key}>Salon :</Text>
          <Text style={styles.h2_val}>{salon.address}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2_key}>Tarif :</Text>
          <Text style={styles.h2_val}>{service.price}DT</Text>
        </View>
      </View>

      <Primary
        text={`Confirmer la réservation`}
        height={10}
        font_size={18}
        style={styles.button_appt}
        func={() => ctrl.add.appointment(navigation, apt, setAudit)}
        is_active={true}
      />
    </Page>
  );
};

export default ConfirmAppt;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginBottom: 20,
  },

  radio: {
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#faa4af",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    margin: 5,
    borderColor: "#faa4af",
    minWidth: 90,
  },

  txt_radio: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff"
  },
  
  txt_radio_on: {
    color: "#faa4af",
  },
  
  radio_on: {
    backgroundColor: "#fff",
    flex: 2,
  },

  ctn_inputs: {
    marginHorizontal: 40,
  },

  ctn_resume: {
    marginHorizontal: 30,
    marginVertical: 40,
  },

  h1: {
    fontSize: 25,
    fontWeight: "500",
    width: "100%",
    borderBottomWidth: 2,
    textDecorationLine: "underline",
    marginBottom: 10,
  },

  field: {
    flexDirection: "row",
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
  },

  h2_key: {
    fontSize: 18,
    fontWeight: "400",
  },

  h2_val: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    flexWrap: "wrap",
  },

  button_appt: {
    borderWidth: 2,
    backgroundColor: "#faa4af",
    borderColor: "#faa4af",
    marginVertical: 30,
    marginHorizontal: 30,
  },
});
