import { FlatList, StyleSheet } from "react-native";
import Appointment from "../Container/Appointment";
import Page from "../Container/Page";
import Header from "../Parts/Header";

const Appointments = ({ navigation }) => {
  return (
    <Page>
      <Header
        title={"Mes RDV à venir"}
        type={"close"}
        navigation={navigation}
      />
      <FlatList
        style={styles.container}
        data={[]}
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

  h1: {
    fontSize: 20,
  },
});
