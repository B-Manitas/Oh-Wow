import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput } from "react-native";
import Chevron from "../Buttons/Chevron";
import ToggleLong from "../Componnent/ToggleLong";

import Page from "../Container/Page";
import DaysCheckBoxList from "../Generator/DaysCheckBoxList";
import Header from "../Parts/Header";

import { controller } from "model/Main";
import InputHours from "../Input/InputHours";

const SettingsApp = ({ navigation }) => {
  var schema = controller.frontend.schemaSalon();

  const [data_init, setDataInit] = useState(schema);
  const [data, setData] = useState(schema);
  const [audit, setAudit] = useState(controller.fakeAudit(schema));

  useEffect(() => {
    controller.get.allSalons(setData, setDataInit);
  }, []);

  return (
    <Page>
      <Header
        func={() =>
          controller.onClose.settingsApp(data, data_init, navigation, setAudit)
        }
        navigation={navigation}
        type={"close"}
        title={"Paramètres de l'applications"}
      />
      <ScrollView style={styles.container}>
        <View style={styles.parts}>
          <Text style={styles.h1}>Jours de fermeture du data</Text>
          <View style={styles.container_days}>
            <DaysCheckBoxList
              value={data.day_off}
              setValue={(v) =>
                setData((p) => ({ ...p, day_off: { ...p.day_off, ...v } }))
              }
            />
          </View>
        </View>

        <View style={styles.parts}>
          <Text style={styles.h1}>Date de fermeture du data</Text>
          <TextInput
            style={[styles.input, !audit.date_off && { borderColor: "red" }]}
            placeholder={"14/07;25/12"}
            value={data.date_off}
            onChangeText={(t) => setData((p) => ({ ...p, date_off: t }))}
          />
        </View>

        <View style={styles.parts}>
          <InputHours
            text={"Horaire du matin"}
            plh_1={"8h00"}
            plh_2={"12h00"}
            value_1={data.morning_opening_hours.toString()}
            value_2={data.morning_closing_hours.toString()}
            func_1={(t) => setData((p) => ({ ...p, morning_opening_hours: t }))}
            func_2={(t) => setData((p) => ({ ...p, morning_closing_hours: t }))}
            isValidFormat_1={audit.morning_opening_hours}
            isValidFormat_2={audit.morning_closing_hours}
          />
          <InputHours
            text={"Horaire de l'après-midi"}
            plh_1={"13h00"}
            plh_2={"18h00"}
            value_1={data.afternoon_opening_hours.toString()}
            value_2={data.afternoon_closing_hours.toString()}
            func_1={(t) =>
              setData((p) => ({ ...p, afternoon_opening_hours: t }))
            }
            func_2={(t) =>
              setData((p) => ({ ...p, afternoon_closing_hours: t }))
            }
            isValidFormat_1={audit.afternoon_opening_hours}
            isValidFormat_2={audit.afternoon_closing_hours}
          />
          <ToggleLong
            text={"Prise de nouveau RDV"}
            value={data.is_opened}
            func={(b) => setData((p) => ({ ...p, is_opened: b }))}
          />
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
    flex: 1,

    elevation: 3,
    backgroundColor: "#fff",
  },
});
