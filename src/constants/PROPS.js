import { ERROR_TEXT, PLH } from "./TEXTS";
import { STYLES_NAV } from "./STYLES";

export const KEYBOARD_AVOIDING_VIEW = {
  behavior: Platform.OS === "ios" ? "padding" : null,
  keyboardVerticalOffset: Platform.OS === "ios" ? 0 : 0,
};

export const NAVIGATION = {
  style: STYLES_NAV.navButton,
  styleText: STYLES_NAV.navText,
  noShadow: true,
};

export const INPUT_MAIL = {
  text: "Mail",
  placeholder: PLH.mail,
  typeAndroid: "email",
  typeIOS: "emailAddress",
  returnKeyType: "next",
  maxLength: 50,
  keyboardType: "email-address",
  errorText: ERROR_TEXT.mail,
};

export const INPUT_PASSWORD = {
  text: "Mot de passe",
  placeholder: PLH.password,
  secureTextEntry: true,
  autoCorrect: false,
  typeAndroid: "password",
  typeIOS: "password",
  returnKeyType: "done",
  maxLength: 20,
  keyboardType: "default",
  errorText: ERROR_TEXT.password,
};

export const INPUT_FIRSTNAME = {
  text: "Prenom",
  placeholder: PLH.firstname,
  typeAndroid: "name-given",
  typeIOS: "givenName",
  returnKeyType: "next",
  maxLength: 12,
  keyboardType: "default",
  errorText: ERROR_TEXT.name,
};

export const INPUT_LASTNAME = {
  text: "Nom",
  placeholder: PLH.lastname,
  typeAndroid: "name-given",
  typeIOS: "givenName",
  returnKeyType: "next",
  maxLength: 12,
  keyboardType: "default",
  errorText: ERROR_TEXT.name,
};

export const INPUT_PHONE = {
  text: "Telephone (+216)",
  placeholder: PLH.phone,
  typeAndroid: "tel",
  typeIOS: "telephoneNumber",
  returnKeyType: "next",
  maxLength: 11,
  keyboardType: "number-pad",
  errorText: ERROR_TEXT.phone,
};

export const INPUT_SALONS = {
  text: "Nom du salon",
  returnKeyType: "next",
  maxLength: 15,
  placeholder: PLH.salon,
  secureTextEntry: false,
  errorText: ERROR_TEXT.name,
};

export const INPUT_ADDRESS = {
  text: "Adresse",
  returnKeyType: "next",
  maxLength: 50,
  placeholder: PLH.adress,
  secureTextEntry: false,
  errorText: ERROR_TEXT.name,
};

export const INPUT_COORD = {
  returnKeyType: "next",
  maxLength: 10,
  placeholder: PLH.coord,
  keyboardType: "numeric",
  errorText: ERROR_TEXT.number,
};

export const INPUT_PRICE = {
  text: "Prix en dinar tunisien",
  maxLength: 5,
  keyboardType: "numeric",
  placeholder: PLH.price,
  errorText: ERROR_TEXT.number,
};

export const INPUT_SERVICE = {
  text: "Nom",
  placeholder: PLH.serviceName,
  returnKeyType: "next",
  maxLength: 15,
  errorText: ERROR_TEXT.name,
};

export const INPUT_DURATION = {
  text: "Durée",
  placeholder: PLH.duration,
  returnKeyType: "next",
  maxLength: 5,
  errorText: ERROR_TEXT.duration,
};
