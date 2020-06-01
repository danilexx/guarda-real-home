import React from "react";
import { Container, Icon, Info, Name, Value } from "./styles";
export { MonetaryCards } from "./styles";
interface Props {
  icon: string;
  name: string;
  value: string;
}

const MonetaryCard: React.FC<Props> = ({ icon, name, value, ...props }) => {
  return (
    <Container {...props}>
      <Icon src={icon} />
      <Info>
        <Name>{name}</Name>
        <Value>{value}</Value>
      </Info>
    </Container>
  );
};

export default MonetaryCard;
