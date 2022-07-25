// React imports
import { FlatList, StyleSheet } from "react-native";

// Componnent imports
import CtnAppointment from "container/CtnAppointment";

const ClientApt = (props) => {
  const { visible, appointments, setApts, client } = props;

  if (!visible) return null;
  return (
    <FlatList
      data={appointments}
      style={styles.container}
      keyExtractor={(item) => item._id}
      renderItem={(item) => (
        <CtnAppointment data={{ ...item.item, ...client }} setApts={setApts} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ClientApt;

const styles = StyleSheet.create({
  container: { top: 60, paddingHorizontal: 25, marginBottom: 50 },
});
