import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

const ListItem = (props) => {
  const { ref, focused } = useFocusable();

  return (
    <li ref={ref} className={focused ? "menu-focused" : ""}>
      {props.name}
    </li>
  );
};

export default ListItem;
