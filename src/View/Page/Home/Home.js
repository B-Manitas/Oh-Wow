import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";

import { PHOTO } from "../../../Constants/IMAGES";
import Round from "../../Buttons/Round";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <Page>
      <Header title={"Oh Wow"} type={"menu"} />
      <FlatList 
      ListHeaderComponent={<HomeHeader />}
      />
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingVertical: 10,
  },
});
