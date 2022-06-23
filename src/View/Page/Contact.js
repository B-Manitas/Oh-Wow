import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Page from "../Container/Page";
import TextEdit from "../Input/TextEdit";
import Footer from "../Parts/Footer";
import Header from "../Parts/Header";

const Contact = () => {
  return (
    <Page>
      <Header type={"close"} title={"Nous contacter"} />

      <View style={styles.parts}>
        <TextEdit
          pre_text={"Tél:"}
          value={"+216 09.00.00.00.00"}
          plh={"+216 09.00.00.00.00"}
        />
        <TextEdit
          pre_text={"Mail"}
          value={"ohwow@address.com"}
          plh={"ohwow@address.com"}
        />
      </View>

      <View style={styles.parts}>
        <Text style={styles.h1}>Nos centres esthétiques</Text>
        <MapView style={styles.map}/>
      </View>

      <Footer />
    </Page>
  );
};

export default Contact;

const styles = StyleSheet.create({
  parts: {
    marginVertical: 10,
    marginHorizontal: 30,
  },

  h1: {
    fontWeight: "400",
    fontSize: 22,
    paddingBottom: 15,
    textDecorationLine: "underline",
  },

  map:{
    width: "100%",
    height: "70%",
  }
});
