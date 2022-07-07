import React from "react";

import Round from "./Round";

const Hour = ({ hour, is_available, func, is_selected }) => {
  const colors = is_available ? "#383838" : "#CECECE";

  return (
    <Round
      size={40}
      text={hour}
      colors={colors}
      enabled={is_available}
      func={func}
      style_ctn_enabled={
        is_selected && { backgroundColor: "#4489C5", borderColor: "#4489C5" }
      }
      style_txt_enabled={is_selected && { color: "#fff" }}
    />
  );
};

export default Hour;
