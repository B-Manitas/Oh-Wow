import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import FooterSocial from "../Parts/FooterSocial";

import InputPrimary from "../Input/InputPrimary";
import Primary from "../Buttons/Primary";
import Link from "../Buttons/Link";

import { controller } from "model/Main";
import PAGES from "../../constants/PAGES";
import { PLH } from "constants/TEXTS";
import { INPUT_MAIL, INPUT_PASSWORD } from "../../constants/PROPS";

const Login = ({ navigation }) => {
  const schema = controller.frontend.schemaLogin();
  const [data, setData] = useState(schema);
  const [audit, setAudit] = useState(controller.fakeAudit(schema));
  const [send, setSend] = useState(false);

  useEffect(() => {
    setSend(false);
  }, [audit]);

  return (
    <Page>
      <Header nav={navigation} type="close" />
      <ScrollView contentContainerStyle={styles.container}>
        <InputPrimary
          {...INPUT_MAIL}
          // value={data.mail}
          // onChangeText={(mail) => setData((props) => ({ ...props, mail }))}
          // isValidFormat={audit.mail}
        />
        <InputPrimary
          {...INPUT_PASSWORD}
          // value={data.password}
          // onChangeText={(t) => setData((props) => ({ ...props, password: t }))}
          // isValidFormat={audit.password}
        />

        <View style={styles.content_valid_btn}>
          <Primary
            text={"Se connecter"}
            onPress={() => controller.get.connect(data, navigation, setAudit)}
            disabled={send}
          />

          <Link
            text={"Pas encore client ?"}
            style_text={styles.link}
            func={() => navigation.navigate(PAGES.SIGNUP)}
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

  link: {
    textDecorationLine: "underline",
    marginBottom: 4,
    marginTop: 10,
  },
});
