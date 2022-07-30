// React imports
import { FlatList, StyleSheet } from "react-native";

// Componnent imports
import CtnAppointment from "containers/CtnAppointment";
import Empty from "componnents/Empty";

const ClientApt = (props) => {
  const { visible, appointments, setApts, client } = props;

  if (!visible) return null;
  return (
    <FlatList
      data={appointments}
      style={styles.container}
      keyExtractor={(item) => item._id}
      renderItem={(item) => (
        <CtnAppointment
          data={{ ...client, ...item.item }}
          setApts={setApts}
          canDelete
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Empty />}
    />
  );
};

export default ClientApt;

const styles = StyleSheet.create({
  container: { top: 60, paddingHorizontal: 25, marginBottom: 50 },
});
