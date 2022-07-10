import { controller } from "model/Main";
import { useEffect, useState } from "react";

import { Picker } from "@react-native-picker/picker";

export const ItemsStaff = ({ onChange, all }) => {
  const [staff, setStaff] = useState(undefined);
  const [is_init, setIsInit] = useState(true);

  useEffect(() => {
    if (all) controller.get.allEmployed(setStaff);
    else {
      const setDefaultValue = (staff) => onChange(staff[0]._id);
      controller.get.allEmployed(setStaff, setDefaultValue);
    }
  }, []);

  useEffect(() => {
    if (is_init && staff && all) {
      const all = { _id: 0, firstname: "Tous" };
      setStaff((p) => [all, ...p]);
      onChange(all._id);
      setIsInit(false);
    }
  }, [staff]);

  if (staff == undefined)
    return <Picker.Item key={0} value={null} label={"Chargement..."} />;
  else
    return staff.map((item, id) => {
      return <Picker.Item key={id} value={item._id} label={item.firstname} />;
    });
};
