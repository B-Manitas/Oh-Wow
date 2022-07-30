// React imports
import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { SwipeablePanel } from "rn-swipeable-panel";

// Componnent imports
import Page from "containers/Page";
import CtnAppointment from "containers/CtnAppointment";
import Header from "parts/Header";
import HeaderPicker from "parts/HeaderPicker";
import PickerCalendar from "componnents/PickerCalendar";
import Loader from "./Loader";

// Libraries imports
import _ from "lodash";
import { controller as ctrl } from "model/Main";
import CDate from "model/utils/CDate";
import Calendar from "model/utils/Calendar";

// Constants imports
import COLORS from "constants/COLORS";

const Plannings = ({ navigation }) => {
  // Define componnent state
  const [date, setDate] = useState(CDate.today());
  const [plannings, setPlannings] = useState();
  const [staff, setStaff] = useState(ctrl.thisUserData._id);
  const [showingPanel, setShowingPanel] = useState(false);
  const strH1 = date.isToday() ? "d'aujourd'hui" : `du ${date.toDateString()}`;

  // Define componnent memo state
  const calendar = useMemo(() => new Calendar(), []);

  const days = useMemo(
    () => calendar.getPlanning(date, plannings),
    [date, plannings]
  );

  const selectedPlanning = useMemo(
    () => plannings?.filter((apt) => date.isSameDate(apt.date)),
    [date, plannings]
  );

  // Fetch plannings on change staff
  useEffect(() => {
    const beginDate = date.getFirstDate().getTimestamp();
    const endDate = date.getLastDate().getTimestamp();
    ctrl.get.plannings(staff, beginDate, endDate, setPlannings);

    return () => {
      setPlannings([]);
    };
  }, [staff, date.month, date.year]);

  // Define the planning header props of the calendar picker componnent
  const propsPlanningsHeader = {
    date,
    setDate,
    staff,
    setStaff,
    allOption: true,
    showStaff: ctrl.thisIsAdmin(),
  };

  if (plannings === undefined) return <Loader />;
  return (
    <Page>
      <Header text={"Les réservations"} type={"close"} nav={navigation} />
      <PickerCalendar
        isSelected={showingPanel}
        data={days}
        date={date}
        header={<HeaderPicker {...propsPlanningsHeader} />}
        onPress={(day) =>
          ctrl.onPress.planningDay(day, setDate, setShowingPanel)
        }
      />

      <Text style={styles.statText}>
        {plannings.length} réservation{plannings.length > 1 ? "s" : ""} ce
        mois-ci.
      </Text>

      <Text style={styles.infoText}>
        Appuyer sur un jour pour afficher les réservations.
      </Text>

      <SwipeablePanel
        showCloseButton={false}
        isActive={showingPanel}
        onClose={() => setShowingPanel(false)}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        allowTouchOutside
        style={styles.panel}
      >
        <Text style={styles.h1Panel}>Le planning {strH1}</Text>

        {selectedPlanning.map((apt) => (
          <CtnAppointment
            key={apt._id}
            data={apt}
            setApts={setPlannings}
            canDelete
            showComment
          />
        ))}
      </SwipeablePanel>
    </Page>
  );
};

export default Plannings;

const styles = StyleSheet.create({
  panel: {
    height: Dimensions.get("screen").height - 150,
    width: Dimensions.get("screen").width - 20,
    borderWidth: 3,
    borderColor: COLORS.gray,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },

  h1Panel: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  statText: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 20,
    color: COLORS.darkGray,
    marginBottom: 30,
    fontWeight: "300",
  },

  infoText: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 20,
    color: COLORS.darkGray,
    marginBottom: 30,
    fontWeight: "300",
  },
});
