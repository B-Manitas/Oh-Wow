import React from "react";
import { StatusBar } from "expo-status-bar";

import Connection from "./src/View/Page/Connection";
import Login from "./src/View/Page/Login";
import SignUp from "./src/View/Page/SignUp";
import Authcode from "./src/View/Page/Authcode";
import ValidationMail from "./src/View/Page/Authcode";
import ModifyPass from "./src/View/Page/ModifyPass";
import Home from "./src/View/Page/Home/Home";
import Navigation from "./src/View/Page/Navigation";
import Booking from "./src/View/Page/Booking/Booking";
import ConfirmAppt from "./src/View/Page/ConfirmAppt";
import ConsultAllServices from "./src/View/Page/ConsultAllServices";
import ConsultService from "./src/View/Page/ConsultService";
import Forgotten from "./src/View/Page/Forgotten";
import { SERVICES } from "./src/Constants/DATA";
import Appointments from "./src/View/Page/Appointments";
import Search from "./src/View/Page/Search";

export default function App() {
  return <ConsultService data={SERVICES[1]} />;
  // return <Home />;
}
