import React from "react";
import "./Header.css";
import {
  useFocusable,
  FocusContext
} from "@noriginmedia/norigin-spatial-navigation";
import ListItem from "./ListItem";

export const Header = () => {
  const { ref, focusKey } = useFocusable();
  const menus = ["Home", "Movies", "Shows", "VIP"];
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <nav id="main-navbar">
          {menus.map((menu, index) => {
            return <ListItem name={menu} key={index} />;
          })}
        </nav>
      </div>
    </FocusContext.Provider>
  );
};
