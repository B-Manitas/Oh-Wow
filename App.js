// Imports react components
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

// Imports store
import { store, persistor } from "redux-store/Store";
import { PersistGate } from "redux-persist/integration/react";

// Imports pages
import Home from "./src/View/Page/Home/Home";
import Navigation from "./src/View/Page/Navigation/Navigation";
import Connection from "./src/View/Page/Connection";
import Login from "./src/View/Page/Login";
import SignUp from "./src/View/Page/SignUp";
import Authcode from "./src/View/Page/Authcode";
import ValidationMail from "./src/View/Page/Authcode";
import ModifyPass from "./src/View/Page/ModifyPass";
import Booking from "./src/View/Page/Booking/Booking";
import ConfirmAppt from "./src/View/Page/ConfirmAppt";
import ConsultAllServices from "./src/View/Page/ConsultAllServices";
import ConsultService from "./src/View/Page/ConsultService";
import Forgotten from "./src/View/Page/Forgotten";
import Appointments from "./src/View/Page/Appointments";
import Search from "./src/View/Page/Search";
import Settings from "./src/View/Page/Settings";
import SettingsApp from "./src/View/Page/SettingsApp";
import Contact from "./src/View/Page/Contact";
import Client from "./src/View/Page/Client";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="AllServices" component={ConsultAllServices} />
            <Stack.Screen name="Service" component={ConsultService} />
            <Stack.Screen name="Forgotten" component={Forgotten} />
            <Stack.Screen name="Appointments" component={Appointments} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SettingsApp" component={SettingsApp} />
            <Stack.Screen name="Client" component={Client} />
            <Stack.Screen name="Connection" component={Connection} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="ConfirmAppt" component={ConfirmAppt} />
            <Stack.Screen name="Authcode" component={Authcode} />
            <Stack.Screen name="ModifyPass" component={ModifyPass} />
            <Stack.Screen name="ValidationMail" component={ValidationMail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
