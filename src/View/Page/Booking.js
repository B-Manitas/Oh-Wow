// React import
import React, { useEffect, useMemo, useState } from "react";

// Componnent imports
import Page from "containers/Page";
import Header from "parts/Header";
import BtnPrimary from "buttons/BtnPrimary";
import PickerCalendar from "componnents/PickerCalendar";
import HeaderPicker from "parts/HeaderPicker";
import Loader from "pages/Loader";
import HoursList from "generators/HoursList";

// Libraries imports
import { controller as ctrl } from "model/Main";
import Calendar from "model/utils/Calendar";
import CDate from "model/utils/CDate";
import Utils from "model/utils/Utils";

const Booking = (props) => {
  // Destructure props
  const { navigation: nav, route } = props;
  const service = route.params.data;

  // Define componnent state
  const userID = ctrl.thisUserData._id;

  const [date, setDate] = useState(CDate.today());
  const [planning, setPlanning] = useState();
  const [salon, setSalon] = useState();
  const [apt, setApt] = useState(ctrl.schema.appointment(userID));

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
    ctrl.get.planningStaff(apt.id_staff, setPlanning);
  }, [date.month, date.year, apt.id_staff, apt.id_staff]);

  // Define calendar header props
  const propsCalendarHeader = {
    showStaff: true,
    date,
    setDate,
    staff: apt.id_staff,
    setStaff: (s) => ctrl.onChange.staff(setApt, s),
  };

  // Define calendar footer props
  const propsHoursList = {
    calendar: days,
    date,
    onPress: (hours) => ctrl.onPress.aptHours(setApt, hours, date),
    selected: apt.date,
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
          header={<HeaderPicker {...propsCalendarHeader} />}
          footer={<HoursList {...propsHoursList} />}
        />

        <BtnPrimary
          text="Prendre rendez-vous"
          disabled={apt.date ? apt.date.isZeroTime() : false}
          onPress={() => ctrl.goTo.confirmApt(nav, service, salon, apt)}
        />
      </Page>
    );
};

export default Booking;
