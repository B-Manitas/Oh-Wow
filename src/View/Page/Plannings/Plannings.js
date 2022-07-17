import { useEffect, useState } from "react";
import CDate from "../../../model/utils/CDate";
import PickerCalendar from "../../Componnent/PickerCalendar";
import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import BookingHeader from "../Booking/BookingHeader";

import Calendar from "model/utils/Calendar";
import { controller as ctrl } from "model/Main";
import { StyleSheet, Text, View } from "react-native";
import { SwipeablePanel } from "rn-swipeable-panel";
import _ from "lodash";
import PlanningsHeader from "./PlanningsHeader";
import Loader from "../Loader";
import ItemAptPlannings from "../../Container/ItemAptPlannings";

const Plannings = ({ navigation }) => {
  const [date, setDate] = useState(CDate.today());
  const [calendar, setCalendar] = useState();
  const [schedule, setSchedule] = useState(undefined);
  const [plannings, setPlannings] = useState([]);
  const [selected_plannings, setSelectedPlanning] = useState([]);
  const [staff, setStaff] = useState(ctrl.this_user_data._id);
  const [is_active, setIsActive] = useState(false);

  useEffect(() => {
    setCalendar(new Calendar());
  }, []);

  useEffect(() => {
    const date_str = date.getFirstDate().getTimestamp();
    const date_end = date.getLastDate().getTimestamp();

    if (ctrl.this_is_staff) setStaff(ctrl.this_user_data._id);
    ctrl.get.plannings(staff, date_str, date_end, setPlannings);
  }, [staff]);

  useEffect(() => {
    setSchedule(calendar?.getPlanning(date, plannings));
  }, [calendar, date, plannings]);

  var props_cal_header = { date, setDate, staff, setStaff, all_staff: true };

  const pressDay = (day) => {
    setDate(day);
    const date_plannings = plannings.filter((apt) => day.isSameDate(apt.date));
    setSelectedPlanning(date_plannings);
    setIsActive(true);
  };

  const deleteApt = (id) => {
    ctrl.delete.appointment(id);
    setPlannings((p) => p.filter((item) => item._id != id));
    setSelectedPlanning((p) => p.filter((item) => item._id != id));
  };

  if (!plannings) return <Loader />;
  return (
    <Page>
      <Header
        title={"Planning des réservations"}
        type={"close"}
        navigation={navigation}
      />
      <PickerCalendar
        data={schedule}
        date={date}
        header={<PlanningsHeader {...props_cal_header} />}
        onPressDay={pressDay}
      />
      <SwipeablePanel
        showCloseButton={false}
        isActive={is_active}
        onClose={() => setIsActive(false)}
        allowTouchOutside={true}
        style={styles.panel}
      >
        <Text style={styles.panel_h1}>
          Le planning du {date.toDateString()}
        </Text>

        {selected_plannings.map((apt) => (
          <ItemAptPlannings key={apt._id} apt={apt} deleteApt={deleteApt} />
        ))}
      </SwipeablePanel>
    </Page>
  );
};

export default Plannings;

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#c3c3c3",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  panel_h1: {
    fontSize: 22,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  ctn_apt: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#c3c3c3",
    borderWidth: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  apt_h1: {
    fontSize: 18,
    fontWeight: "500",
  },

  apt_h2: {
    fontSize: 15,
    fontWeight: "300",
    paddingTop: 5,
  },
});
