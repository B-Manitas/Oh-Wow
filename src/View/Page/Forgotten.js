import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import FooterSocial from "../Parts/FooterSocial";
import Primary from "../Buttons/Primary";
import InputPrimary from "../Input/InputPrimary";

import { ICON } from "../../constants/IMAGES";

const Forgotten = ({ navigation }) => {
  return (
    <Page>
      <Header img={ICON.back} nav={navigation} />

      <View style={styles.content_text}>
        <Text style={styles.text_h1}>
          Vous avez oubliée votre mot de passe ?
        </Text>
        <Text style={styles.text_h2}>
          Si le compte existe, vous recevrez un code par mail pour modifier
          votre mot de passe.
        </Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <InputPrimary
          info={"Nom *"}
          plh={"Doe"}
          typeAndroid={"name-family"}
          typeIOS={"familyName"}
          returnKeyType={"next"}
          maxLength={12}
          keyboardType={"default"}
          secureTextEntry={false}
        />
        <InputPrimary
          info={"Mail *"}
          plh={"john@doe.com"}
          typeAndroid={"email"}
          typeIOS={"emailAddress"}
          returnKeyType={"done"}
          maxLength={50}
          keyboardType={"email-address"}
          secureTextEntry={false}
        />

        <View style={styles.content_valid_btn}>
          <Primary
            text={"Envoyer un code"}
            width={"60%"}
            height={10}
            font_size={20}
          />
        </View>
      </View>

      <FooterSocial />
    </Page>
  );
};

export default Forgotten;

const styles = StyleSheet.create({
  content_text: {
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  text_h1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
  },

  text_h2: {
    marginTop: 10,
    fontWeight: "300",
    fontSize: 16,
    color: "#8c8b8b",
  },

  content_valid_btn: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
  },
});
