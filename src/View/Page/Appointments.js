import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RadioBox from "../Componnent/RadioBox";
import Appointment from "../Container/Appointment";
import Page from "../Container/Page";
import Header from "../Parts/Header";
import { controller as ctrl } from "model/Main";

const Appointments = ({ navigation }) => {
  const [is_historic, setIsHistoric] = useState(0);

  const [upcoming, setUpcoming] = useState([]);
  const [historic, setHistoric] = useState([]);

  const deleteApt = (id) => {
    ctrl.delete.appointment(id);

    if (!is_historic) setUpcoming((p) => p.filter((item) => item._id != id));
    else setHistoric((p) => p.filter((item) => item._id != id));
  };

  useEffect(() => {
    const user_id = ctrl.this_user_data._id;
    ctrl.get.userApt(user_id, false, setUpcoming);
    ctrl.get.userApt(user_id, true, setHistoric);
  }, []);

  return (
    <Page>
      <Header
        title={"Mes rendez-vous"}
        type={"close"}
        navigation={navigation}
      />
      <View style={styles.ctn_radio}>
        <RadioBox
          text={"À venir"}
          id={0}
          id_selected={is_historic}
          onPress={setIsHistoric}
          style={styles.radio}
          style_txt={styles.txt_ratio}
          style_active={styles.ctn_radio_on}
        />
        <RadioBox
          text={"Historique"}
          id={1}
          id_selected={is_historic}
          onPress={setIsHistoric}
          style={styles.radio}
          style_txt={styles.txt_ratio}
          style_active={styles.ctn_radio_on}
        />
      </View>

      <FlatList
        style={styles.container}
        extraData={is_historic === 1 ? historic : upcoming}
        data={is_historic === 1 ? historic : upcoming}
        renderItem={(item) => (
          <Appointment data={item.item} deleteApt={deleteApt} />
        )}
        keyExtractor={(item) => item._id}
      />
    </Page>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  ctn_radio: {
    flexDirection: "row",
    marginHorizontal: 10,
  },

  radio: {
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    margin: 5,
    borderColor: "#f5f5f5",
  },

  txt_ratio: {
    fontSize: 20,
    fontWeight: "300",
  },

  ctn_radio_on: {
    backgroundColor: "#f5f5f5",
    flex: 2,
    height: 50,
  },
});
