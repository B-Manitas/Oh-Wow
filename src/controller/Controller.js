import { Alert } from "react-native";

// Import Custom Exceptions
import InvalidDataError from "exceptions/InvalidDataError";
import InvalidSchemaError from "exceptions/InvalidSchemaError";
import NetworkError from "exceptions/NetworkError";
import NetworkStatusError from "exceptions/NetworkStatusError";
import UserAlreadyExist from "exceptions/UserAlreadyExist";

export class Controller {
  constructor(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;
  }

  async signup(data, func, navigation) {
    try {
      const id = await this.frontend.signup(data);
      Alert.alert("Welcome", `ID: ${id}`);
      navigation.navigate("Home");
    } catch (error) {
      if (error instanceof InvalidDataError)
        func((prev) => ({ ...prev, ...error.invalid_data }));
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
  }

  async login(data, func, navigation) {
    try {
      const id = await this.frontend.login(data);
      console.log(id);
      Alert.alert("Welcome Back", `ID: ${id}`);
      navigation.navigate("Home");
    } catch (error) {
      if (error instanceof InvalidDataError)
        func((prev) => ({ ...prev, ...error.invalid_data }));
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
  }
}
