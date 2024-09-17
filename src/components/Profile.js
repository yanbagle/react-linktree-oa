import React, { useContext, useState } from "react";
import profile from "../mock_data/profile-json";
import "../style/profile.css";

import { ThemeContext } from "../context/ThemeContext";

import SOCIALS from "./socials";

import BarLink from "./Bar-Link";
import SquareLink from "./Square-Link";
import CustomizePage from "./Customize-Page";

export default function Profile() {
  const { pfp, username, bio, groupLinks, socials } = profile;
  const { pageColor } = useContext(ThemeContext);

  const renderLinks = (layout, links) => {
    // todo: make bar and square into constants
    const LinkComponent = layout === "bar" ? BarLink : SquareLink;
    return links.map((link, index) => {
      const { title, img } = link;
      return (
        <LinkComponent key={index} img={img}>
          {title}
        </LinkComponent>
      );
    });
  };

  const renderSocials = () =>
    socials.map((social, index) => {
      const { name, url } = social;
      return (
        <a key={index} href={url} title={`link to ${name}`}>
          <img src={SOCIALS[name]} />
        </a>
      );
    });

  return (
    <div className="profile" style={{ background: pageColor }}>
      <img className="pfp" src={pfp} alt="profile picture" />
      <h2>{username}</h2>
      <h3>{bio}</h3>
      {groupLinks.map((link, index) => {
        const { title, layout, links } = link;
        return (
          <section key={index}>
            <h2>{title}</h2>
            {renderLinks(layout, links)}
          </section>
        );
      })}
      <section>{renderSocials()}</section>
      <CustomizePage />
    </div>
  );
}
