import { PLH } from "./TEXTS";

export const KEYBOARD_AVOIDING_VIEW = {
  behavior: Platform.OS === "ios" ? "padding" : null,
  keyboardVerticalOffset: Platform.OS === "ios" ? 0 : 0,
};

export const INPUT_MAIL = {
  info: "Mail *",
  plh: PLH.mail,
  typeAndroid: "email",
  typeIOS: "emailAddress",
  returnKeyType: "next",
  maxLength: 50,
  keyboardType: "email-address",
  secureTextEntry: false,
};

export const INPUT_PASSWORD = {
  info: "Mot de passe *",
  plh: PLH.password,
  secureTextEntry: true,
  typeAndroid: "password",
  typeIOS: "password",
  returnKeyType: "done",
  maxLength: 20,
  keyboardType: "default",
};
