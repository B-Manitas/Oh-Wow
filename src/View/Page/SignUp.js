import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

import Primary from "../Buttons/Primary";
import Link from "../Buttons/Link";
import InputPrimary from "../Input/InputPrimary";
import CheckBoxText from "../Componnent/CheckBoxText";

import { controller } from "../../Model/Main";

const SignUp = ({ navigation }) => {
  const [is_CGU_accepted, setIsCGUAccepted] = useState(false);
  const [data, setData] = useState(controller.frontend.schemaUser());
  const [valid_format, setValidFormat] = useState(
    controller.frontend.fakeAudit(controller.frontend.schemaUser())
  );

  return (
    <Page>
      <Header is_back={true} navigation={navigation} />

      <ScrollView style={styles.container}>
        <InputPrimary
          info={"Prénom *"}
          plh={"John"}
          typeAndroid={"name-given"}
          typeIOS={"givenName"}
          returnKeyType={"next"}
          maxLength={12}
          keyboardType={"default"}
          secureTextEntry={false}
          onChangeText={(t) => setData({ ...data, firstname: t })}
          value={data["firstname"]}
          isValidFormat={valid_format["firstname"]}
        />
        <InputPrimary
          info={"Nom *"}
          plh={"Doe"}
          typeAndroid={"name-family"}
          typeIOS={"familyName"}
          returnKeyType={"next"}
          maxLength={12}
          keyboardType={"default"}
          secureTextEntry={false}
          onChangeText={(t) => setData({ ...data, lastname: t })}
          value={data["lastname"]}
          isValidFormat={valid_format["lastname"]}
        />
        <InputPrimary
          info={"Mail *"}
          plh={"john@doe.com"}
          typeAndroid={"email"}
          typeIOS={"emailAddress"}
          returnKeyType={"next"}
          maxLength={50}
          keyboardType={"email-address"}
          secureTextEntry={false}
          onChangeText={(t) => setData({ ...data, mail: t })}
          value={data["mail"]}
          isValidFormat={valid_format["mail"]}
        />
        <InputPrimary
          info={"Télephone"}
          plh={"060000000000"}
          typeAndroid={"tel"}
          typeIOS={"telephoneNumber"}
          returnKeyType={"next"}
          maxLength={10}
          keyboardType={"phone-pad"}
          secureTextEntry={false}
          onChangeText={(t) => setData({ ...data, phone: t })}
          value={data["phone"]}
          isValidFormat={valid_format["phone"]}
        />
        <InputPrimary
          info={"Mot de passe *"}
          plh={"mY%Pa9ss."}
          typeAndroid={"password-new"}
          typeIOS={"newPassword"}
          returnKeyType={"done"}
          maxLength={20}
          keyboardType={"default"}
          secureTextEntry={true}
          onChangeText={(t) => setData({ ...data, password: t })}
          value={data["password"]}
          isValidFormat={valid_format["password"]}
        />

        <View style={styles.content_tou}>
          <CheckBoxText
            func={setIsCGUAccepted}
            state={is_CGU_accepted}
            size={30}
            color_bg_active={"#383838"}
          />
          <Text style={styles.text_tou}>
            En poursuivant j'accepte les{" "}
            <Link
              text={"conditions d'utilisations"}
              style_text={styles.text_link}
            />
          </Text>
        </View>

        <View style={styles.content_valid_btn}>
          <Primary
            text={"Créer un compte"}
            width={"60%"}
            height={10}
            font_size={20}
            func={() => controller.signup(data, setValidFormat, navigation)}
            is_active={is_CGU_accepted}
          />

          <Link
            text={"Déja Client ?"}
            pad_top={7}
            style_text={{ textDecorationLine: "underline" }}
            func={() => navigation.navigate("Login")}
          />
        </View>
      </ScrollView>

      <Footer />
    </Page>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  content_field: {
    marginVertical: 20,
    marginHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  content_info: {
    top: -20,
    left: 10,
    borderRadius: 5,
    borderWidth: 2,
    position: "absolute",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    paddingVertical: 5,
  },

  text_info: {
    fontSize: 13,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "600",
  },

  txt_input: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingBottom: 10,
    paddingTop: 15,
    paddingRight: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    fontWeight: "200",
  },

  content_tou: {
    flexDirection: "row",
    marginHorizontal: 40,
    alignItems: "center",
  },

  text_tou: {
    marginHorizontal: 10,
    fontSize: 14,
  },

  content_valid_btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  text_link: {
    color: "#364fc7",
    textDecorationLine: "underline",
    marginBottom: 4,
  },
});
