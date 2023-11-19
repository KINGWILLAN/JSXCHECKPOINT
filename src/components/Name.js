import React from "react";
import { carBrandJSON } from "../product";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Name = () => {
  const carBrand = JSON.parse(carBrandJSON);
  return (
    <>
      <Card.Title>{carBrand.productName}</Card.Title>
    </>
  );
};

export default Name;
