import { controller } from "model/Main";
import { useEffect, useState } from "react";

import { Picker } from "@react-native-picker/picker";

export const ItemsSalon = ({ onChange }) => {
  const [salon, setSalon] = useState();

  useEffect(() => {
    const default_value = (salon) => onChange(salon[0]._id);
    controller.get.allSalons(setSalon, default_value);
  }, []);

  if (salon == undefined)
    return <Picker.Item key={0} value={null} label={"..."} />;
  else
    return salon.map((item, id) => (
      <Picker.Item key={id} value={item._id} label={item.name}/>
    ));
};
