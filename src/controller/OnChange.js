import { YEARS } from "../constants/DAYS";
import CDate from "../model/utils/CDate";
import { SuperController } from "./SuperController";

export class OnChange extends SuperController {
  month(setDate, m) {
    setDate((d) => new CDate(d.getFullYear(), m, d.getDate()));
  }

  year(setDate, y) {
    setDate((d) => new CDate(YEARS[y], d.getMonth(), d.getDate()));
  }
}
