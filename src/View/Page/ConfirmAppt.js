import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Primary from "../Buttons/Primary";
import RadioBox from "../Componnent/RadioBox";

import Page from "../Container/Page";
import Secondary from "../Input/InputSecondary";
import Header from "../Parts/Header";

const ConfirmAppt = () => {
  const [box_selected, setBox_selected] = useState(0);

  return (
    <Page>
      <Header title={"Validation du RDV"} type={"back"} />
      <View style={styles.container}>
        <Text style={styles.text_offer}>Prendre un RDV pour :</Text>

        <View style={styles.container_offer}>
          <View style={styles.container_radio}>
            <RadioBox
              id_selected={box_selected}
              id={0}
              onPress={setBox_selected}
            />
            <Text style={styles.text_radio}>Moi</Text>
          </View>
          <View style={styles.container_radio}>
            <RadioBox
              id_selected={box_selected}
              id={1}
              onPress={setBox_selected}
            />
            <Text style={styles.text_radio}>Un proche</Text>
          </View>

          <View style={styles.container_input}>
            <Secondary
              disabled={box_selected == 0}
              plh={"Nom: Maria"}
              info={"Prénom *"}
              typeAndroid={"name"}
              typeIOS={"name"}
              returnKeyType={"next"}
              maxLength={20}
              keyboardType={"default"}
            />
            <Secondary
              disabled={box_selected == 0}
              plh={"Tél: +216 00.00.00.00.00"}
              typeAndroid={"tel"}
              typeIOS={"telephoneNumber"}
              returnKeyType={"done"}
              maxLength={14}
              keyboardType={"phone-pad"}
              secureTextEntry={false}
            />
          </View>
        </View>

        <View style={styles.container_resume}>
          <Text style={styles.text_resume}>Prestation: Pose d'ongles</Text>
          <Text style={styles.text_resume}>Durée: 1h</Text>
          <Text style={styles.text_resume}>Tarifs: 20€</Text>
          <Text style={styles.text_resume}>Esthéticienne: Indéfini</Text>
        </View>

        <Primary
          text={"Valider le RDV le 13/03 à 12h"}
          height={10}
          font_size={18}
          style={styles.button_appt}
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
