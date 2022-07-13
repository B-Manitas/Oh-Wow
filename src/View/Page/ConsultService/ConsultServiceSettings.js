import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import ToggleLong from "../../Componnent/ToggleLong";
import InputLong from "../../Input/InputLong";
import CheckBoxText from "../../Componnent/CheckBoxText";
import Chevron from "../../Buttons/Chevron";
import Primary from "../../Buttons/Primary";
import { controller as ctrl } from "model/Main";
import CDate from "../../../model/utils/CDate";
import _ from "lodash";

const ConsultService = ({ salons, service, setService, init, setInit }) => {
  const [audit, setAudit] = useState(ctrl.fakeAudit(init));

  const duration = (t) => (typeof t == "number" ? CDate.toTimeString(t) : t);
  const setDur = (t) => setService((p) => ({ ...p, duration: t }));
  const setPrice = (t) => setService((p) => ({ ...p, price: t }));

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.section_h1}>Information Générale :</Text>
          <InputLong
            text={"Nom"}
            placeholder={"Volupta"}
            is_valid={audit.name}
            value={service.name}
            setValue={(t) => setService((p) => ({ ...p, name: t }))}
          />
          <InputLong
            text={"Prix en euro"}
            key_type={"numeric"}
            placeholder={"60"}
            is_valid={audit.price}
            value={service.price.toString()}
            setValue={(t) => ctrl.onFormat.price(t, setPrice)}
          />
          <InputLong
            text={"Durée"}
            placeholder={"1h10"}
            is_valid={audit.duration}
            value={duration(service.duration)}
            setValue={(t) => ctrl.onFormat.time(t, setDur)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.section_h1}>Description :</Text>
          <TextInput
            style={[
              styles.input,
              !audit.description && { borderColor: "#DA573D" },
            ]}
            placeholder={"Cliquer pour ajouter une description..."}
            multiline={true}
            value={service.description}
            onChangeText={(t) => setService((p) => ({ ...p, description: t }))}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.section_h1}>Visibilité :</Text>
          <ToggleLong
            text={"Afficher"}
            value={!service.is_hidden}
            func={(b) => setService((p) => ({ ...p, is_hidden: !b }))}
          />
          <ToggleLong
            text={"Afficher en page d'accueil"}
            value={service.is_trend}
            func={(b) => setService((p) => ({ ...p, is_trend: b }))}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.section_h1}>Disponibile dans les salons :</Text>
          {salons.map((s) => (
            <CheckBoxText key={s._id} text={s.name} flex={1} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.section_h1}>Autres :</Text>
          <Chevron
            text={"Supprimer la prestation"}
            fontWeight={"500"}
            color={"#DA573D"}
            func={() => ctrl.delete.service(service._id, navigation)}
          />
        </View>

        <View style={styles.section}>
          <Primary
            text={"Sauvegarder"}
            is_active={!_.isEqual(service, init)}
            height={10}
            font_size={20}
            func={() => ctrl.onPress.service(service, init, setInit, setAudit)}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConsultService;

const styles = StyleSheet.create({
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
