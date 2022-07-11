import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import Page from "../Container/Page";
import Header from "../Parts/Header";
import { ICON } from "../../constants/IMAGES";
import ServiceInfo from "../Container/ServiceInfo";
import Absolute from "../Buttons/Absolute";
import CheckBoxText from "../Componnent/CheckBoxText";

import { controller as ctrl } from "model/Main";
import CDate from "../../model/utils/CDate";

const ConsultService = ({ navigation, route }) => {
  const is_admin = ctrl.this_is_admin;
  const service_init = route.params.data;
  const [service, setService] = useState(service_init);
  const [audit, setAudit] = useState(ctrl.fakeAudit(service_init));

  const formatDur = (dur) =>
    typeof dur === "number" ? CDate.toTimeString(dur) : dur;

  const setDur = (t) => setService((p) => ({ ...p, duration: t }));
  const setPrice = (t) => setService((p) => ({ ...p, price: t }));
  const onClose = () =>
    ctrl.onClose.service(service, service_init, navigation, setAudit);

  return (
    <Page>
      <Header
        type={"back"}
        title={service.name}
        editable={is_admin}
        navigation={navigation}
        setValue={(t) => setService((p) => ({ ...p, name: t }))}
        is_valid={audit.name}
        func={onClose}
      />

      <ScrollView style={styles.main_container}>
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
            enabled={true}
            value={formatDur(service.duration)}
            flex={1} // backgroundColor: "#f5f5f5",
            width={"25%"}
            setValue={(t) => ctrl.onFormat.time(t, setDur)}
          />
          <ServiceInfo
            text={"Tarifs"}
            type={"number-pad"}
            unit={"€"}
            enabled={true}
            value={service.price.toString()}
            flex={1}
            width={"25%"}
            setValue={(t) => ctrl.onFormat.price(t, setPrice)}
          />
        </View>

        <View style={styles.parts}>
          <Text style={styles.h2}>Description :</Text>
          <TextInput
            value={service.description}
            style={styles.h3}
            multiline={true}
            onChangeText={(t) => setService((p) => ({ ...p, description: t }))}
            placeholder={"Click to edit the description..."}
            placeholderTextColor={!audit.description && "red"}
          />
        </View>

        {is_admin && (
          <View style={styles.parts}>
            <Text style={styles.h2}>En tendance</Text>
            <View style={styles.container_trend}>
              <CheckBoxText
                state={service.is_trend}
                size={25}
                color_bg_active={"#383838"}
                func={(b) => setService((p) => ({ ...p, is_trend: !b }))}
              />
              <Text style={styles.text_trend}>
                Afficher la prestation en tendance
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {is_admin && (
        <Absolute
          img={ICON.trash}
          bottom={30}
          left={30}
          func={() => ctrl.delete.service(service._id, navigation)}
        />
      )}
      <Absolute
        text={"Disponibilité et RDV"}
        img={ICON.book}
        bottom={30}
        right={30}
        func={() => navigation.navigate("Booking", { data: service_init })}
      />
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

  parts: {
    marginVertical: 20,
  },

  h2: {
    fontSize: 22,
    fontWeight: "400",
    marginHorizontal: 15,
    marginVertical: 0,
    textDecorationLine: "underline",
  },

  h3: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: "justify",
  },

  container_trend: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  text_trend: {
    marginLeft: 20,
    fontWeight: "300",
    fontSize: 18,
  },
});
