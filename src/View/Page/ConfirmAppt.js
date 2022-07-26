// React import
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Componnent import
import Header from "parts/Header";
import Page from "containers/Page";
import InputSecondary from "inputs/InputSecondary";
import Primary from "buttons/Primary";
import RadioBox from "componnents/RadioBox";

// Libraries import
import { controller as ctrl } from "model/Main";
import CDate from "model/utils/CDate";

// Constants import
import { INPUT_FIRSTNAME, INPUT_LASTNAME, INPUT_PHONE } from "constants/PROPS";
import { STYLE_GENERAL } from "constants/STYLES";

const ConfirmAppt = (props) => {
  // Destructure props
  const { navigation: nav, route } = props;

  // Define componnent state
  const apt = useRef(route.params.apt);
  const service = route.params.service;
  const salon = route.params.salon;
  const user = ctrl.thisUserData;
  const aptDate = new CDate(apt.current.date);

  const [audit, setAudit] = useState();
  const [isOffer, setIsOffer] = useState(0);
  const [sending, setSending] = useState();

  const setOffer = (k, t) =>
    (apt.current = { ...apt.current, offer: { ...apt.current.offer, [k]: t } });

  useEffect(() => {
    setSending(false);
  }, [audit]);

  // Define radio box props
  const propsRadioBox = {
    onPress: (id) => ctrl.onPress.radioOffer(apt.current, setIsOffer, id),
    idSelected: isOffer,
    isFlex: true,
  };

  return (
    <Page>
      <Header text={"Valider votre réservation"} type={"back"} nav={nav} />

      <View style={styles.container}>
        <RadioBox {...propsRadioBox} text={"Pour moi"} id={0} />
        <RadioBox {...propsRadioBox} text={"Pour un proche"} id={1} />
      </View>

      <View style={styles.inputCtn}>
        <InputSecondary
          {...INPUT_FIRSTNAME}
          valid={audit?.valid?.offer?.firstname}
          value={isOffer ? apt.current.offer?.firstname : user.firstname}
          setValue={(t) => setOffer("firstname", t)}
          disabled={!isOffer}
          editable={isOffer === 1}
        />
        <InputSecondary
          {...INPUT_LASTNAME}
          valid={audit?.valid?.offer?.lastname}
          value={isOffer ? apt.current.offer?.lastname : user.lastname}
          setValue={(t) => setOffer("lastname", t)}
          disabled={!isOffer}
          editable={isOffer === 1}
          isSelected={isOffer}
        />
        <InputSecondary
          {...INPUT_PHONE}
          valid={audit?.valid?.offer?.phone}
          value={isOffer ? apt.current.offer?.phone : user.phone}
          setValue={(t) =>
            setOffer("phone", ctrl.onFormat.phone(apt.current.offer?.phone, t))
          }
          disabled={!isOffer}
          editable={isOffer === 1}
        />
      </View>

      <View style={styles.resumeCtn}>
        <Text style={STYLE_GENERAL.sectionH1}>Récapitulatif :</Text>
        <View style={styles.field}>
          <Text style={styles.heKey}>Prestation :</Text>
          <Text style={styles.h2Val} numberOfLines={2}>
            {service.name}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.heKey}>Date :</Text>
          <Text style={styles.h2Val}>
            Le {aptDate.toDateString()} à {aptDate.toTimeString()}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.heKey}>Durée :</Text>
          <Text style={styles.h2Val}>
            {CDate.toTimeString(service.duration)}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.heKey}>Salon :</Text>
          <Text style={styles.h2Val}>{salon.address}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.heKey}>Tarif :</Text>
          <Text style={styles.h2Val}>{service.price}DT</Text>
        </View>
      </View>

      <Primary
        disabled={sending}
        text={sending ? "Envoie..." : "Confirmer la réservation"}
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

  inputCtn: {
    marginHorizontal: 40,
  },

  resumeCtn: {
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

  heKey: {
    fontSize: 18,
    fontWeight: "400",
  },

  h2Val: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    flexWrap: "wrap",
  },
});
