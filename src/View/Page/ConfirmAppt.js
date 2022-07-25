// React import
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Componnent import
import Header from "../Parts/Header";
import Page from "../Container/Page";
import InputSecondary from "../Input/InputSecondary";
import Primary from "../Buttons/Primary";
import RadioBox from "../Componnent/RadioBox";

// Libraries import
import { controller as ctrl } from "model/Main";
import CDate from "model/utils/CDate";

// Constants import
import { INPUT_FIRSTNAME, INPUT_LASTNAME, INPUT_PHONE } from "constants/PROPS";

const ConfirmAppt = (props) => {
  // Destructure props
  const { navigation: nav, route } = props;

  // Define componnent state
  const apt = useRef(route.params.apt);
  const service = route.params.service;
  const salon = route.params.salon;
  const user = ctrl.this_user_data;
  const aptDate = new CDate(apt.current.date);

  const [audit, setAudit] = useState();
  const [isOffer, setIsOffer] = useState(0);

  const updtOffer = (k, t) =>
    (apt.current = { ...apt.current, offer: { ...apt.current.offer, [k]: t } });

  // Define radio box props
  const propsRadioBox = {
    onPress: (id) => ctrl.onPress.radioOffer(setApt, setIsOffer, id),
    isFlex: true,
    isSelected: isOffer,
  };

  return (
    <Page>
      <Header text={"Valider votre réservation"} type={"back"} nav={nav} />

      <View style={styles.container}>
        <RadioBox {...propsRadioBox} text={"Pour moi"} id={0} />
        <RadioBox {...propsRadioBox} text={"Pour un proche"} id={1} />
      </View>

      <View style={styles.ctn_inputs}>
        <InputSecondary
          {...INPUT_FIRSTNAME}
          valid={audit?.valid?.offer?.firstname}
          value={isOffer ? apt.current.offer?.firstname : user.firstname}
          setValue={(t) => updtOffer("firstname", t)}
          disabled={!isOffer}
          editable={isOffer === 1}
        />
        <InputSecondary
          {...INPUT_LASTNAME}
          valid={audit?.valid?.offer?.lastname}
          value={isOffer ? apt.current.offer?.lastname : user.lastname}
          setValue={(t) => updtOffer("lastname", t)}
          disabled={!isOffer}
          editable={isOffer === 1}
        />
        <InputSecondary
          {...INPUT_PHONE}
          valid={audit?.valid?.offer?.phone}
          value={isOffer ? apt.current.offer?.phone : user.phone}
          setValue={(t) =>
            updtOffer("phone", ctrl.onFormat.phone(apt.current.offer?.phone, t))
          }
          disabled={!isOffer}
          editable={isOffer === 1}
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
          <Text style={styles.h2_val}>{aptDate.toLocaleDateString()}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2_key}>Heure :</Text>
          <Text style={styles.h2_val}>{aptDate.toTimeString()}</Text>
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
        text={"Confirmer la réservation"}
        onPress={() => ctrl.add.appointment(navigation, apt, setAudit)}
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
    color: "#fff",
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
