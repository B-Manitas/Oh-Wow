import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import Calendar from "../../Componnent/Calendar";
import BookingHeader from "./BookingHeader";
import BookingFooter from "./BookingFooter";

import Calendars from "model/Calendars";

import { controller as ctrl } from "model/Main";
import Utils from "model/Utils";

const Booking = ({ navigation, route }) => {
  const id_user = ctrl.this_user_data._id;

  const service = route.params.data;
  const [salon, setSalon] = useState(undefined);
  const [calendar, setCalendar] = useState(undefined);

  const apt_schema = ctrl.frontend.schemaAppointment(id_user);
  const [appointment, setApt] = useState(apt_schema);

  const [date, setDate] = useState(Calendars.today());

  useEffect(() => {
    setApt((p) => ({ ...p, id_service: service._id, date: date.getTime() }));
    ctrl.get.allSalons(setSalon, (v) => Utils.setValue(setApt, "id_salon", v));
  }, []);

  useEffect(() => {
    setCalendar(Calendars.calendar(date, setDate, salon, service.duration));
  }, [date.getMonth(), date.getFullYear(), appointment?.id_staff, salon]);

  if (salon == undefined || calendar == undefined)
    return <Text>Loading data....</Text>;
  else
    return (
      <Page>
        <Header type={"back"} title={service.name} navigation={navigation} />
        <Calendar
          data={calendar}
          date={date}
          onPressDay={(d) => ctrl.onPress.aptDay(setApt, setDate, d)}
          header={
            <BookingHeader
              date={date}
              setDate={setDate}
              staff={appointment.id_staff}
              setStaff={(s) => ctrl.onPress.aptStaff(setApt, s)}
            />
          }
          footer={
            <BookingFooter
              date={date}
              calendar={calendar}
              navigation={navigation}
              onPress={(h) => ctrl.onPress.aptHours(setApt, h, date)}
              data={{ service, appointment, salon }}
            />
          }
        />
      </Page>
    );
};

export default Booking;

const styles = StyleSheet.create({});
