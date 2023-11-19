import React from "react";
import { carBrandJSON } from "../product";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

// the component that contains image
const Image = () => {
  const carBrand = JSON.parse(carBrandJSON);

  return (
    <>
      <div>
        <Card.Img variant="top" src={carBrand.img} />
      </div>
    </>
  );
};
export default Image;
