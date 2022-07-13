import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import Page from "../../Container/Page";
import Header from "../../Parts/Header";
import { ICON } from "../../../constants/IMAGES";
import ServiceInfo from "../../Container/ServiceInfo";
import Absolute from "../../Buttons/Absolute";
import ConsultServiceSettings from "./ConsultServiceSettings";

import { controller as ctrl } from "model/Main";
import CDate from "../../../model/utils/CDate";

const ConsultService = ({ navigation, route }) => {
  const is_admin = ctrl.this_is_admin;
  const service_init = route.params.data;

  const [service, setService] = useState(service_init);
  const [init, setInit] = useState(service_init);
  const [setting, setSetting] = useState(false);
  const [salons, setSalons] = useState([]);

  useState(() => {
    ctrl.get.allSalons(setSalons);
  }, []);

  if (!salons) return <Text>Fecthing data...</Text>;
  else
    return (
      <Page>
        <Header
          type={"back"}
          title={service.name}
          navigation={navigation}
          func={() => ctrl.onClose.service(service, init, navigation)}
        />

        <ScrollView
          style={styles.main_container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.img}>
            <Image
              source={{ uri: service.img }}
              style={{ width: "100%", height: "100%" }}
            />
            {is_admin && (
              <Absolute
                text="Editer"
                top={10}
                left={10}
                ctn_style={styles.btn_edit}
                func={() => ctrl.update.image(setService)}
              />
            )}
          </View>

          <View style={styles.container_info}>
            <ServiceInfo
              text={"Durée"}
              value={CDate.toTimeString(service.duration)}
              flex={1}
            />
            <ServiceInfo
              text={"Tarifs"}
              unit={"€"}
              value={service.price.toString()}
              flex={1}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.h2}>Description :</Text>
            <Text style={styles.h3} multiline>
              {service.description}
            </Text>
          </View>
        </ScrollView>

        {is_admin && (
          <Absolute
            left={30}
            bottom={30}
            img={ICON.setting}
            func={() => setSetting((b) => !b)}
          />
        )}
        {is_admin && setting && (
          <ConsultServiceSettings
            salons={salons}
            service={service}
            init={init}
            setInit={setInit}
            setService={setService}
          />
        )}

        {!setting && (
          <Absolute
            text={"Disponibilité et RDV"}
            img={ICON.book}
            txt_style={styles.txt_apt}
            bottom={30}
            right={30}
            func={() => navigation.navigate("Booking", { data: init })}
          />
        )}
      </Page>
    );
};

export default ConsultService;

const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 30,
  },

  img: {
    borderWidth: 2,
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  btn_edit: {
    backgroundColor: "#ffffff80",
    paddingVertical: 5,
  },

  container_info: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: -5,
    justifyContent: "center",
  },

  section: {
    marginVertical: 20,
  },

  parts: {
    paddingVertical: 10,
    marginHorizontal: 15,
  },

  h2: {
    fontSize: 23,
    fontWeight: "500",
    width: "100%",
    borderBottomWidth: 2,
    textDecorationLine: "underline",
    marginBottom: 10,
  },

  h3: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "justify",
  },

  ctn_admin: {
    position: "absolute",
    bottom: 30,
    left: 30,
    flexDirection: "row",
  },

  txt_apt: {
    fontSize: 18,
    fontWeight: "500",
  },
});
