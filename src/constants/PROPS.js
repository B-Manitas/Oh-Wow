import { ERROR_TEXT, PLH } from "./TEXTS";
import { STYLES_NAV } from "./STYLES";

export const KEYBOARD_AVOIDING_VIEW = {
  behavior: Platform.OS === "ios" ? "padding" : null,
  keyboardVerticalOffset: Platform.OS === "ios" ? 0 : 0,
};

export const NAVIGATION = {
  style: STYLES_NAV.navButton,
  styleText: STYLES_NAV.navText,
  shadow: false,
};

export const INPUT_MAIL = {
  info: "Mail",
  placeholder: PLH.mail,
  typeAndroid: "email",
  typeIOS: "emailAddress",
  returnKeyType: "next",
  maxLength: 50,
  keyboardType: "email-address",
  secureTextEntry: false,
  errorText: ERROR_TEXT.mail,
};

export const INPUT_PASSWORD = {
  info: "Mot de passe",
  placeholder: PLH.password,
  secureTextEntry: true,
  typeAndroid: "password",
  typeIOS: "password",
  returnKeyType: "done",
  maxLength: 20,
  keyboardType: "default",
  errorText: ERROR_TEXT.password,
};

export const INPUT_FIRSTNAME = {
  info: "Prenom",
  placeholder: PLH.firstname,
  typeAndroid: "name-given",
  typeIOS: "givenName",
  returnKeyType: "next",
  maxLength: 12,
  keyboardType: "default",
  secureTextEntry: false,
  errorText: ERROR_TEXT.name,
};

export const INPUT_LASTNAME = {
  info: "Nom",
  placeholder: PLH.lastname,
  typeAndroid: "name-given",
  typeIOS: "givenName",
  returnKeyType: "next",
  maxLength: 12,
  keyboardType: "default",
  secureTextEntry: false,
  errorText: ERROR_TEXT.name,
};

export const INPUT_PHONE = {
  info: "Telephone",
  placeholder: PLH.phone,
  typeAndroid: "tel",
  typeIOS: "telephoneNumber",
  returnKeyType: "next",
  maxLength: 14,
  keyboardType: "number-pad",
  secureTextEntry: false,
  errorText: ERROR_TEXT.name,
};
