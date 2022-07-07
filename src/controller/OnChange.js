import { YEARS } from "../constants/DAYS";
import Calendars from "../model/Calendars";
import { SuperController } from "./SuperController";

export class OnChange extends SuperController {
  month(setDate, m) {
    setDate((d) => new Date(d.getFullYear(), m, d.getDate()));
  }

  year(setDate, y) {
    setDate((d) => new Date(YEARS[y], d.getMonth(), d.getDate()));
  }
}
