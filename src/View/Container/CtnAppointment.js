// React imports
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Componnent imports
import Button from "buttons/Button";
import CtnView from "containers/CtnView";

// Libraries imports
import CDate from "model/utils/CDate";
import { controller as ctrl } from "model/Main";

// Constants imports
import COLORS from "constants/COLORS";
import { ICON } from "constants/IMAGES";

const CtnAppointment = (props) => {
  // Destructure componnent props
  const { data, setApts } = props;
  const canDelete = props.canDelete === true ? true : false;
  const showComment = props.showComment === true ? true : false;

  // Define componnent state
  const date = new CDate(data.date);
  const strDate = `Le ${date.toDateString()} à ${date.toTimeString()}`;
  const strBookBy = `${data.firstname} ${data.lastname}`;
  const strClient = data.offer
    ? `${data.offer.firstname} ${data.offer.lastname}`
    : strBookBy;

  // Define the text value of field props
  const propsTxtValue = { style: styles.h2Value, numberOfLines: 1 };

  return (
    <View style={[styles.container, date.isPast() && styles.containerPast]}>
      <Button
        visible={canDelete}
        image={ICON.trash}
        style={styles.trashBtn}
        onPress={() => ctrl.delete.appointment(data._id, setApts)}
        noShadow
      />

      <Text style={styles.textDate}>{strDate}</Text>
      <Text style={styles.h1} numberOfLines={2}>
        {data.service}
      </Text>

      <View style={styles.field}>
        <Text style={styles.h2Key}>Esthéticienne:</Text>
        <Text {...propsTxtValue}>{data.staff}</Text>
      </View>

      <View style={styles.fieldCtn}>
        <View style={styles.field}>
          <Text style={styles.h2Key}>Prix:</Text>
          <Text {...propsTxtValue}>{data.price}DT</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.h2Key}>Durée:</Text>
          <Text {...propsTxtValue}>{CDate.toTimeString(data.duration)}</Text>
        </View>
      </View>

      <View style={styles.fieldCtn}>
        <View style={styles.field}>
          <Text style={styles.h2Key}>Réservé par:</Text>
          <Text {...propsTxtValue}>{strBookBy}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2Key}>Tél:</Text>
          <Text {...propsTxtValue}>{data.phone}</Text>
        </View>
      </View>

      <View style={styles.fieldCtn}>
        <View style={styles.field}>
          <Text style={styles.h2Key}>Client:</Text>
          <Text {...propsTxtValue}>{strClient}</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.h2Key}>Tél:</Text>
          <Text {...propsTxtValue}>
            {data.offer ? data.offer.phone : data.phone}
          </Text>
        </View>
      </View>

      <CtnView style={styles.field} visible={showComment}>
        <Text style={styles.h2Key}>Commentaire:</Text>
        <Text style={styles.h2Value}>{data.comment}</Text>
      </CtnView>
    </View>
  );
};

export default CtnAppointment;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingVertical: 10,

    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.default,
  },

  containerPast: {
    opacity: 0.6,
  },

  trashBtn: {
    backgroundColor: COLORS.default,
    position: "absolute",
    top: 5,
    right: 5,
    padding: 5,
    width: 35,
    height: 35,
    elevation: 5,
    zIndex: 5,
  },

  textDate: {
    fontSize: 15,
    color: COLORS.black,
    paddingHorizontal: 15,
  },

  h1: {
    fontWeight: "500",
    fontSize: 22,
    marginRight: 5,
    textDecorationLine: "underline",
    textAlign: "center",
    marginVertical: 20,
  },

  fieldCtn: {
    flexDirection: "row",
  },

  field: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    marginLeft: 10,
  },

  h2Key: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },

  h2Value: {
    fontSize: 16,
    fontStyle: "italic",
  },
});
