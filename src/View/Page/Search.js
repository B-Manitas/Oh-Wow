import { View, Text, StyleSheet, FlatList } from "react-native";
import Page from "../Container/Page";
import Header from "../Parts/Header";
import Searchbar from "../Componnent/Searchbar";
import User from "../Container/User";
import { useEffect, useState } from "react";
import { controller } from "model/Main";

const Search = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    controller.get.allUsersWithAccess(setUsers);
  }, []);

  return (
    <Page>
      <Header
        navigation={navigation}
        type={"close"}
        title={"Rechercher un client"}
      />
      <Searchbar />

      <FlatList
        data={users}
        keyExtractor={(item, _) => item._id}
        renderItem={(item) => <User navigation={navigation} data={item.item} />}
      />
    </Page>
  );
};

export default Search;

const styles = StyleSheet.create({});
