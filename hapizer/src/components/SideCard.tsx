import { Card } from "@chakra-ui/react";
import React from "react";
import "./Styles/SideCard.css";

const SideCard = () => {
  return (
    <Card
      className="side-card"
      width={300}
      borderTopRightRadius={50}
      height="100%"
      borderBottomRightRadius={50}
      background={"rgba(245, 245, 245, 0.5)"}
    ></Card>
  );
};

export default SideCard;
