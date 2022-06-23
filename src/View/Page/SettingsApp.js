import {
  ScrollView,
  View,
  Pressable,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import Chevron from "../Buttons/Chevron";
import CheckBoxText from "../Componnent/CheckBoxText";
import ToggleLong from "../Componnent/ToggleLong";

import Page from "../Container/Page";
import DaysCheckBoxList from "../Generator/DaysCheckBoxList";
import Header from "../Parts/Header";

const SettingsApp = () => {
  return (
    <Page>
      <Header type={"close"} title={"Paramètres de l'applications"} />
      <ScrollView style={styles.container}>
        <View style={styles.parts}>
          <Text style={styles.h1}>Jours de fermeture du salon</Text>
          <View style={styles.container_days}>
            <DaysCheckBoxList />
          </View>
        </View>

        <View style={styles.parts}>
          <Text style={styles.h1}>Date de fermeture du salon</Text>
          <TextInput style={styles.input} placeholder={"14/07; 25/12"} />
        </View>

        <View style={styles.parts}>
          <ToggleLong state={true} text={"Prise de nouveau RDV"} />
          <Chevron text={"Réinitialiser la base de donnée"} />
          <Chevron text={"Réinitialiser l'état de l'application"} />
        </View>
      </ScrollView>
    </Page>
  );
};

export default SettingsApp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  parts: {
    marginVertical: 20,
    marginHorizontal: 30,
  },

  h1: {
    marginHorizontal: -10,
    fontWeight: "400",
    fontSize: 22,
    paddingBottom: 15,
    textDecorationLine: "underline",
  },

  container_days: {
    flexDirection: "row",
    justifyContent: "center",
  },

  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#fff"
  },
});
