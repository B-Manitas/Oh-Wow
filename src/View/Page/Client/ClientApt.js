import { FlatList, StyleSheet } from "react-native";
import Appointment from "../../Container/Appointment";

const ClientApt = (props) => {
  const { visible, appointments } = props;

  if (visible) return null;
  return (
    <FlatList
      data={appointments}
      style={styles.container}
      keyExtractor={(item) => item._id}
      renderItem={(item) => <Appointment data={item.item} />}
    />
  );
};

export default ClientApt;

const styles = StyleSheet.create({
  container: { top: 60 },
});
