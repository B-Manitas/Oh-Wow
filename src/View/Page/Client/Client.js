import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import { controller } from "model/Main";
import RadioBox from "../../Componnent/RadioBox";
import ClientInfo from "./ClientInfo";
import ClientApt from "./ClientApt";

const Client = ({ navigation, route }) => {
  const [client, setClient] = useState(route.params.data);
  const [page, setPage] = useState(0);
  const [apts, setApts] = useState(undefined);

  useEffect(() => {
    controller.get.userAllApts(client._id, setApts);
  }, []);

  return (
    <Page>
      <Header
        type={"back"}
        title={`${client.firstname} ${client.lastname}`}
        navigation={navigation}
      />
      <View style={styles.ctn_nav_button}>
        <RadioBox
          id={0}
          id_selected={page}
          onPress={setPage}
          text={"Paramètres"}
          style={styles.radio}
          style_txt={styles.txt_radio}
          style_active={styles.radio_on}
        />
        <RadioBox
          id={1}
          id_selected={page}
          onPress={setPage}
          text={"Réservations"}
          style={styles.radio}
          style_txt={styles.txt_radio}
          style_active={styles.radio_on}
        />
      </View>

      {page ? (
        <ClientApt appointments={apts} />
      ) : (
        <ClientInfo data_client={client} setInit={setClient} />
      )}
    </Page>
  );
};

export default Client;

const styles = StyleSheet.create({
  ctn_nav_button: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginBottom: 10
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
  },

  txt_radio: {
    fontSize: 20,
    fontWeight: "300",
  },

  radio_on: {
    backgroundColor: "#f5f5f5",
    flex: 2,
  },
});
