// Super-class import
import { SuperController } from "./SuperController";

// Libraries import
import CDate from "model/utils/CDate";

// Constants import
import { YEARS } from "constants/DAYS";
export class OnChange extends SuperController {
  /**
   * On change value month in picker month componnent.
   * @param {Function} setDate The function to set the new date.
   * @param {Number} m The new month.
   */
  month(setDate, m) {
    setDate((d) => new CDate(d.getFullYear(), m, d.getDate()));
  }

  /**
   * On change value year in picker year componnent.
   * @param {Function} setDate The function to set the new date.
   * @param {Number} y The new year.
   */
  year(setDate, y) {
    setDate((d) => new CDate(YEARS[y], d.getMonth(), d.getDate()));
  }

  /**
   * On change value staff in picker staff componnent.
   * @param {Function} setApt The function to set the new staff id.
   * @param {Number} id The new staff ID.
   */
  staff(setApt, id) {
    setApt((p) => ({ ...p, id_staff: id }));
  }
}
