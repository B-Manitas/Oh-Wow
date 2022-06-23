import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Page from "../Container/Page";
import Header from "../Parts/Header";
import Searchbar from "../Componnent/Searchbar";

const Search = ({ navigation }) => {
  return (
    <Page>
      <Header
        navigation={navigation}
        type={"close"}
        title={"Rechercher un client"}
      />
      <Searchbar />

      <TouchableOpacity style={styles.container}>
        <Text style={styles.h1}>John Doe</Text>
        <Text style={styles.h2}>employé</Text>
      </TouchableOpacity>
    </Page>
  );
};

export default Search;

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
