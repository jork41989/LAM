import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardMedia } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";


export default function HistorySlider() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1050px)" });
  const cards = [
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />

      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
  ];

  const tinyCards = [
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item1.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gridColumn: "2/span 2",
      }}
    >
      <CardMedia
        image={"/images/item2.png"}
        style={{ width: "220px", height: "135px" }}
      />
    </div>,
  ];

  let sizeCheck = () => {
    if(isTabletOrMobile){
      return tinyCards
    } else {
      return cards
    }
  }

  return (
    <Carousel autoPlay={false} style={{gridColumn: "2/span 2"}}>
      {sizeCheck()}
    </Carousel>
  );
}


