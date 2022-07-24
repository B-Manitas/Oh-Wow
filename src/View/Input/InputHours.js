import { StyleSheet, Text, View } from "react-native";
import InputError from "./InputError";

const InputHours = (props) => {
  const { plhRight, valueRight, setValueRight, validRight, textRight } = props;
  const { plhLeft, valueLeft, setValueLeft, validLeft, textLeft } = props;

  const inputLeft = {
    ...props,
    text: textLeft,
    placeholder: plhLeft,
    value: valueLeft,
    setValue: setValueLeft,
    valid: validLeft,
    style: styles.input,
    styleInput: styles.txtInput,
    multilineErrorText: false,
  };

  const inputRight = {
    ...props,
    text: textRight,
    placeholder: plhRight,
    value: valueRight,
    setValue: setValueRight,
    valid: validRight,
    style: styles.input,
    styleInput: styles.txtInput,
    multilineErrorText: false,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.inputCtn}>
        <InputError {...inputLeft} />
        <InputError {...inputRight} />
      </View>
    </View>
  );
};

export default InputHours;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 30,
    alignItems: "center",
  },

  txtInput: {
    textAlign: "center",
  },

  text: {
    fontSize: 20,
  },

  inputCtn: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },

  input: {
    marginHorizontal: 5,
    width: 100,
  },
});
