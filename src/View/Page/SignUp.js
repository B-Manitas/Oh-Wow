// React imports
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

// Componnent imports
import Page from "../Container/Page";
import Header from "../Parts/Header";
import FooterSocial from "../Parts/FooterSocial";
import Primary from "button/Primary";
import Button from "button/Button";
import InputPrimary from "../Input/InputPrimary";
import CheckBoxText from "../Componnent/CheckBoxText";

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
import { STYLES_LINK } from "../../constants/STYLES";

const SignUp = (props) => {
  // Destructure props
  const { navigation: nav } = props;
  const isFocused = useIsFocused();

  // Define componnent state
  const schema_user = ctrl.frontend.schemaUser();
  const [canSignup, setCanSignup] = useState(false);
  const [send, setSend] = useState(false);
  const [data, setData] = useState(schema_user);
  const [audit, setAudit] = useState(ctrl.fakeAudit(schema_user));

  // Define componnent function
  const setPhone = (t) => setData((p) => ({ ...p, phone: t }));

  // Reset state page on focus
  useEffect(() => {
    setAudit(ctrl.fakeAudit(schema_user));
    setData(schema_user);
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
          <InputPrimary
            {...INPUT_FIRSTNAME}
            value={data.firstname}
            setValue={(t) => setData({ ...data, firstname: t })}
            valid={audit?.valid?.firstname}
            format={ERROR_TEXT.name}
          />
          <InputPrimary
            {...INPUT_LASTNAME}
            setValue={(t) => setData({ ...data, lastname: t })}
            value={data.lastname}
            valid={audit?.valid?.lastname}
            format={ERROR_TEXT.name}
          />
          <InputPrimary
            {...INPUT_PHONE}
            value={data.phone}
            setValue={(t) => ctrl.onFormat.phone(data.phone, t, setPhone)}
            valid={audit?.valid?.phone}
          />
          <InputPrimary
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
              shadow={false}
            />
          </View>

          <Primary
            text={send ? "Enregistrement..." : "Créer un compte"}
            onPress={() => ctrl.add.user(data, nav, setSend, setAudit)}
            disabled={!canSignup || send}
          />

          <Button
            text={"Déja Client ?"}
            styleText={STYLES_LINK.text}
            shadow={false}
            onPress={() => ctrl.goTo.login(nav)}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <FooterSocial />
    </Page>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  ctn: { height: "70%" },

  scrollview: { flexGrow: 1, justifyContent: "center" },

  parts: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 40,
    justifyContent: "center",
  },

  link: {
    textDecorationLine: "underline",
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "500",
  },
});
