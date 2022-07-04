import { SuperController } from "./SuperController";

export class Navigation extends SuperController {
  searchToUser(navigation, user) {
    navigation.navigate("Client", { data: user });
  }
}
