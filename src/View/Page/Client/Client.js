import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Page from "../../Container/Page";
import HeaderSave from "../../Parts/HeaderSave";
import RadioBox from "../../Componnent/RadioBox";
import ClientInfo from "./ClientInfo";
import ClientApt from "./ClientApt";

import { controller as ctrl } from "model/Main";

import _ from "lodash";

const Client = (props) => {
  // Destructure componnent props
  const { navigation: nav, route } = props;

  // Define componnent states
  const [initClient, setInitClient] = useState(route.params.data);
  const [client, setClient] = useState(route.params.data);
  const [page, setPage] = useState(0);
  const [apts, setApts] = useState();
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
      <ClientApt visible={page == 1} appointments={apts} client={initClient} />
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
});
