import { FlatList } from "react-native";
import Appointment from "../../Container/Appointment";

const ClientApt = ({ appointments }) => {
  return (
    <FlatList
      data={appointments}
      keyExtractor={(item) => item._id}
      renderItem={(item) => <Appointment data={item.item} />}
    />
  );
};

export default ClientApt;
