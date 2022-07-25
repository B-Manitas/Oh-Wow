// React imports
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

// Componnent imports
import RadioBox from "../Componnent/RadioBox";
import CtnAppointment from "../Container/CtnAppointment";
import Page from "../Container/Page";
import Header from "../Parts/Header";

// Libraries imports
import { controller as ctrl } from "model/Main";
import Utils from "model/Utils";

const Appointments = (props) => {
  // Destrucuture componnent props
  const { navigation: nav } = props;

  // Define componnent state
  const [page, setPage] = useState(0);
  const [upcoming, setUpcoming] = useState([]);
  const [historic, setHistoric] = useState([]);

  // Define memo state
  const selectedApts = useMemo(() => (!page ? upcoming : historic), [page]);
  const onDelete = useMemo(() => (!page ? setUpcoming : setHistoric), [page]);

  // On load componnent
  useEffect(() => {
    const userID = ctrl.this_user_data._id;
    ctrl.get.userApt(userID, false, setUpcoming);
    ctrl.get.userApt(userID, true, setHistoric);

    return () => Utils.cleanUp(setHistoric, setUpcoming);
  }, []);

  // Define radio box props
  const propsRadioBox = { idSelected: page, onPress: setPage, isFlex: true };

  return (
    <Page>
      <Header text={"Mes rendez-vous"} type={"close"} nav={nav} />
      <View style={styles.pageCtn}>
        <RadioBox {...propsRadioBox} text={"À venir"} id={0} />
        <RadioBox {...propsRadioBox} text={"Historique"} id={1} />
      </View>

      <FlatList
        data={selectedApts}
        renderItem={(i) => (
          <CtnAppointment
            data={{ ...i.item, ...ctrl.this_user_data }}
            setApts={onDelete}
          />
        )}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    </Page>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },

  pageCtn: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
});
