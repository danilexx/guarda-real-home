import React from "react";
import { Container, RoyalIcon, Info, RoyalName, RoyalAge } from "./styles";
export { RoyalFamily } from "./styles";

const RoyalCard: React.FC = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <RoyalIcon />
      <Info>
        <RoyalName>Príncipe Vinícius</RoyalName>
        <RoyalAge>7 anos</RoyalAge>
        {children}
      </Info>
    </Container>
  );
};

export default RoyalCard;
