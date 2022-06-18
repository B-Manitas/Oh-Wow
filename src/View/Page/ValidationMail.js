import { Text, View, StyleSheet } from "react-native";
import Header from "../Componnent/Header";
import InputField from "../Componnent/InputField";
import ButtonRoundValid from "../Componnent/ButtonRoundValid";
import Page from "./Page";
import Footer from "../Componnent/Footer";
import TextLink from "../Componnent/TextLink";

const ForgottenPass = () => {
  return (
    <Page>
      <Header is_back={true} />

      <View style={styles.content_text}>
        <Text style={styles.text_h1}>Valider votre addresse mail</Text>
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
          <ButtonRoundValid
            text={"Valider votre mail"}
            width={"60%"}
            height={10}
            font_size={20}
          />
          <TextLink
            pad_top={7}
            text={"Envoyer un autre code"}
            style={{ color: "#8c8b8b" }}
          />
        </View>
      </View>

      <Footer />
    </Page>
  );
};

export default ForgottenPass;

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
