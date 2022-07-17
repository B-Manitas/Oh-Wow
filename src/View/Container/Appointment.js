import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ICON } from "constants/IMAGES";
import CDate from "../../model/utils/CDate";

const Appointment = ({ data, deleteApt }) => {
  const date = new CDate(data.date);

  return (
    <View style={[styles.container, date.isPast() && { opacity: 0.5 }]}>
      <TouchableOpacity
        style={styles.btn_img}
        onPress={() => deleteApt(data._id)}
      >
        <Image source={ICON.trash} style={styles.img} />
      </TouchableOpacity>

      <Text style={styles.h2}>
        Le {date.toDateString(true)} à {date.toTimeString()}
      </Text>
      <Text style={styles.h1} numberOfLines={1}>
        {data.service}
      </Text>

      <Text style={styles.h3}>Salon : {data.salon}.</Text>
      <Text style={styles.h3}>Esthéticienne : {data.staff}.</Text>
      <Text style={styles.h3}>Prix : {data.price}DT.</Text>

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
    marginHorizontal: 15,
    marginVertical: 5,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#a5a5a5",
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
    flex: 1,
    flexWrap: "wrap",
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
