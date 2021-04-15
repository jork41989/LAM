import React from "react";
import Tabs from "./tabs";
import Accordian from "./accordian"
import { useMediaQuery } from "react-responsive";
import './teams.css'



export default function Team() {
const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const styles = {
    teamMain: {
      gridRow: "2 / span 1",
      gridColumn: "1/ span 4",
      display: "grid",
      gridTemplateColumns: "25% 25% 25% 25%",
    },
    teamHead: {
      gridRow: "1",
      gridColumn: "2/ span 2",
      display: "flex",
      alignItems: "center",
    },
    teamHeadNumMain: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    teamHeadNum: {
      fontSize: "135px",
      fontFamily: "Oswald",
      fontWeight: "bold",
      color: "rgba(65, 79, 107, 0.502)",
    },
    teamHeadDotPhraseDiv: {
      display: "flex",
      flexDirection: "column",
    },
    teamHeadPhrase: {
      fontSize: "1.523em",
      fontFamily: "Oswald",
      color: "rgb(65, 79, 107)",
      fontWeight: "bold",
      position: "relative",
      left: "-28px",
      top: "22px",
    },
    teamContentMain: {
      gridRow: "3/ span 1",
      gridColumn: "1/span 4",
    },
  };
  let contCheck = () => {
    if(isTabletOrMobile){
      console.log("acord")
      return <Accordian />;
      
    } else {
      console.log("tab");
      return <Tabs />;
    }
  }

  return (
    <div style={styles.teamMain} className="teamMain">
      <div style={styles.teamHead} className="teamHead">
        <div style={styles.teamHeadNumMain}>
          <div style={styles.teamHeadNum}>02.</div>
          <div style={styles.teamHeadPhrase}>CLIMB</div>
        </div>
        <div>
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </div>
      </div>
      <div style={styles.teamContentMain} id="contentsMain">
        {contCheck()}
      </div>
    </div>
  );
}