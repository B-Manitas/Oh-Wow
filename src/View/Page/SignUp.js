// React imports
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

// Componnent imports
import Header from "parts/Header";
import FooterSocial from "parts/FooterSocial";
import Page from "containers/Page";
import BtnPrimary from "buttons/BtnPrimary";
import Button from "buttons/Button";
import CheckBoxText from "componnents/CheckBoxText";

// Librarie imports
import { controller as ctrl } from "model/Main";
import { useIsFocused } from "@react-navigation/native";

// Constants imports
import { ERROR_TEXT } from "constants/TEXTS";
import {
  INPUT_FIRSTNAME,
  INPUT_LASTNAME,
  INPUT_PASSWORD,
  INPUT_PHONE,
  KEYBOARD_AVOIDING_VIEW,
} from "constants/PROPS";
import { STYLES_LINK } from "constants/STYLES";
import InputError from "../Input/InputError";

const SignUp = (props) => {
  // Destructure props
  const { navigation: nav } = props;

  // Define componnent state
  const isFocused = useIsFocused();
  const userSchema = ctrl.schema.user;
  const [canSignup, setCanSignup] = useState(false);
  const [send, setSend] = useState(false);
  const [data, setData] = useState(userSchema);
  const [audit, setAudit] = useState();

  // Define componnent function
  const setPhone = (t) => setData((p) => ({ ...p, phone: t }));

  // Reset state page on focus
  useEffect(() => {
    setAudit();
    setData(userSchema);
  }, [isFocused]);

  // On press to sign up
  useEffect(() => {
    setSend(false);
  }, [audit]);

  return (
    <Page>
      <Header type="close" nav={nav} />

      <KeyboardAvoidingView {...KEYBOARD_AVOIDING_VIEW} style={styles.ctn}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollview}
        >
          <InputError
            {...INPUT_FIRSTNAME}
            value={data.firstname}
            setValue={(t) => setData({ ...data, firstname: t })}
            valid={audit?.valid?.firstname}
            format={ERROR_TEXT.name}
          />
          <InputError
            {...INPUT_LASTNAME}
            setValue={(t) => setData({ ...data, lastname: t })}
            value={data.lastname}
            valid={audit?.valid?.lastname}
            format={ERROR_TEXT.name}
          />
          <InputError
            {...INPUT_PHONE}
            value={data.phone}
            setValue={(t) => ctrl.onFormat.phone(data.phone, t, setPhone)}
            valid={audit?.valid?.phone}
          />
          <InputError
            {...INPUT_PASSWORD}
            value={data.password}
            setValue={(t) => setData({ ...data, password: t })}
            valid={audit?.valid?.password}
          />

          <View style={styles.parts}>
            <CheckBoxText onPress={setCanSignup} state={canSignup} />
            <Button
              text={"Accepter les conditions générales d'utilisations"}
              nbLines={2}
              styleText={styles.link}
              noShadow
            />
          </View>

          <View style={styles.buttonCtn}>
            <BtnPrimary
              text={send ? "Enregistrement..." : "Créer un compte"}
              onPress={() => ctrl.add.user(data, nav, setSend, setAudit)}
              disabled={!canSignup || send}
            />

            <Button
              disabled={send}
              text={"Déja Client ?"}
              styleText={STYLES_LINK.text}
              onPress={() => ctrl.goTo.login(nav)}
              noShadow
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <FooterSocial />
    </Page>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  ctn: { height: "70%" },

  scrollview: {
    flexGrow: 1,
    justifyContent: "center",
    width: "80%",
    alignContent: "center",
    alignSelf: "center",
  },

  parts: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
  },

  buttonCtn: {
    marginHorizontal: -30,
  },

  link: {
    textDecorationLine: "underline",
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "500",
  },
});
