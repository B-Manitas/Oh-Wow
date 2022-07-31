// Super-class import
import { SuperController } from "./SuperController";

export class OnFormat extends SuperController {
  /**
   * Formatting phone text in user input.
   * @param {String} prevtext The previous text.
   * @param {String} text The new text.
   * @param {Function} setText Function to set the text formatted.
   * @returns the text formatted.
   */
  phone(prevtext, text, setText) {
    // Add space only if user add text. Prevent formatting on removed text.
    if (text > prevtext && text.length < 13)
      text = text.replace(/\D/g, "").replace(/.{2}/g, "$& ");

    if (setText) setText(text);
    else return text;
  }

  /**
   * Formatting price text in user input.
   * @param {String} text The new text.
   * @param {Function} setText Function to set the text formatted.
   * @returns the text formatted.
   */
  integer(text, setText) {
    // Remove begin zero chars.
    if (text.length > 1) text = text.replace(/^0+/, "");
    if (text.charAt(0) === "") text = "0";

    if (setText) setText(text);
    return text;
  }

  /**
   * Formatting float text in user input.
   * @param {String} text The new text.
   * @param {Function} setText Function to set the text formatted.
   * @returns the text formatted.
   */
  float(text) {
    text = text.replace(",", ".");
    text = text.replace("..", ".");
    text = text.replace(/[^0-9-\.]/g, "");
    return text;
  }

  /**
   * Formatting time text in user input.
   * @param {String} text The new text.
   * @param {Function} setText Function to set the text formatted.
   * @returns the text formatted.
   */
  time(text, setText) {
    text = text.replace(/[^0-9h]/g, "");
    return this.integer(text, setText);
  }

  dateOff(prevtext, text, setText) {
    if (prevtext < text) {
      // Remove extra characters
      text = text.replace(/[^0-9]/g, "");

      // Add slash every two digits.
      text = text.replace(/[0-9]{2}/g, "$&/");

      // Add comma every DD/DD pattern with D a digit.
      text = text.replace(/([0-9]{2})\/([0-9]{2})/g, "$&;");

      // Replace ;/ by ;
      text = text.replace(/;\//g, ";");
    }

    if (setText) setText(text);
    else return text;
  }
}
