import React, {useState} from "react";
import {Mountain1, Mountain2} from './mountains'

export default function Tabs() {
  const [tab, setTab] = useState("mountain 1")
  let styles = {
    tabMain: {
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
      gridTemplateRows: "42px auto",
      height: "100%"
    },
    tabHead: {
      gridRow: "1/ span 1",
      gridColumn: "1 / span 4",
      backgroundColor: "#414f6b",
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
    },
    tabContent: {
      gridRow: "2",
      gridColumn: "1/ span 4",
    },
    tabItems: {
      gridColumn: "2/ span 1",
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
  let tabCheck = ()=> {
    if(tab === "mountain 1") {
      return Mountain1
    } else{
      return Mountain2
    }
  }

  let tabChange = (e) => {
    setTab(e.target.id);
  }

return (
  <div style={styles.tabMain}>
    <div style={styles.tabHead}>
      <div style={styles.tabItems}>
        <div style={styles.tabItem} onClick={tabChange} id="mountain 1">
          MOUNTAIN 1
        </div>
        <div style={styles.tabItem} onClick={tabChange} id="mountain 2">
          MOUNTAIN 2
        </div>
      </div>
    </div>
    <div style={styles.tabContent}>{tabCheck()}</div>
  </div>
);
}