import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "../Componnent/Header";
import InputField from "../Componnent/InputField";
import ButtonRoundValid from "../Componnent/ButtonRoundValid";
import Page from "./Page";
import Footer from "../Componnent/Footer";
import TextLink from "../Componnent/TextLink";

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
          <ButtonRoundValid
            text={"Se connecter"}
            width={"60%"}
            height={10}
            font_size={20}
          />

          <TextLink
            pad_top={7}
            text={"Mots de passe oubliée"}
            style={{ textDecorationLine: "underline" }}
          />
          <TextLink
            text={"Pas encore client ?"}
            style={{ textDecorationLine: "underline" }}
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
  },
});
