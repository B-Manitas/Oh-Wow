import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import Round from "../../Buttons/Round";
import Calendar from "../../Componnent/Calendar";
import Day from "../../Buttons/Day";
import Utils from "../../../model/Utils";
import AppointmentHeader from "./AppointmentHeader";

const Appointment = () => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [calendar, setCalendar] = useState(Utils.days(month, year));

  return (
    <Page>
      <Header type={"back"} title={"RDV - Pose d'ongles (1h)"} />
      <View style={styles.container}>
        <Calendar
          header={
            <AppointmentHeader
              month={[month, setMonth]}
              year={[year, setYear]}
              calendar={[calendar, setCalendar]}
            />
          }
          arr={calendar}
        />
      </View>
    </Page>
  );
};

export default Appointment;

const styles = StyleSheet.create({});
