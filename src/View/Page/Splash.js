import { useEffect } from "react";
import { Animated, StyleSheet, Text } from "react-native";

import { controller } from "model/Main";
import { fetchServices } from "../../redux/ActionsCreator";

const Splash = ({ setShowSplash }) => {
  useEffect(() => {
    controller.fetchAllServices([fetchServices]);
    setShowSplash(false);
  }, []);

  return (
    <Animated.View style={styles.page}>
      <Text style={styles.text}>Oh Wow</Text>
    </Animated.View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#383838",
  },

  text: {
    fontSize: 32,
    color: "#fff",
  },
});
