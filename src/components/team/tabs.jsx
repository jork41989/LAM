import React, { useState } from "react";
import { Mountain1, Mountain2 } from "./mountains";

export default function Tabs() {
  const [tab, setTab] = useState("mountain 1");
  let styles = {
    tabMain: {
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
      gridTemplateRows: "42px auto",
      height: "100%",
    },
    tabHead: {
      gridRow: "1/ span 1",
      gridColumn: "1 / span 4",
      backgroundColor: "#414f6b",
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
    },
    tabContent: {
      gridRow: "2 / span 1",
      gridColumn: "1/ span 4",
    },
    tabItems: {
      gridColumn: "2 / span 2",
      display: "flex",
      color: "#b0b4be",
      fontFamily: "Oswald",
      fontWeight: "bold",
      fontSize: "20pt",
    },
    tabItem: {
      width: "140px",
      paddingLeft: "5px",
      cursor: "pointer",
    },
  };
  let tabCheck = () => {
    switch (tab) {
      case "mountain1":
        document.getElementById("mountain1").classList.add("selected")
        document.getElementById("mountain2").classList.remove("selected");
        return Mountain1;
      case "mountain2":
        document.getElementById("mountain2").classList.add("selected");
        document.getElementById("mountain1").classList.remove("selected");
        return Mountain2;
      default:
        return Mountain1;
    }
  };

  let tabChange = (e) => {
    setTab(e.target.id);
  };

  return (
    <div style={styles.tabMain}>
      <div style={styles.tabHead}>
        <div style={styles.tabItems}>
          <div
            style={styles.tabItem}
            onClick={tabChange}
            class="selected"
            id="mountain1"
          >
            MOUNTAIN 1
          </div>
          <div style={styles.tabItem} onClick={tabChange} id="mountain2">
            MOUNTAIN 2
          </div>
        </div>
      </div>
      <div style={styles.tabContent}>{tabCheck()}</div>
    </div>
  );
}
