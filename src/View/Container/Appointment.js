import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ICON } from "constants/IMAGES";
import CDate from "../../model/utils/CDate";

const Appointment = ({ data }) => {
  const date = new CDate(data.date);

  return (
    <View style={[styles.container, date.isPast() && {opacity: .5}]}>
      <TouchableOpacity style={styles.btn_img}>
        <Image source={ICON.trash} style={styles.img} />
      </TouchableOpacity>

      <View style={styles.ctn_h1}>
        <Text style={styles.h1}>{data.service}</Text>
        <Text style={styles.h2}>
          le {date.toDateString(true)} à {date.toTimeString()}
        </Text>
      </View>

      <Text style={styles.h3}>Salon : {data.salon}.</Text>
      <Text style={styles.h3}>Esthéticienne : {data.staff}.</Text>

      {data.offer && (
        <Text style={styles.h3}>
          Client : {data.offer.firstname} {data.offer.lastname}.
        </Text>
      )}
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

  ctn_h1: {
    flexDirection: "row",
    alignItems: "center",
  },

  h1: {
    fontWeight: "400",
    fontSize: 18,
    marginRight: 5,
    textDecorationLine: "underline",
  },

  h2: {
    fontWeight: "400",
    fontSize: 18,
    textDecorationLine: "underline",
  },

  h3: {
    marginTop: 5,
    fontWeight: "200",
    fontSize: 16,
  },
});
