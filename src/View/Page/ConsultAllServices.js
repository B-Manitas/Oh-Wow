import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Round from "../Buttons/Round";
import Searchbar from "../Componnent/Searchbar";

import Page from "../Container/Page";
import Service from "../Container/Service/Service";
import Header from "../Parts/Header";

import { controller } from "model/Main";
import Footer from "../Parts/Footer";
import Absolute from "../Buttons/Absolute";
import Loader from "./Loader";

const ConsultAllServices = ({ navigation }) => {
  const is_admin = controller.this_is_admin;
  const [services, setService] = useState(undefined);
  const [is_refreshing, setIsRefreshing] = useState(false);
  const [query, setQuery] = useState("");
  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    controller.get.allServices(setIsRefreshing, setFetch);
  }, []);

  useEffect(() => {
    if (!is_admin) setService(fetch.filter((s) => s.is_hidden === false));
    else setService(fetch);
  }, [fetch, is_refreshing]);

  const contains = (service, query) => {
    const query_formatted = query.toLowerCase();
    return (
      !service.is_hidden && service.name.toLowerCase().includes(query_formatted)
    );
  };

  const search = (query) => {
    if (query != "") setService(fetch.filter((s) => contains(s, query)));
    else setService(fetch);
    setQuery(query);
  };

  if (!services) return <Loader />;
  return (
    <Page>
      <Header type="close"  title="Nos prestations" navigation={navigation} />
      <Searchbar
        query={query}
        setQuery={search}
        plh={"Rechercher un service"}
      />

      <FlatList
        data={services}
        numColumns={2}
        style={styles.container_item}
        renderItem={(item) => (
          <Service navigation={navigation} data={item.item} />
        )}
        refreshing={is_refreshing}
        onRefresh={() => controller.get.allServices(setIsRefreshing, setFetch)}
      />

      {is_admin && (
        <Absolute
          text={"+"}
          bottom={118}
          right={150}
          left={150}
          ctn_style={styles.btn_add}
          txt_style={styles.txt_add}
          func={() => controller.add.service(navigation)}
        />
      )}

      <Footer navigation={navigation} current={"AllServices"} />
    </Page>
  );
};

export default ConsultAllServices;

const styles = StyleSheet.create({
  container_item: {
    marginHorizontal: 30,
    marginTop: 15,
  },

  btn_add: {
    borderColor: "#faa4af",
  },

  txt_add: {
    fontWeight: "600",
    fontSize: 20,
    color: "#faa4af"
  },
});
