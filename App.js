// Imports react components
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

// Imports store
import { store, persistor } from "store/Store";
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
import Catalogues from "./src/View/Page/Catalogues";
import Service from "./src/View/Page/Service/Service";
import Forgotten from "./src/View/Page/Forgotten";
import Appointments from "./src/View/Page/Appointments";
import Search from "./src/View/Page/Search";
import Settings from "./src/View/Page/Settings";
import Contact from "./src/View/Page/Contact";
import Client from "./src/View/Page/Client/Client";
import Plannings from "./src/View/Page/Plannings/Plannings";
import Salons from "./src/View/Page/Salons";
import PAGES from "./src/constants/PAGES";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={PAGES.HOME}
            screenOptions={{ headerShown: false, gestureEnabled: false }}
          >
            <Stack.Screen
              name={PAGES.HOME}
              component={Home}
              options={{ animation: "none", gestureEnabled: false }}
            />
            <Stack.Screen
              name={PAGES.CATALOGUE}
              component={Catalogues}
              options={{ animation: "none", gestureEnabled: false }}
            />
            <Stack.Screen
              name={PAGES.NAV}
              component={Navigation}
              options={{ gestureEnabled: true }}
            />
            <Stack.Screen name={PAGES.LOGIN} component={Login} />
            <Stack.Screen name={PAGES.SIGNUP} component={SignUp} />
            <Stack.Screen name={PAGES.SALONS} component={Salons} />
            <Stack.Screen name={PAGES.CONTACT} component={Contact} />
            <Stack.Screen name={PAGES.SETTINGS} component={Settings} />
            <Stack.Screen name={PAGES.SERVICE} component={Service} />
            <Stack.Screen name={PAGES.APTS} component={Appointments} />
            <Stack.Screen name={PAGES.SEARCH} component={Search} />
            <Stack.Screen name={PAGES.CLIENT} component={Client} />
            <Stack.Screen name={PAGES.CONNECTION} component={Connection} />
            <Stack.Screen name={PAGES.BOOKING} component={Booking} />
            <Stack.Screen name={PAGES.CONFIRM_APT} component={ConfirmAppt} />
            <Stack.Screen name={PAGES.PLANNING} component={Plannings} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
