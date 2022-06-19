import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

import InputField from "../Componnent/InputField";
import Primary from "../Buttons/Primary";
import Link from "../Buttons/Link";

const Authcode = () => {
  return (
    <Page>
      <Header is_back={true} />

      <View style={styles.content_text}>
        <Text style={styles.text_h1}>Code d'authentification</Text>
        <Text style={styles.text_h2}>
          Saissisez le code reçu dans votre boite mail. Veillez à vérifier vos
          SPAM.
        </Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <InputField
          info={"Code *"}
          plh={"0000000"}
          typeAndroid={"sms-otp"}
          typeIOS={"oneTimeCode"}
          returnKeyType={"done"}
          maxLength={6}
          keyboardType={"number-pad"}
          secureTextEntry={false}
        />

        <View style={styles.content_valid_btn}>
          <Primary
            text={"Valider votre mail"}
            width={"60%"}
            height={10}
            font_size={20}
          />
          <Link
            pad_top={7}
            text={"Envoyer un autre code"}
            style_text={styles.link}
          />
        </View>
      </View>

      <Footer />
    </Page>
  );
};

export default Authcode;

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
  },

  link: {
    color: "#8c8b8b",
  },
});
