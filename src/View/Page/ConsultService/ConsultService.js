import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Page from "../../Container/Page";
import { ICON, PHOTO } from "../../../constants/IMAGES";
import Absolute from "../../Buttons/Absolute";
import ConsultServiceSettings from "./ConsultServiceSettings";

import { controller as ctrl } from "model/Main";
import ConsultServiceMain from "./ConsultServiceMain";

const ConsultService = ({ navigation, route }) => {
  const is_admin = ctrl.this_is_admin;
  const service_init = route.params.data;

  const [service, setService] = useState(service_init);
  const [init, setInit] = useState(service_init);
  const [setting, setSetting] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const onClose = () => ctrl.onClose.service(service, service_init, navigation);

  const openSetting = () => {
    setIsEdit(false);
    setSetting(true);
  };

  const openImage = () => {
    setIsEdit(false);
    ctrl.update.image(setService);
  };

  return (
    <Page>
      <View style={styles.ctn_img}>
        <Image source={{ uri: service.img }} style={styles.img} />
        <Absolute
          img={ICON.back}
          top={60}
          left={0}
          ctn_style={styles.close}
          func={onClose}
        />

        {is_admin && (
          <View style={styles.ctn_edit}>
            <TouchableOpacity
              style={styles.btn_drop}
              onPress={() => setIsEdit((b) => !b)}
            >
              <Text style={styles.txt_drop}>
                {isEdit ? "Fermer" : "Modifier"}
              </Text>
            </TouchableOpacity>
            {isEdit && (
              <View style={styles.drop}>
                <TouchableOpacity style={styles.btn_drop} onPress={openSetting}>
                  <Text style={styles.txt_drop}>Paramètre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_drop} onPress={openImage}>
                  <Text style={styles.txt_drop}>Nouvelle photo</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>

      {setting ? (
        <ConsultServiceSettings
          close={() => setSetting(false)}
          service={service}
          init={init}
          setInit={setInit}
          setService={setService}
        />
      ) : (
        <ConsultServiceMain service={service} />
      )}

      {!setting && (
        <Absolute
          bottom={35}
          right={35}
          left={35}
          text={"Prendre rendez-vous"}
          ctn_style={styles.btn_apt}
          txt_style={styles.txt_apt}
          func={() => navigation.navigate("Booking", { data: init })}
        />
      )}
    </Page>
  );
};

export default ConsultService;

const styles = StyleSheet.create({
  ctn_img: {
    height: "45%",
    top: -50,
  },

  img: {
    width: "100%",
    height: "100%",
  },

  close: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    paddingLeft: 38,
    height: 40,
  },

  ctn_edit: {
    position: "absolute",
    top: 60,
    right: 15,
  },

  btn_drop: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 7,
    margin: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderWidth: 1,
    borderColor: "#383838",
  },

  txt_drop: {
    textAlign: "center",
  },

  btn_apt: {
    borderColor: "#d5d5d5",
    borderWidth: 2,
  },

  txt_apt: {
    fontWeight: "500",
    fontSize: 22,
  },
});
