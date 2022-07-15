import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { controller } from "model/Main";

const User = ({ navigation, data }) => {
  const status = () => {
    if (data.is_admin) return "admin";
    else if (data.id_salon != null) return "employé";
    else return "";
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => controller.navigation.searchToUser(navigation, data)}
    >
      <Text style={styles.h1}>
        {data.firstname} {data.lastname}
      </Text>
      <Text style={styles.h2}>{status()}</Text>
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
    borderWidth: 2,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: "#fff",
    borderColor: "#f5f5f5",
  },

  h1: {
    fontWeight: "500",
    fontSize: 20,
    color: "#383838",
  },

  h2: {
    fontWeight: "300",
    fontSize: 16,
    marginLeft: 10,
    position: "absolute",
    right: 10,
  },
});
