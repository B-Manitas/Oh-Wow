import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import ButtonRoundValid from "../Componnent/ButtonRoundValid";
import CheckBox from "../Componnent/CheckBox";
import ButtonSocial from "../Componnent/ButtonSocial";
import Header from "../Componnent/Header";
import InputField from "../Componnent/InputField";
import TextLink from "../Componnent/TextLink";
import Page from "./Page";
import Footer from "../Componnent/Footer";

const SignUp = () => {
  return (
    <Page>
      <Header is_back={true} />

      <ScrollView style={styles.container}>
        <InputField
          info={"Prénom *"}
          plh={"John"}
          typeAndroid={"name"}
          typeIOS={"name"}
          returnKeyType={"next"}
          maxLength={12}
          keyboardType={"default"}
        />
        <InputField
          info={"Nom *"}
          plh={"Doe"}
          typeAndroid={"name-family"}
          typeIOS={"familyName"}
          returnKeyType={"next"}
          maxLength={12}
          keyboardType={"default"}
        />
        <InputField
          info={"Mail *"}
          plh={"john@doe.com"}
          typeAndroid={"email"}
          typeIOS={"emailAddress"}
          returnKeyType={"next"}
          maxLength={50}
          keyboardType={"email-address"}
        />
        <InputField
          info={"Télephone"}
          plh={"+216 071122334455"}
          typeAndroid={"tel"}
          typeIOS={"telephoneNumber"}
          returnKeyType={"next"}
          maxLength={14}
          keyboardType={"phone-pad"}
        />
        <InputField
          info={"Mots de passe *"}
          plh={"mY%Pa9ss."}
          typeAndroid={"password-new"}
          typeIOS={"newPassword"}
          returnKeyType={"done"}
          maxLength={20}
          keyboardType={"default"}
        />

        <View style={styles.content_tou}>
          <CheckBox />
          <Text style={styles.text_tou}>
            En poursuivant j'accepte les{" "}
            <TextLink text={"conditions d'utilisations"} />
          </Text>
        </View>

        <View style={styles.content_valid_btn}>
          <ButtonRoundValid
            text={"Créer un compte"}
            width={"60%"}
            height={10}
            font_size={20}
          />
          <TouchableOpacity>
            <Text>Déja Client ?</Text>
          </TouchableOpacity>
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
});
