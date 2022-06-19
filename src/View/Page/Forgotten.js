import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";
import Primary from "../Buttons/Primary";
import InputField from "../Componnent/InputField";

import { ICON } from "../../Constants/IMAGES";

const Forgotten = () => {
  return (
    <Page>
      <Header img={ICON.back} />

      <View style={styles.content_text}>
        <Text style={styles.text_h1}>
          Vous avez oubliée votre mots de passe ?
        </Text>
        <Text style={styles.text_h2}>
          Si le compte existe, vous recevrez un code par mail pour modifier
          votre mots de passe.
        </Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <InputField
          info={"Nom *"}
          plh={"Doe"}
          typeAndroid={"name-family"}
          typeIOS={"familyName"}
          returnKeyType={"next"}
          maxLength={12}
          keyboardType={"default"}
          secureTextEntry={false}
        />
        <InputField
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

      <Footer />
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
