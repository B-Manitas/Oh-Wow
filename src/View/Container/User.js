import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { controller } from "model/Main";

const User = ({ navigation, data }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => controller.navigation.searchToUser(navigation, data)}
    >
      <Text style={styles.h1}>
        {data.firstname} {data.lastname}
      </Text>
      <Text style={styles.h2}>{data.access}</Text>
    </TouchableOpacity>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
  },

  h1: {
    fontWeight: "500",
    fontSize: 20,
  },

  h2: {
    fontWeight: "300",
    fontSize: 16,
    marginLeft: 10,
    position: "absolute",
    right: 10,
  },
});
