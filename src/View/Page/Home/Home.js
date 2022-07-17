import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import Page from "../../Container/Page";

import HomeHeader from "./HomeHeader";
import ServiceLarge from "../../Container/Service/ServiceLarge";

import { controller as ctrl } from "model/Main";
import Footer from "../../Parts/Footer";
import Absolute from "../../Buttons/Absolute";
import Primary from "../../Buttons/Primary";
import { ICON } from "../../../constants/IMAGES";
import _ from "lodash";
import Loader from "../Loader";
import { fetchServices } from "store/ActionsCreator";

const Home = ({ navigation }) => {
  const [is_refreshing, setIsRefreshing] = useState(false);
  const [services, setService] = useState(undefined);

  const fetchData = () =>
    ctrl.get.allServices(setIsRefreshing, setService, fetchServices);
  const [fetch, setFetch] = useState(undefined);
  const [app, setApp] = useState(undefined);

  useEffect(() => {
    fetchData();
    ctrl.get.app(setFetch, setApp);
  }, []);

  useEffect(() => {
    if (!_.isEqual(fetch, app)) {
      ctrl.update.app(app);
      setFetch(app);
      Alert.alert("App updated");
    }
  }, [app]);

  if (!services || !app) return <Loader />;
  return (
    <Page>
      <FlatList
        extraData={services.filter((s) => s.is_trend && !s.is_hidden)}
        data={services.filter((s) => s.is_trend && !s.is_hidden)}
        renderItem={(item) => (
          <ServiceLarge navigation={navigation} data={item.item} />
        )}
        keyExtractor={(item) => item._id}
        ListFooterComponent={
          <Primary
            text={"Consulter toutes les prestations"}
            is_active={true}
            style={styles.btn_footer}
            height={14}
            font_size={20}
            func={() => navigation.navigate("AllServices")}
          />
        }
        ListHeaderComponent={
          <HomeHeader refreshing={is_refreshing} setApp={setApp} app={app} />
        }
        ListFooterComponentStyle={{marginBottom: 50}}
        ListHeaderComponentStyle={[styles.header, is_refreshing && { top: 90 }]}
        style={styles.container}
        refreshing={is_refreshing}
        refreshControl={
          <RefreshControl
            tintColor={"#fff"}
            refreshing={is_refreshing}
            onRefresh={fetchData}
          />
        }
      />
      <Absolute
        top={60}
        left={0}
        img={ICON.menu}
        ctn_style={styles.menu}
        func={() => navigation.navigate("Navigation")}
      />

      <Footer navigation={navigation} current={"Home"} />
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    top: -50,
  },

  header: {
    height: Dimensions.get("window").width - 70,
    marginBottom: 120,
  },

  menu: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: "#faa4af",
    paddingLeft: 40,
    backgroundColor: "#faa4af",
    borderWidth: 1,
    borderLeftWidth: 0,
  },

  btn_footer: {
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderColor: "#faa4af",
    marginHorizontal: 15,
  },
});
