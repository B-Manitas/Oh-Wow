// React imports
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

// Componnents  imports
import Button from "button/Button";
import Page from "../../Container/Page";
import ServiceSettings from "./ServiceSettings";
import ServiceMain from "./ServiceMain";

// Libraries imports
import { controller as ctrl } from "model/Main";
import _ from "lodash";

// Contants imports
import { ICON } from "constants/IMAGES";
import TEXTS from "constants/TEXTS";
import Primary from "../../Buttons/Primary";
import Utils from "../../../model/Utils";

const Service = (props) => {
  // Destructure props
  const { navigation: nav, route } = props;

  // Define componnents props
  const [service, setService] = useState(route.params.service);
  const [init, setInit] = useState(route.params.service);
  const [setting, setSetting] = useState(false);
  const [isEdit, setEdit] = useState(false);

  // On press settings button
  const openImage = () => {
    ctrl.update.image(setService);
    setEdit(false);
  };

  // On press edit image button
  const openSettings = () => {
    setSetting(true);
    setEdit(false);
  };

  return (
    <Page>
      <View style={stylesImage.container}>
        <Image source={{ uri: service.img }} style={stylesImage.image} />

        <Button
          image={ICON.back_wh}
          style={stylesClose.button}
          onPress={() => ctrl.onClose.service(service, init, nav)}
          styleImg={stylesClose.image}
        />

        <View style={styleDrop.container}>
          <Button
            text={isEdit ? "Fermer" : "Modifier"}
            style={styleDrop.button}
            styleText={styleDrop.h1}
            visible={ctrl.this_is_admin()}
            onPress={() => setEdit((b) => !b)}
          />
          <Button
            text="Paramètres"
            style={styleDrop.button}
            visible={ctrl.this_is_admin() && isEdit}
            onPress={openSettings}
          />
          <Button
            text="Modifier la photo"
            style={styleDrop.button}
            onPress={openImage}
            visible={ctrl.this_is_admin() && isEdit}
          />
        </View>
      </View>

      <ServiceSettings
        visible={setting}
        close={() => setSetting(false)}
        init={init}
        setInit={setInit}
        data={service}
        setData={setService}
        nav={nav}
      />

      <ServiceMain visible={setting} service={service} />

      <Primary
        visible={!setting && Utils.canBook(init, service, route.params.isNew)}
        text={TEXTS.booking}
        onPress={() => ctrl.goTo.booking(nav, init)}
      />
    </Page>
  );
};

export default Service;

const stylesImage = StyleSheet.create({
  container: {
    height: "45%",
    top: -50,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

const stylesClose = StyleSheet.create({
  button: {
    position: "absolute",
    top: 60,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 0,
    backgroundColor: "#faa4af",
    paddingLeft: 38,
    height: 40,
  },

  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});

const styleDrop = {
  container: {
    position: "absolute",
    top: 60,
    right: 20,
  },

  button: {
    width: 130,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginVertical: 2,
  },

  h1: {
    fontWeight: "600",
  },
};
