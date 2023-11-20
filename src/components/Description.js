import React from "react";
import { productJSON } from "../product";

import Card from "react-bootstrap/Card";

//  the component that contains the description of  carbrand
const Description = () => {
  const carBrand = JSON.parse(productJSON);
  return <Card.Text align="left"> {products.description}</Card.Text>;
};
export default Description;
