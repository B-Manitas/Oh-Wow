import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";

import HomeHeader from "./HomeHeader";
import ServiceLarge from "../../Container/Service/ServiceLarge";
import { controller } from "model/Main";
import Splash from "../Splash";

const Home = ({ navigation }) => {
  const [show_splash, setShowSplash] = useState(true);
  const services = controller.getAllServices();

  return (
    <Page>
      {show_splash && <Splash setShowSplash={setShowSplash} />}
      <Header title={"Oh Wow"} type={"menu"} navigation={navigation} />

      <FlatList
        data={services}
        renderItem={(item) => (
          <ServiceLarge data={item.item} navigation={navigation} />
        )}
        ListHeaderComponent={<HomeHeader navigation={navigation} />}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({});
