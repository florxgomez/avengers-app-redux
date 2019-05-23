import React from "react";
import Card from "./Card";

const CardList = ({ images }) => {
  return (
    <div>
      {images.map((avenger, i) => {
        return (
          <Card
            key={i}
            name={images[i].name}
            avenger={images[i].avenger}
            src={images[i].src}
          />
        );
      })}
    </div>
  );
};

export default CardList;
