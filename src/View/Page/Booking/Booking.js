import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import PickerCalendar from "../../Componnent/PickerCalendar";
import BookingHeader from "./BookingHeader";
import BookingFooter from "./BookingFooter";

import Calendar from "model/utils/Calendar";

import { controller as ctrl } from "model/Main";
import Utils from "model/Utils";
import CDate from "model/utils/CDate";

const Booking = ({ navigation, route }) => {
  const id_user = ctrl.this_user_data._id;
  const service = route.params.data;

  const [calendar, setCalendar] = useState(undefined);

  const [salon, setSalon] = useState(undefined);
  const [schedule, setSchedule] = useState(undefined);
  const [plannings, setPlannings] = useState([]);

  const [apt, setApt] = useState(ctrl.frontend.schemaAppointment(id_user));
  const [date, setDate] = useState(CDate.today());

  const setAptSalon = (s) => setApt((p) => ({ ...p, id_salon: s._id }));
  const getCalendars = () =>
    calendar?.getCalendars(date, setDate, plannings, salon, service.duration);

  useEffect(() => {
    setCalendar(new Calendar());
    setApt((p) => ({ ...p, id_service: service._id, date: date }));
    ctrl.get.salon(setSalon, setAptSalon);
  }, []);

  useEffect(() => {
    setSchedule(getCalendars);
  }, [salon, plannings]);

  useEffect(() => {
    ctrl.get.appointment(apt.id_salon, apt.id_staff, setPlannings);
  }, [
    date.getMonth(),
    date.getFullYear(),
    apt.id_salon,
    apt.id_service,
    apt.id_staff,
  ]);

  console.log(schedule);

  if (!salon || !schedule || !apt) return <Text>Loading data....</Text>;
  else
    return (
      <Page>
        <Header type={"back"} title={service.name} navigation={navigation} />
        <PickerCalendar
          data={schedule}
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
              calendar={schedule}
              navigation={navigation}
              onPress={(h) => ctrl.onPress.aptHours(setApt, h, date)}
              data={{
                service,
                apt: { ...apt, date: apt.date.getTimestamp() },
                salon,
              }}
            />
          }
        />
      </Page>
    );
};

export default Booking;

const styles = StyleSheet.create({});
