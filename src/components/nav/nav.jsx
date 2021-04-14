import React from "react";
import {  NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './nav.css'



export default function NavBar() {
  const Location = useLocation()
  let logo = (
    <NavLink to="/">
      <div
        id="logo"
        style={{
          background: `url("/images/logo.png")`,
          backgroundSize: "cover",
          height: "43px",
          width: "43px",
        }}
      ></div>
    </NavLink>
  );
  let fontColor = {
    color: "rgb(254, 254, 255)",
  };

  if (Location.pathname !== "/"){
    logo = (
      <NavLink to="/">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            id="logo"
            style={{
              background: `url("/images/logo.png")`,
              backgroundSize: "cover",
              height: "43px",
              width: "43px",
            }}
          ></div>
          <div
            style={{
              background: `url("/images/LAMount.png")`,
              backgroundSize: "cover",
              height: "43px",
              width: "110px",
              marginLeft: "5px",
            }}
          ></div>
        </div>
      </NavLink>
    );
    fontColor = {
      color: "#414f6b",
      "a:visited": {
        color: "#414f6b",
      },
    };
  } 
  return (
    <div id="nav">
      {logo}
      <div id="links" style={fontColor}>
        <NavLink to="/history" className="namelink" style={fontColor}>
          <div className="navLink">01. HISTORY</div>
        </NavLink>
        <NavLink to="/team" className="namelink" style={fontColor}>
          <div>02. TEAM</div>
        </NavLink>
      </div>
    </div>
  );
}
