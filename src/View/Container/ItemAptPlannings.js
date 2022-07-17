import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CDate from "../../model/utils/CDate";
import { ICON } from "constants/IMAGES";

const ItemAptPlannings = ({ apt, deleteApt }) => {
  return (
    <View key={apt._id} style={styles.ctn_apt}>
      <TouchableOpacity
        style={styles.btn_img}
        onPress={() => deleteApt(apt._id)}
      >
        <Image source={ICON.trash} style={styles.img} />
      </TouchableOpacity>

      <Text style={styles.apt_h1}>
        {new CDate(apt.date).toTimeString()} - {apt.service}
      </Text>
      <View style={styles.apt_h2}>
        <Text>
          Clients: {apt.firstname} {apt.lastname} - Tél: {apt.phone}
        </Text>
      </View>
      {apt.offer && (
        <View style={styles.apt_h2}>
          <Text>
            Pour: {apt.offer.firstname} {apt.offer.lastname} - Tél:{" "}
            {apt.offer.phone}
          </Text>
        </View>
      )}
      <View style={styles.apt_h2}>
        <Text>Salon: {apt.salon}</Text>
      </View>
    </View>
  );
};

export default ItemAptPlannings;

const styles = StyleSheet.create({
  ctn_apt: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingRight: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
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

  apt_h1: {
    fontSize: 18,
    fontWeight: "500",
  },

  apt_h2: {
    fontSize: 15,
    fontWeight: "300",
    paddingTop: 5,
  },
});
