import React from "react";
import './history.css'
import HistorySlider from "./historySlider";


export default function HistoryPage() {
  return (
    <div
      id="historyMain"
      style={{
        background: 'url("/images/historyBack.png")',
        backgroundSize: "cover",
      }}
    >
      <div id="historyText">
        <div className="numHead">
          <div className="_01_">01.</div>
          <div className="_HISTORY">HISTORY</div>
        </div>
        <div className="mainTextContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
          viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
          Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
          scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
          hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
          congue.
        </div>
      </div>

      <div className="bottomBar">
        <HistorySlider/>
      </div>
    </div>
  );
}