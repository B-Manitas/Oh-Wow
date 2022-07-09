import { SuperController } from "./SuperController";

export class OnPress extends SuperController {
  aptDay(setApt, setDate, date) {
    setDate(date);
    setApt((p) => ({ ...p, date: date }));
  }

  aptStaff(setApt, id) {
    setApt((p) => ({ ...p, id_staff: id }));
  }

  aptHours(setApt, hours, date) {
    setApt((p) => ({ ...p, date: date.setTime(hours) }));
  }

  radioOffer(setApt, setRadio, id) {
    const offer = id == 1 ? this.frontend.schemaAnonymous() : null;

    setApt((p) => ({ ...p, offer }));
    setRadio(id);
  }
}
