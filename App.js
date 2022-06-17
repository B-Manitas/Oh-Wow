import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ConnectionSelect from "./src/View/Page/ConnectionSelect";

export default function App() {
  return <ConnectionSelect />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
