import { View, Text, StyleSheet } from "react-native";
import Page from "../Container/Page";
import TextEdit from "../Input/TextEdit";
import Header from "../Parts/Header";
import ToggleLong from "../Componnent/ToggleLong";
import Chevron from "../Buttons/Chevron";

const Client = () => {
  return (
    <Page>
      <Header type={"back"} title={"Information Client"} />
      <View style={styles.parts}>
        <View style={styles.container_name}>
          <TextEdit size={26} plh={"John"} value={"John"} />
          <TextEdit size={26} plh={"Doe"} value={"Doe"} />
        </View>

        <TextEdit size={16} pre_text={"Tél :"} value={"+216 09.00.00.00.00"} />
        <TextEdit size={16} pre_text={"Mail :"} value={"name@address.com"} />
      </View>

      <View style={styles.parts}>
        <Text style={styles.h1}>Actions</Text>
        <ToggleLong text={"Employer d'un centre"} />
        <ToggleLong text={"Administrateur"} />
        <Chevron text={"Supprimer le compte"} />
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
