import { View, Text, StyleSheet } from "react-native";
import Page from "../Container/Page";
import TextEdit from "../Input/TextEdit";
import Header from "../Parts/Header";
import ToggleLong from "../Componnent/ToggleLong";
import Chevron from "../Buttons/Chevron";
import { useEffect, useState } from "react";
import { controller } from "model/Main";

const Client = ({ navigation, route }) => {
  const data_init = route.params.data;
  const [data, setData] = useState(data_init);
  const [audit, setAudit] = useState(controller.fakeAudit(data));
  const [salon, setSalon] = useState([]);

  useEffect(() => {
    controller.get.salon(setSalon);
  }, []);

  return (
    <Page>
      <Header
        type={"back"}
        title={"Information Client"}
        navigation={navigation}
        func={() =>
          controller.onClose.client(data, data_init, navigation, setAudit)
        }
      />
      <View style={styles.parts}>
        <View style={styles.container_name}>
          <TextEdit
            size={26}
            plh={"Firstname"}
            value={data.firstname}
            setValue={(t) => setData((p) => ({ ...p, firstname: t }))}
            isValidFormat={audit.firstname}
          />
          <TextEdit
            size={26}
            plh={"LASTNAME"}
            value={data.lastname}
            setValue={(t) => setData((p) => ({ ...p, lastname: t }))}
            isValidFormat={audit.lastname}
          />
        </View>

        <TextEdit
          size={16}
          pre_text={"Tél :"}
          value={data.phone}
          plh={"0600000000"}
          setValue={(t) => setData((p) => ({ ...p, phone: t }))}
          isValidFormat={audit.phone}
        />
        <TextEdit
          size={16}
          pre_text={"Mail :"}
          plh={"address@example.com"}
          value={data.mail}
          setValue={(t) => setData((p) => ({ ...p, mail: t }))}
          isValidFormat={audit.mail}
        />
      </View>

      <View style={styles.parts}>
        <Text style={styles.h1}>Actions</Text>
        <ToggleLong
          text={"Employer"}
          value={data.is_admin || data.id_salon != null}
          func={(b) =>
            setData((p) => ({ ...p, id_salon: b ? salon._id : null }))
          }
        />
        <ToggleLong
          text={"Administrateur"}
          value={data.is_admin}
          func={(b) =>
            setData((p) => ({
              ...p,
              id_salon: b ? salon._id : null,
              is_admin: b,
            }))
          }
        />
        <Chevron
          text={"Supprimer le compte"}
          func={() => controller.delete.user(navigation, user)}
        />
      </View>
    </Page>
  );
};

export default Client;

const styles = StyleSheet.create({
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
});
