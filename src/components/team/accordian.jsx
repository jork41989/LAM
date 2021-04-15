import React, { useState } from "react";
import { Mountain1, Mountain2 } from "./mountains";
import "./mountains.css";


export default function Accordian() {

  let styles = {
    tabHead: {
      gridRow: "1/ span 1",
      gridColumn: "1 / span 4",
      backgroundColor: "#414f6b",
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
    },
    tabItems: {
      gridColumn: "2 / span 2",
      display: "flex",
      color: "#b0b4be",
      fontFamily: "Oswald",
      fontWeight: "bold",
      fontSize: "20pt",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  let acordChange = (e) => {
    let mountain = e.target.id
    let mountCont = document.getElementById(mountain + "Cont")
    let mount1 = document.getElementById("mount1");
    let mount1Cont = document.getElementById("mount1Cont");
    let mount2 = document.getElementById("mount2");
    let mount2Cont = document.getElementById("mount2Cont");
    console.log(mountCont)
    switch(mountain){
      case "mount1":
        mount1.classList.add("selected")
        mount2.classList.remove("selected");
        mount1Cont.classList.remove("hidden")
        mount2Cont.classList.add("hidden")
        break;
      case "mount2":
        mount2.classList.add("selected");
        mount1.classList.remove("selected");
         mount2Cont.classList.remove("hidden");
         mount1Cont.classList.add("hidden");
        break;
      default:
        break;
    }
  }

  return (
    <div style={{ height: "91%" }}>
      <div style={styles.tabHead}>
        <div style={styles.tabItems} id="mount1" className="selected" onClick={acordChange}>
          Mountain 1
        </div>
      </div>
      <div style={{ height: "100%" }} id="mount1Cont">
        {Mountain1}
      </div>
      <div style={styles.tabHead}>
        <div style={styles.tabItems} id="mount2" onClick={acordChange}>
          Mountain 2
        </div>
      </div>
      <div style={{ height: "100%" }} className={"hidden"} id="mount2Cont">
        {Mountain2}
      </div>
    </div>
  );
}