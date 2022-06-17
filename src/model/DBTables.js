export const TableUser = {
  name: "User",
  properties: {
    id_user: "int",
    name: "string",
    firstname: "string",
    tel: "string",
    mail: "string",
    status: "string",
  },
  primaryKey: "id_user",
};

export const TableSalon = {
  name: "Salon",
  properties: {
    id_salon: "int",
    address: "string",
    day_off: "string",
    date_off: "string",
  },
  primaryKey: "id_salon",
};

export const TableEmployee = {
  name: "Employee",
  properties: {
    id_employee: "int",
    id_user: "int",
  },
  primaryKey: "id_employee",
};

export const TablePlanning = {
  name: "Planning",
  properties: {
    id_employee: "int",
    id_rdv: "int",
  },
};

export const TableAppointment = {
  name: "Appointment",
  properties: {
    id_appt: "int",
    id_user: "int",
    id_prestation: "int",
    id_salon: "int",
    id_anonymous: "int?",
    date: "string",
    heure: "int",
  },
  primaryKey: "id_appt",
};

export const TableService = {
  name: "Service",
  properties: {
    id_service: "int",
    nom: "string",
    description: "string",
    prix: "string",
    duree: "int",
  },
  primaryKey: "id_service",
};

export const TableAuthcode = {
  name: "Authcode",
  properties: {
    id_user: "int",
    authcode: "string",
  },
};
