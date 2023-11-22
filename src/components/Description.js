import React from "react";
import { carBrandJSON } from "../product";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
//  the component that contains the description of  carbrand
const Description = () => {
  const carBrand = JSON.parse(carBrandJSON);
  return (
    <>
      <Card.Text>{carBrand.description}</Card.Text>
    </>
  );
};
export default Description;
