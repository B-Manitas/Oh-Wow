import { Alert } from "react-native";
import { InvalidDataError } from "../Exceptions/InvalidDataError";
import { InvalidSchemaError } from "../Exceptions/InvalidSchemaError";
import { NetworkError } from "../Exceptions/NetworkError";
import { frontend } from "../Model/Frontend";

export default {
  signup(data, func, navigation) {
    try {
      frontend.signup(data);
      navigation("Home");
    } catch (error) {
      if (error instanceof InvalidDataError) func(error.invalid_data);
      else if (error instanceof NetworkError) {
        Alert.alert(
          "Network Error",
          "Please make sure you are connected properly to the internet."
        );
      } else if (error instanceof InvalidSchemaError) {
        Alert.alert(
          "Invalid Data",
          `An error was occured, please try again later.\n${error.invalid_data}`,
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("Home"),
            },
          ]
        );
        navigation.goBack();
      } else
        Alert.alert(
          "Error",
          `An error was occured, please try again later.\n${error}`
        );
    }
  },
};
