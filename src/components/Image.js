import React from "react";
import { productJSON } from "../product";
import Card from "react-bootstrap/Card";

// the component that contains image
const Image = () => {
  const products = JSON.parse(productJSON);

  return <Card.Img variant="top" src={carBrand.img} />;
};
export default Image;
