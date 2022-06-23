import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

import InputPrimary from "../Input/InputPrimary";
import Primary from "../Buttons/Primary";

const ModifyPass = ({ navigation }) => {
  return (
    <Page>
      <Header is_back={true} navigation={navigation} />

      <View style={styles.content_text}>
        <Text style={styles.text_h1}>Modifier votre mot de passe</Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <InputPrimary
          info={"Mot de passe *"}
          plh={"mY%Pa9ss."}
          typeAndroid={"password-new"}
          typeIOS={"newPassword"}
          returnKeyType={"done"}
          maxLength={20}
          keyboardType={"default"}
          secureTextEntry={true}
        />

        <InputPrimary
          info={"Confirmation *"}
          plh={"mY%Pa9ss."}
          typeAndroid={"password"}
          typeIOS={"password"}
          returnKeyType={"done"}
          maxLength={20}
          keyboardType={"default"}
          secureTextEntry={true}
        />

        <View style={styles.content_valid_btn}>
          <Primary
            text={"Sauvegarder"}
            width={"60%"}
            height={10}
            font_size={20}
            func={() => navigation.navigate("Home")}
          />
        </View>
      </View>

      <Footer />
    </Page>
  );
};

export default ModifyPass;

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

  content_valid_btn: {
    justifyContent: "center",
    alignItems: "center",
  },
});
