import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Profile() {
  const { pageColor } = useContext(ThemeContext);

  return <div>{pageColor}</div>;
}
