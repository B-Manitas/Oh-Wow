import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";

import HomeHeader from "./HomeHeader";
import { SERVICES } from "../../../Constants/DATA";
import ServiceLarge from "../../Container/Service/ServiceLarge";

const Home = ({ navigation }) => {
  return (
    <Page>
      <Header title={"Oh Wow"} type={"menu"} navigation={navigation} />
      <FlatList
        data={SERVICES}
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
