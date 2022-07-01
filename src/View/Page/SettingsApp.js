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
  
  const [salon, setSalon] = useState(schema);
  const [init_salon, setInitSalon] = useState(schema);
  const [valid_format, setValidFormat] = useState(
    controller.frontend.fakeAudit(schema)
  );

  useEffect(() => {
    controller.getSalon([setSalon, setInitSalon]);
  }, []);

  return (
    <Page>
      <Header
        func={() =>
          controller.onCloseSettingsApp(
            salon,
            init_salon,
            setValidFormat,
            navigation
          )
        }
        navigation={navigation}
        type={"close"}
        title={"Paramètres de l'applications"}
      />
      <ScrollView style={styles.container}>
        <View style={styles.parts}>
          <Text style={styles.h1}>Jours de fermeture du salon</Text>
          <View style={styles.container_days}>
            <DaysCheckBoxList
              value={salon["day_off"]}
              setValue={(v) =>
                setSalon((p) => ({ ...p, day_off: { ...p.day_off, ...v } }))
              }
            />
          </View>
        </View>

        <View style={styles.parts}>
          <Text style={styles.h1}>Date de fermeture du salon</Text>
          <TextInput
            style={[
              styles.input,
              !valid_format["date_off"] && { borderColor: "red" },
            ]}
            placeholder={"14/07;25/12"}
            value={salon["date_off"]}
            onChangeText={(t) => setSalon((p) => ({ ...p, date_off: t }))}
          />
        </View>

        <View style={styles.parts}>
          <InputHours
            text={"Horaire du matin"}
            plh_1={"8h00"}
            plh_2={"12h00"}
            value_1={salon["morning_opening_hours"]}
            value_2={salon["morning_closing_hours"]}
            func_1={(t) =>
              setSalon((p) => ({ ...p, morning_opening_hours: t }))
            }
            func_2={(t) =>
              setSalon((p) => ({ ...p, morning_closing_hours: t }))
            }
            isValidFormat_1={valid_format["morning_opening_hours"]}
            isValidFormat_2={valid_format["morning_closing_hours"]}
          />
          <InputHours
            text={"Horaire de l'après-midi"}
            plh_1={"13h00"}
            plh_2={"18h00"}
            value_1={salon["afternoon_opening_hours"]}
            value_2={salon["afternoon_closing_hours"]}
            func_1={(t) =>
              setSalon((p) => ({ ...p, afternoon_opening_hours: t }))
            }
            func_2={(t) =>
              setSalon((p) => ({ ...p, afternoon_closing_hours: t }))
            }
            isValidFormat_1={valid_format["afternoon_opening_hours"]}
            isValidFormat_2={valid_format["afternoon_closing_hours"]}
          />
          <ToggleLong
            text={"Prise de nouveau RDV"}
            value={salon["is_opened"]}
            func={(b) => setSalon((p) => ({ ...p, is_opened: !b }))}
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
