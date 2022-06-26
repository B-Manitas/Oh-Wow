import { Alert } from "react-native";
import InvalidDataError from "../Exceptions/InvalidDataError";
import InvalidSchemaError from "../Exceptions/InvalidSchemaError";
import NetworkError from "../Exceptions/NetworkError";
import NetworkStatusError from "../Exceptions/NetworkStatusError";
import UserAlreadyExist from "../Exceptions/UserAlreadyExist";
import Frontend from "../Model/Frontend";

export default {
  async signup(data, func, navigation) {
    try {
      await Frontend.signup(data);
      navigation.navigate("Home");
    } catch (error) {
      if (error instanceof InvalidDataError) func(error.invalid_data);
      else if (error instanceof UserAlreadyExist)
        Alert.alert(
          "User already exist",
          "A user with this e-mail address has already been registered."
        );
      else if (error instanceof NetworkError) {
        Alert.alert(
          "Network Error",
          "Please make sure you are connected properly to the internet."
        );
      } else if (error instanceof NetworkStatusError) {
        Alert.alert(
          "Network Status Error",
          `Please contact the developer for the error code 0-${error.status}`
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
      } else {
        console.log(error);
        Alert.alert(
          "Error",
          `An error was occured, please try again later.\n${error}`
        );
      }
    }
  },

  login(data, func, navigation) {
    try {
      Frontend.login(data);
      navigation("Home");
    } catch (error) {
      if (error instanceof InvalidDataError) func(error.invalid_data);
    }
  },
};
