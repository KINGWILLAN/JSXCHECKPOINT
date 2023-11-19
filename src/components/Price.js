import React from "react";
import { carBrandJSON } from "../product";
import "bootstrap/dist/css/bootstrap.min.css";

// the component that contains the price section

const Price = () => {
  const carBrand = JSON.parse(carBrandJSON);
  return (
    <>
      <h2>{carBrand.price}</h2>
    </>
  );
};
export default Price;
