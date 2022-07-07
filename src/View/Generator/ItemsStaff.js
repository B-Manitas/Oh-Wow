import { controller } from "model/Main";
import { useEffect, useState } from "react";

import { Picker } from "@react-native-picker/picker";

export const ItemsStaff = ({onChange}) => {
  const [staff, setStaff] = useState(undefined);

  useEffect(() => {
    const default_value = (staff) => onChange(staff[0]._id);
    controller.get.allEmployed(setStaff, default_value);
  }, []);

  if (staff == undefined)
    return <Picker.Item key={0} value={null} label={"loading..."} />;
  else
    return staff.map((item, id) => (
      <Picker.Item key={id} value={item._id} label={item.user.firstname} />
    ));
};
