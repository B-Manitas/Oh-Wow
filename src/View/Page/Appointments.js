import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RadioBox from "../Componnent/RadioBox";
import Appointment from "../Container/Appointment";
import Page from "../Container/Page";
import Header from "../Parts/Header";
import { controller } from "model/Main";

const Appointments = ({ navigation }) => {
  const [id_selected, setIdSelected] = useState(0);

  const [upcoming, setUpcoming] = useState([]);
  const [historic, setHistoric] = useState([]);

  useEffect(() => {
    const user_id = controller.this_user_data._id;
    controller.get.aptUpcoming(user_id, setUpcoming);
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
          text={"Historique"}
          id={1}
          id_selected={id_selected}
          onPress={setIdSelected}
          style={styles.radio}
          style_txt={styles.txt_ratio}
          style_active={styles.ctn_radio_on}
        />
        <RadioBox
          text={"À venir"}
          id={0}
          id_selected={id_selected}
          onPress={setIdSelected}
          style={styles.radio}
          style_txt={styles.txt_ratio}
          style_active={styles.ctn_radio_on}
        />
      </View>

      <FlatList
        style={styles.container}
        data={upcoming}
        renderItem={(item) => <Appointment data={item.item} />}
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
