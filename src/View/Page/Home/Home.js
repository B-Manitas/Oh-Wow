import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
} from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";

import HomeHeader from "./HomeHeader";
import ServiceLarge from "../../Container/Service/ServiceLarge";
import Splash from "../Splash";

import { controller as ctrl } from "model/Main";
import Footer from "../../Parts/Footer";
import Absolute from "../../Buttons/Absolute";
import { ICON } from "../../../constants/IMAGES";

const Home = ({ navigation }) => {
  const [is_refreshing, setIsRefreshing] = useState(false);
  const [services, setService] = useState(undefined);

  const fetchService = () => ctrl.get.allServices(setIsRefreshing, setService);
  useEffect(() => {
    fetchService();
  }, []);

  if (!services) return <Text>Fetching data...</Text>;
  return (
    <Page>
      <FlatList
        extraData={services}
        data={services}
        renderItem={(item) => (
          <ServiceLarge navigation={navigation} data={item.item} />
        )}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={<HomeHeader refreshing={is_refreshing} />}
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
