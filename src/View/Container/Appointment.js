import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SERVICES } from "../../Constants/DATA";
import { ICON } from "../../Constants/IMAGES";

const Appointment = ({ data }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn_img}>
        <Image source={ICON.trash} style={styles.img} />
      </TouchableOpacity>

      <Text style={styles.h1}>{SERVICES[data.id_appt].name}</Text>
      <Text style={styles.h2}>
        Le {data.date} de {data.hours}h à {data.hours}h
        {SERVICES[data.id_appt].duration}.
      </Text>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
  },

  btn_img: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 5,
  },

  img: {
    width: 20,
    height: 20,
  },

  h1: {
    fontWeight: "400",
    fontSize: 18,
  },

  h2: {
    marginTop: 5,
    fontWeight: "200",
    fontSize: 16,
  },
});
