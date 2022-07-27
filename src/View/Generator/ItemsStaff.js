// React import
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

// Libraries import
import { controller as ctrl } from "model/Main";

export const ItemsStaff = (props) => {
  // Destructure props
  const { onChange, allOption } = props;

  // Define componnent state
  const [staff, setStaff] = useState();
  const [isInit, setIsInit] = useState(true);

  // On loading componnent
  useEffect(() => {
    if (allOption) ctrl.get.allUserStaff(setStaff);
    else {
      const setDefaultValue = (staff) => onChange(staff[0]._id);
      ctrl.get.allUserStaff(setStaff, setDefaultValue);
    }
  }, []);

  // On change staff
  useEffect(() => {
    if (isInit && staff && allOption) {
      const all = { _id: 0, firstname: "Tous" };
      setStaff((p) => [all, ...p]);
      onChange(all._id);
      setIsInit(false);
    }
  }, [staff]);

  if (!staff)
    return <Picker.Item key={0} value={null} label={"Chargement..."} />;
  else
    return staff.map((item, id) => (
      <Picker.Item key={id} value={item._id} label={item.firstname} />
    ));
};
