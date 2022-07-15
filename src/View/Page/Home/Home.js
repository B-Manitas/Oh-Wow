import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
} from "react-native";

import Page from "../../Container/Page";

import HomeHeader from "./HomeHeader";
import ServiceLarge from "../../Container/Service/ServiceLarge";

import { controller as ctrl } from "model/Main";
import Footer from "../../Parts/Footer";
import Absolute from "../../Buttons/Absolute";
import { ICON } from "../../../constants/IMAGES";
import _ from "lodash";
import Loader from "../Loader";

const Home = ({ navigation }) => {
  const [is_refreshing, setIsRefreshing] = useState(false);
  const [services, setService] = useState(undefined);

  const fetchService = () => ctrl.get.allServices(setIsRefreshing, setService);
  const [fetch, setFetch] = useState(undefined);
  const [app, setApp] = useState(undefined);

  useEffect(() => {
    fetchService();
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
        ListHeaderComponent={
          <HomeHeader refreshing={is_refreshing} setApp={setApp} app={app} />
        }
        ListHeaderComponentStyle={[styles.header, is_refreshing && { top: 90 }]}
        style={styles.container}
        refreshing={is_refreshing}
        refreshControl={
          <RefreshControl
            tintColor={"#fff"}
            refreshing={is_refreshing}
            onRefresh={fetchService}
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
    marginBottom: 105,
  },

  menu: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: "#f5f5f5",
    paddingLeft: 40,
    borderWidth: 1,
    borderLeftWidth: 0,
  },
});
