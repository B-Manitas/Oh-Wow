import Utils from "../model/Utils";
import { PHOTO } from "./IMAGES";

export const SERVICES = [
  {
    name: "Egestas Fringilla",
    price: Utils.randomInt(100),
    duration: Utils.randomInt(100),
    img: PHOTO.service_1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "Curabitur",
    price: Utils.randomInt(100),
    duration: Utils.randomInt(100),
    img: PHOTO.service_2,
    description:
      "Aliquam erat volutpat. Vivamus vehicula pharetra eros, in convallis felis tincidunt a. Vivamus ut dui ultricies, viverra ante sed, imperdiet mi. Quisque convallis lacus in tincidunt pulvinar.",
  },

  {
    name: "Volutpat",
    price: Utils.randomInt(100),
    duration: Utils.randomInt(100),
    img: PHOTO.service_3,
    description:
      "incidunt sit amet sapien. Proin maximus, enim sit amet feugiat condimentum, justo mi fringilla nisl, in vehicula enim ipsum non odio.",
  },
];
