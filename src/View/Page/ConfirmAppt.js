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
  const updateOffer = () => setApt((p) => ({ ...p, offer: { [key]: value } }));

  return (
    <Page>
      <Header
        title={"Valider votre réservation"}
        type={"back"}
        navigation={navigation}
      />

      <View style={styles.container}>
        <RadioBox
          style={styles.radio}
          style_txt={styles.txt_radio}
          style_active={styles.radio_on}
          text={"Pour moi"}
          id={0}
          id_selected={radio}
          onPress={radioOffer}
        />
        <RadioBox
          style={styles.radio}
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
          maxLength={10}
          keyboardType={"phone-pad"}
          isValidFormat={audit.offer?.phone}
          value={radio ? apt.offer?.phone : user.phone}
          setValue={(t) => updateOffer("phone", t)}
          disabled={!radio}
        />
      </View>

      <View style={styles.ctn_resume}>
        <Text style={styles.h1}>Récapitulatif :</Text>
        <View style={styles.field}>
          <Text style={styles.h2_key}>Prestation :</Text>
          <Text style={styles.h2_val}>{service.name}</Text>
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
          <Text style={styles.h2_key}>Tarifs :</Text>
          <Text style={styles.h2_val}>{service.price}€</Text>
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
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    margin: 5,
    borderColor: "#f5f5f5",
    minWidth: 90,
  },

  txt_radio: {
    fontSize: 20,
    fontWeight: "300",
  },

  radio_on: {
    backgroundColor: "#f5f5f5",
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
    // textDecorationLine: "underline",
  },

  h2_val: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
  },

  button_appt: {
    borderWidth: 2,
    borderColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
  },
});
