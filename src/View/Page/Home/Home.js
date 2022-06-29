import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";

import HomeHeader from "./HomeHeader";
import ServiceLarge from "../../Container/Service/ServiceLarge";
import { SERVICES } from "../../../constants/DATA";

import { controller } from "model/Main";

const Home = ({ navigation }) => {
  return (
    <Page>
      <Header title={"Oh Wow"} type={"menu"} navigation={navigation} />
      <TouchableOpacity onPress={() => controller.setAdmin()}>
        <Text>set admin</Text>
      </TouchableOpacity>
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
