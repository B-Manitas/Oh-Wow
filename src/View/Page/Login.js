// React imports
import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

// Componnents imports
import FooterSocial from "../Parts/FooterSocial";
import Header from "../Parts/Header";
import InputPrimary from "../Input/InputPrimary";
import Button from "button/Button";
import Page from "container/Page";
import Primary from "button/Primary";

// Librarie imports
import { controller as ctrl } from "model/Main";
import { useIsFocused } from "@react-navigation/native";

// Constants imports
import { INPUT_MAIL, INPUT_PASSWORD } from "constants/PROPS";
import { STYLES_LINK } from "constants/STYLES";
import COLORS from "constants/COLORS";
import { ERROR_TEXT } from "../../constants/TEXTS";

const Login = (props) => {
  // Destructure props
  const { navigation: nav } = props;

  // Define componnent state
  const schemaUser = ctrl.frontend.schemaLogin();
  const isFocused = useIsFocused();
  const [send, setSend] = useState(false);
  // const [networkError, setNetworkError] = useState(false);
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
  const login = () => ctrl.get.connect(data, nav, setAudit, setSend);

  return (
    <Page>
      <Header nav={nav} type="close" />
      <ScrollView contentContainerStyle={styles.container}>
        {audit?.error?.failedLogin && (
          <Text style={styles.errorLogin}>{ERROR_TEXT.failedLogin}</Text>
        )}

        <InputPrimary
          {...INPUT_MAIL}
          value={data.mail}
          setValue={(mail) => setData((props) => ({ ...props, mail }))}
          valid={audit?.valid?.mail}
        />
        <InputPrimary
          {...INPUT_PASSWORD}
          value={data.password}
          setValue={(t) => setData((props) => ({ ...props, password: t }))}
          valid={audit?.valid?.password}
        />

        <View style={styles.content_valid_btn}>
          <Primary
            text={send ? "Connexion..." : "Se connecter"}
            onPress={login}
            disabled={send}
          />

          <Button
            text={"Pas encore client ?"}
            styleText={STYLES_LINK.text}
            shadow={false}
            onPress={() => ctrl.goTo.signup(nav)}
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
    justifyContent: "center",
  },

  content_valid_btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  errorLogin: {
    color: COLORS.error,
    fontWeight: "600",
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
});
