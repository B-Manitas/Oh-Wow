import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
} from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

import InputField from "../Componnent/InputField";
import Primary from "../Buttons/Primary";
import Link from "../Buttons/Link";

const Login = () => {
  return (
    <Page>
      <Header is_back={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <InputField
          info={"Mail *"}
          plh={"john@doe.com"}
          typeAndroid={"email"}
          typeIOS={"emailAddress"}
          returnKeyType={"next"}
          maxLength={50}
          keyboardType={"email-address"}
          secureTextEntry={false}
        />
        <InputField
          info={"Mots de passe *"}
          plh={"mY%Pa9ss."}
          secureTextEntry={true}
          typeAndroid={"password"}
          typeIOS={"password"}
          returnKeyType={"done"}
          maxLength={20}
          keyboardType={"default"}
        />

        <View style={styles.content_valid_btn}>
          <Primary
            text={"Se connecter"}
            width={"60%"}
            height={10}
            font_size={20}
          />

          <Link
            pad_top={7}
            text={"Mots de passe oubliée"}
            style_text={styles.link}
          />
          <Link
            text={"Pas encore client ?"}
            style_text={styles.link}
          />
        </View>
      </ScrollView>

      <Footer />
    </Page>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "70%",
    justifyContent: "center",
  },

  content_valid_btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  link: {
    textDecorationLine: "underline",
    marginBottom: 4
  },
});
