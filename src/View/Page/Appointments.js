import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { APPOINTMENTS } from "../../Constants/DATA";
import Appointment from "../Container/Appointment";
import Page from "../Container/Page";
import Header from "../Parts/Header";

const Appointments = () => {
  return (
    <Page>
      <Header title={"Mes RDV à venir"} type={"close"} />
      <FlatList
        style={styles.container}
        data={APPOINTMENTS}
        renderItem={(item) => <Appointment data={item.item} />}
      />
    </Page>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  h1:{
    fontSize: 20
  }
});
