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
  const [plannings, setPlannings] = useState([]);

  const apt_schema = ctrl.frontend.schemaAppointment(id_user);
  const [apt, setApt] = useState(apt_schema);

  const [date, setDate] = useState(Calendars.today());

  useEffect(() => {
    setApt((p) => ({ ...p, id_service: service._id, date: date.getTime() }));
    ctrl.get.allSalons(setSalon, (v) =>
      Utils.setValue(setApt, "id_salon", v._id)
    );
  }, []);

  useEffect(() => {
    setCalendar(
      Calendars.calendar(date, setDate, plannings, salon, service.duration)
    );
    ctrl.get.appointment(apt.id_salon, apt.id_staff, setPlannings);
  }, [date.getMonth(), date.getFullYear(), apt?.id_staff, salon]);

  if (!salon || !calendar) return <Text>Loading data....</Text>;
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
              staff={apt.id_staff}
              setStaff={(s) => ctrl.onPress.aptStaff(setApt, s)}
            />
          }
          footer={
            <BookingFooter
              date={date}
              calendar={calendar}
              navigation={navigation}
              onPress={(h) => ctrl.onPress.aptHours(setApt, h, date)}
              data={{ service, appointment: apt, salon }}
            />
          }
        />
      </Page>
    );
};

export default Booking;

const styles = StyleSheet.create({});
