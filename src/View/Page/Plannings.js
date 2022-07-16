import { useEffect, useState } from "react";
import CDate from "../../model/utils/CDate";
import PickerCalendar from "../Componnent/PickerCalendar";
import Page from "../Container/Page";
import Header from "../Parts/Header";
import BookingHeader from "./Booking/BookingHeader";

import Calendar from "model/utils/Calendar";
import { controller } from "model/Main";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import { SwipeablePanel } from "rn-swipeable-panel";
import _ from "lodash";
import Loader from "./Loader";

const Plannings = ({ navigation }) => {
  const [date, setDate] = useState(CDate.today());
  const [salon, setSalon] = useState(undefined);
  const [calendar, setCalendar] = useState(undefined);
  const [schedule, setSchedule] = useState(undefined);
  const [plannings, setPlannings] = useState([]);
  const [selected_plannings, setSelectedPlanning] = useState([]);
  const [staff, setStaff] = useState([]);
  const [selection, setSelection] = useState({});
  const [is_active, setIsActive] = useState(true);

  useEffect(() => {
    setCalendar(new Calendar());
    controller.get.plannings(setPlannings);
  }, []);

  useEffect(() => {
    setSchedule(calendar?.getPlanning(date, plannings));
  }, [calendar, date, plannings]);

  var props_cal_header = { date, setDate, staff, setStaff };

  const pressDay = (day) => {
    setDate(day);
    const date_plannings = plannings.filter((apt) => day.isSameDate(apt.date));
    setSelectedPlanning(date_plannings);
    setIsActive(true);
  };

  if (!plannings) return <Loader />;
  return (
    <Page>
      <Header
        title={"Plannings des réservations"}
        type={"close"}
        navigation={navigation}
      />
      <PickerCalendar
        data={schedule}
        date={date}
        header={<BookingHeader {...props_cal_header} />}
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
          <View key={apt._id} style={styles.ctn_apt}>
            <Text style={styles.apt_h1}>
              {new CDate(apt.date).toTimeString()} - {apt?.service.name}
            </Text>
            <View style={styles.apt_h2}>
              <Text>
                Clients: {apt?.user.firstname} {apt?.user.lastname} - Tél:{" "}
                {apt?.user.phone}
              </Text>
            </View>
          </View>
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,

    // elevation: 5,
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
  },
});
