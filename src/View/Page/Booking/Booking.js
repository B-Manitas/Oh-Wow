// React import
import React, { useEffect, useMemo, useState } from "react";

// Componnent imports
import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import PickerCalendar from "../../Componnent/PickerCalendar";
import PlanningsHeader from "../Plannings/PlanningsHeader";
import BookingFooter from "./BookingFooter";
import Loader from "../Loader";

// Libraries imports
import { controller as ctrl } from "model/Main";
import Calendar from "model/utils/Calendar";
import CDate from "model/utils/CDate";
import Utils from "model/Utils";

const Booking = (props) => {
  // Destructure props
  const { navigation: nav, route } = props;
  const service = route.params.data;

  // Define componnent state
  const userID = ctrl.this_user_data._id;

  const [date, setDate] = useState(CDate.today());
  const [planning, setPlanning] = useState();
  const [salon, setSalon] = useState();
  const [apt, setApt] = useState(ctrl.frontend.schemaAppointment(userID));

  // Define componnent memo
  const calendar = useMemo(() => new Calendar(), []);

  const days = useMemo(
    () =>
      calendar?.getCalendars(date, setDate, planning, salon, service.duration),
    [planning]
  );

  // On load componnent
  useEffect(() => {
    setApt((p) => ({ ...p, id_service: service._id, date: date }));

    // Fetch data salon and set to apt data
    ctrl.get.salon(setSalon, (s) => setApt((p) => ({ ...p, id_salon: s._id })));

    return () => Utils.cleanUp(setSalon, setApt);
  }, []);

  // Fetch planning on change date and apt data
  useEffect(() => {
    ctrl.get.appointment(apt.id_salon, apt.id_staff, setPlanning);
  }, [date.month, date.year, apt.id_staff, apt.id_staff]);

  // Define calendar header props
  const propsCalendarHeader = {
    showStaff: true,
    date,
    setDate,
    staff: apt.id_staff,
    setStaff: (s) => ctrl.onPress.aptStaff(setApt, s),
  };

  // Define calendar footer props
  const propsCalendarFooter = {
    date,
    calendar: days,
    nav,
    onPress: (hours) => ctrl.onPress.aptHours(setApt, hours, date),
    data: {
      service,
      apt: { ...apt, date: apt.date ? apt.date.getTimestamp() : 0 },
      salon,
    },
  };

  if (!salon || !days || !apt) return <Loader />;
  else
    return (
      <Page>
        <Header type={"back"} text={service.name} nav={nav} />
        <PickerCalendar
          data={days}
          date={date}
          onPress={(newDate) => ctrl.onPress.aptDay(setApt, setDate, newDate)}
          header={<PlanningsHeader {...propsCalendarHeader} />}
          footer={<BookingFooter {...propsCalendarFooter} />}
        />
      </Page>
    );
};

export default Booking;
