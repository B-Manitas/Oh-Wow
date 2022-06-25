import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import Calendar from "../../Componnent/Calendar";
import BookingHeader from "./BookingHeader";
import BookingFooter from "./BookingFooter";

import Utils from "../../../Model/Utils";
import Calendars from "../../../Model/Calendars";

const Booking = ({ navigation }) => {
  const date = new Date();
  const [select_day, setSelect_day] = useState(date.getDate() + 1);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [calendar, setCalendar] = useState(Calendars.calendar(year, month + 1));

  return (
    <Page>
      <Header
        type={"back"}
        title={"RDV - Pose d'ongles (1h)"}
        navigation={navigation}
      />
      <Calendar
        state_day={Utils.dictState(select_day, setSelect_day)}
        header={
          <BookingHeader
            month={Utils.dictState(month, setMonth)}
            year={Utils.dictState(year, setYear)}
            calendar={Utils.dictState(calendar, setCalendar)}
          />
        }
        footer={<BookingFooter date={new Date(year, month, select_day)} />}
        arr={calendar}
      />
    </Page>
  );
};

export default Booking;

const styles = StyleSheet.create({});
