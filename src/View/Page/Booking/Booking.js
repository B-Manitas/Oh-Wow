import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import Calendar from "../../Componnent/Calendar";
import BookingHeader from "./BookingHeader";
import BookingFooter from "./BookingFooter";

import Calendars from "model/Calendars";

import { controller } from "model/Main";

const Booking = ({ navigation, route }) => {
  const id_user = controller.this_user_data._id;

  const service = route.params.data;
  const [salon, setSalon] = useState(undefined);

  const schema_appointment = controller.frontend.schemaAppointment(id_user);
  const [appointment, setAppointment] = useState(schema_appointment);

  const [date_, setDate_] = useState(Calendars.today());
  const [calendar, setCalendar] = useState(undefined);

  useEffect(() => {
    const setIdSalon = (data) =>
      setAppointment((p) => ({ ...p, id_salon: data._id }));

    setAppointment((p) => ({
      ...p,
      id_service: service._id,
      date: date_.getTime(),
    }));
    controller.get.allSalons(setSalon, setIdSalon);
  }, []);

  useEffect(() => {
    if (salon != undefined)
      setCalendar(Calendars.calendar(date_, salon, service.duration));
  }, [date_.getMonth(), date_.getFullYear(), appointment?.id_staff, salon]);

  const onPressDay = (date) => {
    setDate_(date);
    setAppointment((p) => ({ ...p, date: date.getTime() }));
  };

  const onChangeStaff = (id) => setAppointment((p) => ({ ...p, id_staff: id }));
  const onPressHours = (t) => {
    setAppointment((p) => ({
      ...p,
      date: Calendars.setTime(date_, t).getTime(),
    }));
  };

  if (salon == undefined || calendar == undefined)
    return <Text>Loading data....</Text>;
  else
    return (
      <Page>
        <Header type={"back"} title={service.name} navigation={navigation} />
        <Calendar
          data={calendar}
          date={date_}
          onPressDay={onPressDay}
          header={
            <BookingHeader
              date={date_}
              setDate={setDate_}
              staff={appointment.id_staff}
              setStaff={onChangeStaff}
            />
          }
          footer={
            <BookingFooter
              date={appointment.date}
              calendar={calendar}
              navigation={navigation}
              onPress={(t) => onPressHours(t)}
              data={{ service, appointment, salon }}
            />
          }
        />
      </Page>
    );
};

export default Booking;

const styles = StyleSheet.create({});
