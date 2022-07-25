import { SuperController } from "./SuperController";

export class OnSearch extends SuperController {
  match(item, query) {
    query = query.toLowerCase();
    return item?.toLowerCase().includes(query);
  }

  services(services, query) {
    if (query === "") return services;
    else return services.filter((i) => this.match(i.name, query));
  }

  users(users, query) {
    if (query === "") return users;
    else
      return users.filter(
        (u) =>
          this.match(u.fisrtname, query) ||
          this.match(u.lastname, query) ||
          this.match(u.phone, query) ||
          (this.match("administrateur", query) && u.is_admin) ||
          (this.match("employé", query) && u.id_salon != null && !u.is_admin)
      );
  }
}
