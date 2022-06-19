import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import Calendar from "../../Componnent/Calendar";
import Utils from "../../../model/Utils";
import AppointmentHeader from "./AppointmentHeader";
import AppointmentFooter from "./AppointmentFooter";

const Appointment = () => {
  const date = new Date();
  const [select_day, setSelect_day] = useState(date.getDate() + 1);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [calendar, setCalendar] = useState(Utils.days(month, year));

  return (
    <Page>
      <Header type={"back"} title={"RDV - Pose d'ongles (1h)"} />
      <Calendar
        state_day={Utils.dictState(select_day, setSelect_day)}
        header={
          <AppointmentHeader
            month={Utils.dictState(month, setMonth)}
            year={Utils.dictState(year, setYear)}
            calendar={Utils.dictState(calendar, setCalendar)}
          />
        }
        footer={<AppointmentFooter date={new Date(year, month, select_day)} />}
        arr={calendar}
      />
    </Page>
  );
};

export default Appointment;

const styles = StyleSheet.create({});
