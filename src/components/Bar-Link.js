import React, { useContext } from "react";
import profile from "../mock_data/profile-json";
import { ThemeContext } from "../context/ThemeContext";
import "../style/bar-link.css";

export default function BarLink({ children, img }) {
  // todo: implement link animations
  return (
    <a href="#" className="link">
      <img src={img} />
      <p>{children}</p>⋮ {/* implement link options */}
    </a>
  );
}
