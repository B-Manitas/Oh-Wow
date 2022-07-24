import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import HeaderSave from "../../Parts/HeaderSave";
import RadioBox from "../../Componnent/RadioBox";
import ClientInfo from "./ClientInfo";
import ClientApt from "./ClientApt";

import { controller as ctrl } from "model/Main";

import { STYLES_SHADOW } from "constants/STYLES";
import _ from "lodash";
import CheckBoxText from "../../Componnent/CheckBoxText";

const Client = (props) => {
  // Destructure componnent props
  const { navigation: nav, route } = props;

  // Define componnent states
  const [initClient, setInitClient] = useState(route.params.data);
  const [client, setClient] = useState(route.params.data);
  const [page, setPage] = useState(0);
  const [apts, setApts] = useState(undefined);
  const [audit, setAudit] = useState();
  const [saving, setSaving] = useState(false);
  const [salon, setSalon] = useState();

  // Define componnent functions
  const close = () => ctrl.goTo.back(nav);
  const save = () =>
    ctrl.onPress.client(initClient, client, setInitClient, setAudit, setSaving);

  // On load componnent
  useEffect(() => {
    ctrl.get.userAllApts(client._id, setApts);
    ctrl.get.salon(setSalon);
  }, []);

  // After saving
  useEffect(() => {
    setSaving(false);
  }, [audit]);

  return (
    <Page>
      <HeaderSave
        canSave={page === 0 && !_.isEqual(initClient, client)}
        onClose={close}
        onSave={save}
        saving={saving}
        isBack
      />

      <View style={styles.navigationCtn}>
        <RadioBox
          text={`${client.firstname} ${client.lastname}`}
          id={0}
          idSelected={page}
          onPress={setPage}
          disabled={saving}
          isFlex
        />
        <RadioBox
          text={"Réservations"}
          id={1}
          idSelected={page}
          onPress={setPage}
          disabled={saving}
          isFlex
        />
      </View>

      <ClientInfo
        visible={page == 0}
        client={client}
        setClient={setClient}
        salon={salon}
        audit={audit}
      />
      <ClientApt visible={page == 1} appointments={apts} />
    </Page>
  );
};

export default Client;

const styles = StyleSheet.create({
  navigationCtn: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    top: 60,
    backgroundColor: "#fff",
    width: "100%",
  },

  parts: {
    marginHorizontal: 30,
    marginVertical: 20,
  },

  container_name: {
    flexDirection: "row",
  },

  h1: {
    fontSize: 26,
    marginLeft: 10,
  },

  radio: {
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    margin: 2,
    borderColor: "#f5f5f5",
    marginHorizontal: 5,
  },

  txt_radio: {
    fontSize: 20,
    fontWeight: "300",
  },

  radio_on: {
    backgroundColor: "#f5f5f5",
    // flex: 2,
  },
});
