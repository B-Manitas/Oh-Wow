import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Connection from "./src/View/Page/Connection";
import Login from "./src/View/Page/Login";
import SignUp from "./src/View/Page/SignUp";
import Authcode from "./src/View/Page/Authcode";
import ValidationMail from "./src/View/Page/Authcode";
import ModifyPass from "./src/View/Page/ModifyPass";
import Home from "./src/View/Page/Home/Home";
import Navigation from "./src/View/Page/Navigation";

export default function App() {
  return <Authcode />;
}
