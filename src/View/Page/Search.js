// React imports
import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

// Componnent imports
import Page from "containers/Page";
import Header from "parts/Header";
import Searchbar from "componnents/Searchbar";
import CtnUser from "containers/CtnUser";
import Empty from "componnents/Empty";

// Libraries imports
import { controller as ctrl } from "model/Main";
import Utils from "model/utils/Utils";

// Constants imports
import { PLH } from "constants/TEXTS";

const Search = (props) => {
  // Destructure props
  const { navigation: nav } = props;

  // Define componnent state
  const isFocused = useIsFocused();
  const [fetch, setFetch] = useState([]);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  // On focus page
  useEffect(() => {
    if (!isFocused) return;

    ctrl.get.allUsersWithFunction(setFetch);

    return () => {
      Utils.cleanUp(setFetch);
    };
  }, [isFocused]);

  // On fetching data
  useEffect(() => {
    if (!isFocused) return;

    setUsers(fetch);

    return () => {
      Utils.cleanUp(setUsers);
    };
  }, [fetch]);

  // On search users
  useEffect(() => {
    setUsers(ctrl.onSearch.users(fetch, query));
  }, [query]);

  return (
    <Page>
      <Header nav={nav} type={"close"} text={"Les utilisateurs"} />

      <Searchbar value={query} setValue={setQuery} plh={PLH.searchUser} />
      <FlatList
        style={styles.container}
        data={users?.filter((u) => u._id != ctrl.thisUserData._id)}
        keyExtractor={(item, _) => item._id}
        renderItem={(item) => <CtnUser nav={nav} user={item.item} />}
        ListEmptyComponent={<Empty />}
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
