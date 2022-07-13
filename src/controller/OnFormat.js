import { SuperController } from "./SuperController";

export class OnFormat extends SuperController {
  phone(prevtext, text, setText) {
    if (text > prevtext && text.length < 14)
      text = text.replace(/\D/g, "").replace(/.{2}/g, "$& ");

    if (setText) setText(text);
    else return text;
  }

  time(text, setText) {
    text = text.replace(/[^0-9h]/g, "");
    if (text.length > 1) text = text.replace(/^0+/, "");
    if (text.charAt(0) === "") text = "0";
    
    if (setText) setText(text);
    
    return text;
  }
  
  price(text, setText) {
    if (text.charAt(0) === "") text = "0";
    if (text.length > 1) text = text.replace(/^0+/, "");
    setText(text);
  }

  float(text) {
    text = text.replace(",", ".");
    text = text.replace(/[^0-9\.]/g, "");
    return text;
  }
}
