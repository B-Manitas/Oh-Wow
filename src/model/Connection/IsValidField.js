const FORMAT_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const FORMAT_MAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
const FORMAT_PHONE = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const FORMAT_AUTHCODE = /^[0-9]{6}$/;

export default {
  /**
   * Check whether the password meets the requirements of the format.
   * @param {String} password The string.
   * @returns true if and only if all the following conditions are met.
   * - The minimum length of the password is 8 characters.
   * - Contains at least one uppercase letter.
   * - Contains at least one lowercase letter.
   * - Contains at least one number.
   *
   * Otherwise return false.
   */
  isFormatPassword(password) {
    return FORMAT_PASSWORD.test(password);
  },

  /**
   * Check whether the mail meets the requirements of the format.
   * @param {String} password The string.
   * @returns true if and only if all the following conditions are met.
   * - Contains valid characters: digits, uppercase and lowercase english letter.
   * - Contains valid special characters: ! # $ % & ' * + - / = ? ^ _ ` { | } ~.
   * - Contains a single arobase characters.
   * - Don't contains double dot.
   * - The extension domain contain between 2 and 6 characters.
   * - Respect the following mail format: example@address.com
   *
   * Otherwise return false.
   */
  isFormatMail(mail) {
    return FORMAT_MAIL.test(mail);
  },

  /**
   * Check whether the phone number meets the requirements of the format.
   * @param {String} tel The string.
   * @returns true if and only if all the following conditions are met.
   * - Contains digits.
   * - The length of the phone number is 10.
   * - The length of the country calling code is between 2 and 3 digits.
   * - The country calling code start by plus (+) characters.
   *
   * Otherwise return false.
   */
  isFormatPhone(tel) {
    return FORMAT_PHONE.test(tel);
  },

  /**
   * Check whether the authentication code meets the requirements of the format.
   * @param {String} authcode The string.
   * @returns true if and only if all the following conditions are met.
   * - Contains digits.
   * - The length of the phone number is 6.
   *
   * Otherwise return false.
   */
  isFormatAuthcode(authcode) {
    return FORMAT_AUTHCODE.test(authcode);
  },

  /**
   * Check that the login fields are valid.
   * @param {Boolean} is_valid_mail true if mail field is valid, else false.
   * @param {Boolean} is_valid_tel true if tel field is valid, else false.
   * @param {Boolean} is_valid_password true if password field is valid, else false.
   * @returns true if all field are valid. Otherwise, return false.
   */
  isValidFieldLogin(is_valid_mail, is_valid_tel, is_valid_password) {
    return is_valid_mail && is_valid_tel && is_valid_password;
  },
};
