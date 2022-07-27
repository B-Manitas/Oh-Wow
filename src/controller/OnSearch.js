import { SuperController } from "./SuperController";

export class OnSearch extends SuperController {
  /**
   * Test if item string containing query string.
   * @param {String} item The item string to be tested.
   * @param {String} query The query string.
   * @returns True if item contains query string. Otherwise, return false.
   */
  match(item, query) {
    query = query.toLowerCase();
    return item?.toLowerCase().includes(query);
  }

  /**
   * Get the filtered services matched to query in search bar.
   * @param {Array} services The services array to be fitered
   * @param {String} query The query string entered by the user in the search bar.
   * @returns arrays filtered containing service which matched.
   * If no matched, return services.
   */
  services(services, query) {
    if (query === "") return services;
    else return services.filter((i) => this.match(i.name, query));
  }

  /**
   * Get the filtered users matched to query in search bar.
   * @param {Array} users The users array to be fitered
   * @param {String} query The query string entered by the user in the search bar.
   * @returns arrays filtered containing users which matched.
   * If no matched, return users.
   */

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
