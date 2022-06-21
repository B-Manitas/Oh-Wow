import React from "react";
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
import { ICON } from "../../Constants/IMAGES";
import CheckBox from "../Componnent/CheckBox";
import ServiceInfo from "../Container/ServiceInfo";
import Absolute from "../Buttons/Absolute";

const ConsultService = ({ data }) => {
  return (
    <Page>
      <Header type={"back"} title={data.name} editable={true} />

      <ScrollView style={styles.main_container}>
        <View style={styles.container_img}>
          <Image source={data.img} style={styles.img} />
          <Absolute
            text="Editer"
            top={10}
            left={10}
            ctn_style={styles.btn_edit}
          />
        </View>

        <View style={styles.container_info}>
          <ServiceInfo
            text={"Durée"}
            unit={"min"}
            enabled={true}
            value={data.duration.toString()}
            flex={1}
            width={"25%"}
          />
          <ServiceInfo
            text={"Tarifs"}
            unit={"€"}
            enabled={true}
            value={data.price.toString()}
            flex={1}
            width={"25%"}
          />
          <ServiceInfo
            enabled={false}
            text={"Créneau"}
            value={"25/02 à 12h30"}
            flex={2}
            width={"40%"}
          />
        </View>

        <View style={styles.parts}>
          <Text style={styles.h2}>Description :</Text>
          <TextInput
            value={data.description}
            style={styles.h3}
            multiline={true}
          />
        </View>

        <View style={styles.parts}>
          <Text style={styles.h2}>En tendance</Text>
          <View style={styles.container_trend}>
            <CheckBox state={false} size={25} />
            <Text style={styles.text_trend}>
              Afficher la prestation en tendance
            </Text>
          </View>
        </View>
      </ScrollView>

      <Absolute img={ICON.trash} bottom={30} left={30} />
      <Absolute text={"Prendre RDV"} img={ICON.book} bottom={30} right={30} />
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
