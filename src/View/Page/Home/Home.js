// React imports
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, RefreshControl, StyleSheet } from "react-native";

// Componnent imports
import HomeHeader from "./HomeHeader";
import Page from "containers/Page";
import CtnServiceLarge from "containers/Service/CtnServiceLarge";
import Loader from "pages/Loader";
import Footer from "parts/Footer";
import BtnSecondary from "buttons/BtnSecondary";
import Button from "buttons/Button";
import Empty from "componnents/Empty";

// Library imports
import _ from "lodash";
import { controller as ctrl } from "model/Main";
import Utils from "model/utils/Utils";

// Contants imports
import { ICON } from "constants/IMAGES";
import TEXTS from "constants/TEXTS";
import COLORS from "constants/COLORS";
import useFonts from "constants/FONTS";

const Home = (props) => {
  // Destructur props
  const { navigation: nav } = props;
  const refApp = useRef();

  // Define componnent states
  const [app, setApp] = useState();
  const [services, setService] = useState();
  const [refreshing, setRefresh] = useState(false);
  const [waiting, setWaiting] = useState(false);

  // Define componnent functions
  const fetchServices = () => ctrl.get.homeServices(setRefresh, setService);

  // On load componnent.
  useEffect(() => {
    useFonts();
    ctrl.update.localUserData(setWaiting);
    fetchServices();
    ctrl.get.app(setApp, (e) => (refApp.current = e));

    return () => {
      Utils.cleanUp(setRefresh, setService);
    };
  }, []);

  // On change app state.
  useEffect(() => {
    if (refApp.current === app) return;

    ctrl.update.app(app);
    refApp.current = app;
  }, [app]);

  // Define flatlist props.
  const propsList = {
    data: services,
    renderItem: (o) => <CtnServiceLarge nav={nav} service={o.item} />,
    keyExtractor: (item) => item._id,
    showsVerticalScrollIndicator: false,
    refreshing,
    refreshControl: (
      <RefreshControl
        {...{ tintColor: "#fff", refreshing, onRefresh: fetchServices }}
      />
    ),
    ListHeaderComponent: <HomeHeader {...{ setApp, app, refreshing }} />,
    ListFooterComponent: (
      <BtnSecondary
        text={TEXTS.showAllServices}
        onPress={() => ctrl.goTo.services(nav)}
      />
    ),
    style: styleList.container,
    ListHeaderComponentStyle: [
      styleList.header,
      refreshing && styleList.onRefresh,
    ],
    ListFooterComponentStyle: styleList.footer,
    ListEmptyComponent: <Empty />,
  };

  // Define button menu props.
  const propsMenuBtn = {
    image: ICON.menuWhite,
    style: styles.menuBtn,
    onPress: () => ctrl.goTo.nav(nav),
  };

  if (!services || !app || waiting) return <Loader />;
  return (
    <Page>
      <FlatList {...propsList} />
      <Button {...propsMenuBtn} />
      <Footer nav={nav} isHome />
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  menuBtn: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: COLORS.main,
    padding: 7,
    paddingLeft: 35,
    backgroundColor: COLORS.main,
    borderWidth: 1,
    borderLeftWidth: 0,
    width: 80,
    height: 45,
    position: "absolute",
    top: 60,
  },
});

const styleList = StyleSheet.create({
  container: { top: -50, marginBottom: -30 },

  header: {
    height: Dimensions.get("window").width - 70,
    marginBottom: 140,
  },

  footer: { marginBottom: 50 },

  onRefresh: { top: 90 },
});
