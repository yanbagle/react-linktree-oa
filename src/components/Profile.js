import React, { useContext } from "react";
import profile from "../mock_data/profile";
import { ThemeContext } from "../context/ThemeContext";

export default function Profile() {
  const { pageColor } = useContext(ThemeContext);
  console.log(profile);

  return <div>{pageColor}</div>;
}
