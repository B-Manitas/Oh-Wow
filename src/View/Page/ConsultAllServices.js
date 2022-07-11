import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Round from "../Buttons/Round";
import Searchbar from "../Componnent/Searchbar";

import Page from "../Container/Page";
import Service from "../Container/Service/Service";
import Header from "../Parts/Header";

import { controller } from "model/Main";

const ConsultAllServices = ({ navigation }) => {
  const is_admin = controller.this_is_admin;
  const [services, setService] = useState([]);
  const [is_refreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    controller.get.allServices(setIsRefreshing, setService);
  }, []);

  return (
    <Page>
      <Header type="menu" title="Nos prestations" navigation={navigation} />
      <Searchbar />

      <FlatList
        data={services}
        numColumns={2}
        style={styles.container_item}
        renderItem={(item) => (
          <Service navigation={navigation} data={item.item} />
        )}
        refreshing={is_refreshing}
        onRefresh={() =>
          controller.get.allServices(setIsRefreshing, setService)
        }
      />

      {is_admin && (
        <Round
          text={"+"}
          size={60}
          enabled={true}
          style_txt_enabled={styles.txt_add}
          style_ctn_enabled={styles.btn_add}
          func={() => controller.add.service(navigation)}
        />
      )}
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
    position: "absolute",
    bottom: 30,
    right: 30,
  },

  txt_add: {
    fontSize: 25,
    top: -1,
  },
});
