import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";

import HomeHeader from "./HomeHeader";
import { SERVICES } from "../../../Constants/DATA";
import ServiceLarge from "../../Container/Service/ServiceLarge";

const Home = () => {
  return (
    <Page>
      <Header title={"Oh Wow"} type={"menu"} />
      <FlatList
        data={SERVICES}
        renderItem={(item) => <ServiceLarge data={item.item} />}
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 30,
  },
});
