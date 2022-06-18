import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ConnectionSelect from "./src/View/Page/ConnectionSelect";
import Login from "./src/View/Page/Login";
import SignUp from "./src/View/Page/SignUp";
import ForgottenPass from "./src/View/Page/ForgottenPass";
import ValidationMail from "./src/View/Page/ValidationMail";
import ModifyPass from "./src/View/Page/ModifyPass";

export default function App() {
  return <ConnectionSelect />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
