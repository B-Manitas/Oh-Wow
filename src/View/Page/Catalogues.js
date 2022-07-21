// React imports
import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

// Componnents imports
// import Absolute from "buttons/Absolute";
import Button from "button/Button";
import Footer from "../Parts/Footer";
import Header from "../Parts/Header";
import Page from "../Container/Page";
import Searchbar from "../Componnent/Searchbar";
import ItemService from "../Container/Service/ItemService";

// Model imports
import { controller as ctrl } from "model/Main";

// Contants imports
import { PLH } from "../../constants/TEXTS";
import { useIsFocused } from "@react-navigation/native";
import Utils from "../../model/Utils";

const Catalogues = (...props) => {
  const [{ navigation: nav }] = props;
  const isFocused = useIsFocused();

  // Define componnent state
  const [isAdmin, setAdmin] = useState(ctrl.this_is_admin());
  const [services, setService] = useState();
  const [refreshing, setRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const [fetch, setFetch] = useState([]);

  // On focus page
  useEffect(() => {
    ctrl.get.allServices(setRefresh, setFetch, setService);
    setAdmin(ctrl.this_is_admin());

    return () => Utils.cleanUp(setService, setRefresh);
  }, [isFocused]);

  // On refresh
  useEffect(() => {
    if (isFocused) setService(fetch);
  }, [refreshing]);

  // On search services
  useEffect(() => {
    setService(ctrl.onSearch.services(fetch, query));
  }, [query]);

  return (
    <Page>
      <Header text="Nos prestations" type={"menu"} nav={nav} />
      <Searchbar value={query} setValue={setQuery} plh={PLH.searchServices} />

      <FlatList
        data={services}
        renderItem={(o) => <ItemService nav={nav} service={o.item} />}
        refreshing={refreshing}
        onRefresh={() => ctrl.get.allServices(setRefresh, setFetch)}
        numColumns={2}
        style={styles.container_item}
      />

      <Button
        visible={isAdmin}
        text="+"
        onPress={() => ctrl.add.service(nav)}
        style={styles.addButton}
        styleText={styles.addText}
      />
      <Footer nav={nav} isHome={false} />
    </Page>
  );
};

export default Catalogues;

const styles = StyleSheet.create({
  menuBtn: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: "#faa4af",
    padding: 7,
    paddingLeft: 35,
    backgroundColor: "#faa4af",
    borderWidth: 1,
    borderLeftWidth: 0,
    width: 80,
    height: 45,
    position: "absolute",
    top: 60,
  },
  container_item: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    marginTop: 15,
  },

  addButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: 90,
    borderWidth: 2,
    borderColor: "#faa4af",
    paddingVertical: 5,
    width: "15%",
  },

  addText: {
    fontWeight: "700",
    fontSize: 22,
    color: "#faa4af",
    top: -1,
  },
});
