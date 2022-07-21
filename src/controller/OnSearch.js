import { SuperController } from "./SuperController";

export class OnSearch extends SuperController {
  match(item, query) {
    query = query.toLowerCase();
    return item.includes(query);
  }

  services(services, query) {
    if (query === "") return services;
    else return services.filter((i) => this.match(i.name.toLowerCase(), query));
  }
}
