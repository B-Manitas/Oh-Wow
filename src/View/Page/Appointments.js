// React imports
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

// Componnent imports
import RadioBox from "componnents/RadioBox";
import CtnAppointment from "containers/CtnAppointment";
import Page from "containers/Page";
import Header from "parts/Header";
import Empty from "componnents/Empty";

// Libraries imports
import { controller as ctrl } from "model/Main";
import Utils from "model/utils/Utils";

const Appointments = (props) => {
  // Destrucuture componnent props
  const { navigation: nav } = props;

  // Define componnent state
  const [page, setPage] = useState(0);
  const [upcoming, setUpcoming] = useState([]);
  const [historic, setHistoric] = useState([]);

  // Define memo state
  const onDelete = useMemo(() => (!page ? setUpcoming : setHistoric), [page]);
  const selectedApts = useMemo(
    () => (!page ? upcoming : historic),
    [page, upcoming, historic]
  );

  // On load componnent
  useEffect(() => {
    const userID = ctrl.thisUserData._id;
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
            data={{ ...ctrl.thisUserData, ...i.item }}
            setApts={onDelete}
            canDelete
          />
        )}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        ListEmptyComponent={<Empty />}
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
