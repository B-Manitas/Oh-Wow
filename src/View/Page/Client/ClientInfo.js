import { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Chevron from "../../Buttons/Chevron";
import ToggleLong from "../../Componnent/ToggleLong";
import InputLong from "../../Input/InputLong";

import { controller as ctrl } from "model/Main";
import Primary from "../../Buttons/Primary";
import _ from "lodash";

const ClientInfo = ({ data_client, setInit }) => {
  const [client, setClient] = useState(data_client);
  const [audit, setAudit] = useState(ctrl.fakeAudit(data_client));

  const update = (key, v) => setClient((p) => ({ ...p, [key]: v }));

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.section_h1}>Information Générale</Text>
          <InputLong
            text={"Prénom"}
            value={client.firstname}
            setValue={(t) => update("firstname", t)}
            is_valid={audit.firstname}
            placeholder={"Jonn"}
            length={12}
          />
          <InputLong
            text={"Nom"}
            value={client.lastname}
            setValue={(t) => update("lastname", t)}
            is_valid={audit.lastname}
            placeholder={"Doe"}
            length={12}
          />
          <InputLong
            text={"Téléphone"}
            value={client.phone}
            setValue={(t) =>
              update("phone", ctrl.onFormat.phone(client.phone, t))
            }
            is_valid={audit.phone}
            placeholder={"00 00 00 00 00"}
            key_type={"numeric"}
            length={14}
          />
          <InputLong
            text={"E-Mail"}
            value={client.mail}
            setValue={(t) => update("mail", t)}
            is_valid={audit.mail}
            placeholder={"exemple@adresse.com"}
            length={50}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.section_h1}>Gestion des droits</Text>
          <ToggleLong
            text={"Employer"}
            value={client.is_admin || client.id_salon != null}
            setValue={(b) => update("id_salon", b)}
          />
          <ToggleLong
            text={"Administrateur"}
            value={client.is_admin}
            setValue={(b) => update("is_admin", b)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.section_h1}>Autres</Text>
          <Chevron
            text={"Supprimer définitivement le compte"}
            func={() => controller.delete.user(navigation, user)}
            fontWeight={"500"}
            color={"#DA573D"}
          />
        </View>
        <View style={styles.section}>
          <Primary
            text={"Sauvegarder"}
            height={10}
            font_size={20}
            is_active={!_.isEqual(data_client, client)}
            func={() =>
              ctrl.onPress.client(client, data_client, setInit, setAudit)
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ClientInfo;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginBottom: 150,
  },

  section: {
    marginVertical: 15,
    marginHorizontal: 30,
  },

  section_h1: {
    fontSize: 25,
    fontWeight: "500",
    width: "100%",
    borderBottomWidth: 2,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});
