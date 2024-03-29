// React imports
import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

// Componnents imports
import FooterSocial from "parts/FooterSocial";
import Header from "parts/Header";
import Button from "buttons/Button";
import Page from "containers/Page";
import BtnPrimary from "buttons/BtnPrimary";
import InputError from "inputs/InputError";
import TextError from "texts/TextError";

// Librarie imports
import { controller as ctrl } from "model/Main";
import { useIsFocused } from "@react-navigation/native";

// Constants imports
import { INPUT_PHONE, INPUT_PASSWORD } from "constants/PROPS";
import { STYLES_LINK } from "constants/STYLES";
import { ERROR_TEXT } from "constants/TEXTS";

const Login = (props) => {
  // Destructure props
  const { navigation: nav } = props;

  // Define componnent state
  const schemaUser = ctrl.schema.login;
  const isFocused = useIsFocused();
  const [send, setSend] = useState(false);
  const [data, setData] = useState(schemaUser);
  const [audit, setAudit] = useState();

  // Reset state page on focus
  useEffect(() => {
    setAudit();
    setData(schemaUser);
  }, [isFocused]);

  // On send
  useEffect(() => {
    setSend(false);
  }, [audit]);

  // Define componnent function
  const strPhone = (phone) => ctrl.onFormat.phone(data.phone, phone);
  const login = () => ctrl.get.connect(data, nav, setAudit, setSend);

  return (
    <Page>
      <Header nav={nav} type="close" />

      <ScrollView contentContainerStyle={styles.container}>
        <TextError visible={audit?.error?.failedLogin}>
          {ERROR_TEXT.failedLogin}
        </TextError>

        <InputError
          {...INPUT_PHONE}
          value={data.phone}
          setValue={(t) => setData((p) => ({ ...p, phone: strPhone(t) }))}
          valid={audit?.valid?.phone}
        />
        <InputError
          {...INPUT_PASSWORD}
          value={data.password}
          setValue={(t) => setData((props) => ({ ...props, password: t }))}
          valid={audit?.valid?.password}
        />

        <View style={styles.buttonsCtn}>
          <BtnPrimary
            text={send ? "Connexion..." : "Se connecter"}
            onPress={login}
            disabled={send}
          />

          <Button
            disabled={send}
            text={"Pas encore client ?"}
            styleText={STYLES_LINK.text}
            onPress={() => ctrl.goTo.signup(nav)}
            noShadow
          />
        </View>
      </ScrollView>

      <FooterSocial />
    </Page>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },

  buttonsCtn: {
    marginHorizontal: -35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
