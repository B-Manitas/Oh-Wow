// Super-class import
import { ErrorsManager } from "./ErrorsManager";

export class Controller extends ErrorsManager {
  constructor(backend, frontend) {
    super();
    this.backend = backend;
    this.frontend = frontend;
  }

  async signup(data, func, navigation) {
    try {
      const id = await this.frontend.signup(data);
      Alert.alert("Welcome", `ID: ${id}`);
      navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }

  async login(data, func, navigation) {
    try {
      const id = await this.frontend.login(data);
      Alert.alert("Welcome Back", `ID: ${id}`);
      navigation.navigate("Home");
    } catch (error) {
      this.manageAllErrors(error, func);
    }
  }
}
