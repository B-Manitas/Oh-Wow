import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Primary from "../Buttons/Primary";
import RadioBox from "../Componnent/RadioBox";

import Page from "../Container/Page";
import InputSecondary from "../Input/InputSecondary";
import Header from "../Parts/Header";

import { controller } from "model/Main";
import Calendars from "../../model/Calendars";

const ConfirmAppt = ({ navigation, route }) => {
  const service = route.params.service;
  const salon = route.params.salon;

  const init_appointment = route.params.appointment;
  var schema_anonymous = controller.frontend.schemaAnonymous();

  const [box_selected, setBoxSelected] = useState(0);

  const [appointment, setAppointment] = useState(init_appointment);
  const [audit, setAudit] = useState(controller.fakeAudit(init_appointment));

  const pressRadioBox = (id_radio) => {
    if (id_radio == 1) schema_anonymous = controller.frontend.schemaAnonymous();
    else schema_anonymous = null;

    setAppointment((p) => ({ ...p, offer: schema_anonymous }));
    setBoxSelected(id_radio);
  };

  return (
    <Page>
      <Header
        title={"Validation du RDV"}
        type={"back"}
        navigation={navigation}
      />
      <View style={styles.container}>
        <Text style={styles.text_offer}>Prendre un RDV pour :</Text>

        <View style={styles.container_offer}>
          <View style={styles.container_radio}>
            <RadioBox
              id_selected={box_selected}
              id={0}
              onPress={pressRadioBox}
            />
            <Text style={styles.text_radio}>Moi</Text>
          </View>
          <View style={styles.container_radio}>
            <RadioBox
              id_selected={box_selected}
              id={1}
              onPress={pressRadioBox}
            />
            <Text style={styles.text_radio}>Un proche</Text>
          </View>

          {box_selected == 1 && (
            <View style={styles.container_input}>
              <InputSecondary
                disabled={box_selected == 0}
                plh={"Prénom"}
                typeAndroid={"name-given"}
                typeIOS={"givenName"}
                returnKeyType={"next"}
                maxLength={20}
                keyboardType={"default"}
                isValidFormat={audit.offer?.firstname}
                value={appointment.offer?.firstname}
                setValue={(t) =>
                  setAppointment((p) => ({
                    ...p,
                    offer: { ...p.offer, firstname: t },
                  }))
                }
              />
              <InputSecondary
                disabled={box_selected == 0}
                plh={"Nom"}
                typeAndroid={"name-family"}
                typeIOS={"familyName"}
                returnKeyType={"next"}
                maxLength={20}
                keyboardType={"default"}
                isValidFormat={audit.offer?.lastname}
                value={appointment.offer?.lastname}
                setValue={(t) =>
                  setAppointment((p) => ({
                    ...p,
                    offer: { ...p.offer, lastname: t },
                  }))
                }
              />
              <InputSecondary
                disabled={box_selected == 0}
                plh={"Téléphone"}
                typeAndroid={"tel"}
                typeIOS={"telephoneNumber"}
                returnKeyType={"done"}
                maxLength={10}
                keyboardType={"phone-pad"}
                secureTextEntry={false}
                isValidFormat={audit.offer?.phone}
                value={appointment.offer?.phone}
                setValue={(t) =>
                  setAppointment((p) => ({
                    ...p,
                    offer: { ...p.offer, phone: t },
                  }))
                }
              />
            </View>
          )}
        </View>

        <View style={styles.container_resume}>
          <Text style={styles.text_resume}>Prestation: {service.name}</Text>
          <Text style={styles.text_resume}>Durée: {service.duration}</Text>
          <Text style={styles.text_resume}>Tarifs: {service.price}€</Text>
          <Text style={styles.text_resume}>Esthéticienne: Indéfini</Text>
          <Text style={styles.text_resume}>Salon: {salon.addresse}</Text>
        </View>

        <Primary
          text={`Valider le RDV le ${Calendars.shortDateFormat(
            appointment.date
          )} à ${Calendars.timeOfDateFormat(appointment.date)}`}
          height={10}
          font_size={18}
          style={styles.button_appt}
          func={() =>
            controller.add.appointment(navigation, appointment, setAudit)
          }
          is_active={true}
        />
      </View>
    </Page>
  );
};

export default ConfirmAppt;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 30,
  },

  text_offer: {
    fontSize: 22,
    textDecorationLine: "underline",
  },

  container_offer: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 15,
  },

  container_radio: {
    flexDirection: "row",
    alignItems: "center",
  },

  text_radio: {
    marginLeft: 20,
    fontSize: 20,
  },

  container_input: {
    marginVertical: 20,
  },

  container_resume: {
    marginVertical: 0,
  },

  text_resume: {
    fontSize: 18,
    paddingVertical: 5,
  },

  button_appt: {
    borderWidth: 0,
    marginTop: 30,
    marginBottom: 30,
  },
});
