import { Text, View, StyleSheet } from "react-native";
import Header from "../Componnent/Header";
import InputField from "../Componnent/InputField";
import ButtonRoundValid from "../Componnent/ButtonRoundValid";
import Page from "./Page";
import Footer from "../Componnent/Footer";
import TextLink from "../Componnent/TextLink";

const ModifyPass = () => {
  return (
    <Page>
      <Header is_back={true} />

      <View style={styles.content_text}>
        <Text style={styles.text_h1}>Modifier votre mots de passe</Text>
      </View>

      <View contentContainerStyle={styles.container}>
        <InputField
          info={"Mots de passe *"}
          plh={"mY%Pa9ss."}
          typeAndroid={"password-new"}
          typeIOS={"newPassword"}
          returnKeyType={"done"}
          maxLength={20}
          keyboardType={"default"}
          secureTextEntry={true}
        />

        <InputField
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
          <ButtonRoundValid
            text={"Sauvegarder"}
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
