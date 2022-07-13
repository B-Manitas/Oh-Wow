import React from "react";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";

const Page = ({ children }) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="dark-content" hidden={false} />
      {children}
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
