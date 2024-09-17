import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../style/bar-link.css";

export default function BarLink({ children, img }) {
  // todo: implement link animations

  const { btnColor, btnTextColor } = useContext(ThemeContext);
  const style = { background: btnColor, color: btnTextColor };

  return (
    <a href="#" className="link" style={style}>
      <img src={img} />
      <p>{children}</p>⋮ {/* implement link options */}
    </a>
  );
}
