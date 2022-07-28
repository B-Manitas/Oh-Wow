// React imports
import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

// Componnents imports
import Button from "buttons/Button";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Page from "containers/Page";
import Searchbar from "componnents/Searchbar";
import CtnService from "containers/Service/CtnService";
import Empty from "componnents/Empty";

// Libraries imports
import { useIsFocused } from "@react-navigation/native";
import { controller as ctrl } from "model/Main";
import Utils from "model/utils/Utils";

// Contants imports
import { PLH } from "constants/TEXTS";
import COLORS from "constants/COLORS";

const Catalogues = (props) => {
  // Destructure componnent props
  const { navigation: nav } = props;

  // Define componnent state
  const isFocused = useIsFocused();
  const [isAdmin, setAdmin] = useState(ctrl.thisIsAdmin());
  const [services, setService] = useState();
  const [refreshing, setRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const [fetch, setFetch] = useState([]);

  // On focus page
  useEffect(() => {
    ctrl.get.allServices(setRefresh, setFetch, setService);
    setAdmin(ctrl.thisIsAdmin());

    return () => {
      Utils.cleanUp(setService, setRefresh);
    };
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
        renderItem={(o) => <CtnService nav={nav} service={o.item} />}
        refreshing={refreshing}
        onRefresh={() => ctrl.get.allServices(setRefresh, setFetch)}
        numColumns={2}
        style={styles.flatlist}
        ListEmptyComponent={<Empty />}
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
    borderColor: COLORS.main,
    padding: 7,
    paddingLeft: 35,
    backgroundColor: COLORS.main,
    borderWidth: 1,
    borderLeftWidth: 0,
    width: 80,
    height: 45,
    position: "absolute",
    top: 60,
  },

  flatlist: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    marginTop: 15,
  },

  addButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: 90,
    borderWidth: 2,
    borderColor: COLORS.main,
    paddingVertical: 5,
    width: "15%",
    zIndex: 6,
    elevation: 6,
  },

  addText: {
    fontWeight: "700",
    fontSize: 22,
    color: COLORS.main,
    top: -1,
  },
});
