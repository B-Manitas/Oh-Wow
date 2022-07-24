import { View, Text, StyleSheet, FlatList } from "react-native";
import Page from "../Container/Page";
import Header from "../Parts/Header";
import Searchbar from "../Componnent/Searchbar";
import CtnUser from "../Container/CtnUser";
import { useEffect, useState } from "react";
import { controller } from "model/Main";
import { PLH } from "../../constants/TEXTS";

const Search = (props) => {
  const { navigation: nav } = props;

  const [fetch, setFetch] = useState([]);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    controller.get.allUsersWithFunction(setFetch);
  }, []);

  useEffect(() => {
    setUsers(fetch);
  }, [fetch]);

  const contains = (user, query) => {
    const query_formatted = query.toLowerCase();

    return (
      user.firstname.toLowerCase().includes(query_formatted) ||
      user.lastname.toLowerCase().includes(query_formatted) ||
      user.phone.toLowerCase().includes(query_formatted) ||
      user.mail.toLowerCase().includes(query_formatted) ||
      ("administrateur".includes(query_formatted) && user.is_admin) ||
      ("employé".includes(query_formatted) &&
        user.id_salon != "" &&
        !user.is_admin)
    );
  };

  const search = (query) => {
    if (query != "") setUsers(fetch.filter((u) => contains(u, query)));
    else setUsers(fetch);
    setQuery(query);
  };

  return (
    <Page>
      <Header nav={nav} type={"close"} text={"Les utilisateurs"} />

      <Searchbar value={query} setValue={search} plh={PLH.searchUser} />
      <FlatList
        style={styles.container}
        data={users}
        keyExtractor={(item, _) => item._id}
        renderItem={(item) => <CtnUser nav={nav} user={item.item} />}
      />
    </Page>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
