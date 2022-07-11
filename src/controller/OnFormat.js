import { SuperController } from "./SuperController";

export class OnFormat extends SuperController {
  phone(prevtext, text, setText) {
    if (text > prevtext && text.length < 14)
      text = text.replace(/\D/g, "").replace(/.{2}/g, "$&.");

    setText(text);
  }

  time(text, setText) {
    if (text.charAt(0) === "") text = "0";
    if (text.length > 1) text = text.replace(/^0+/, "");
    text = text.replace(/[^0-9h]/g, "");
    setText(text);
  }

  price(text, setText) {
    if (text.charAt(0) === "") text = "0";
    setText(text);
  }
}
