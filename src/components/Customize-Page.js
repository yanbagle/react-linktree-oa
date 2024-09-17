import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { COLORS } from "../constants/colors";
import "../style/customize-page.css";

export default function CustomizePage({}) {
  const {
    btnColor,
    setBtnColor,
    btnTextColor,
    setBtnTextColor,
    pageColor,
    setPageColor,
  } = useContext(ThemeContext);

  const renderColorOptions = (title, label, val, setVal) => (
    <section className="change-color">
      <p>{title}: </p>
      {Object.values(COLORS).map((color, index) => {
        return (
          <div key={index}>
            <label htmlFor={label}>{color}</label>
            <div className=""></div>
            <input
              type="radio"
              id={color}
              name={label}
              value={color}
              checked={val === color}
              onChange={(e) => {
                setVal(e.target.value);
              }}
            ></input>
          </div>
        );
      })}
    </section>
  );

  return (
    <div className="customize-page">
      <h1>customize page</h1>
      {renderColorOptions(
        "background color",
        "bg-color",
        pageColor,
        setPageColor
      )}
      {renderColorOptions("button color", "btn-color", btnColor, setBtnColor)}
      {renderColorOptions(
        "button text color",
        "btn-text-color",
        btnTextColor,
        setBtnTextColor
      )}
    </div>
  );
}
