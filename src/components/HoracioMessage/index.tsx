import React from "react";
import { Container, MessageContainer, HoracioTalking } from "./styles";

interface Props {
  message: string;
}

const HoracioMessage: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <MessageContainer>{message}</MessageContainer>
      <HoracioTalking />
    </Container>
  );
};

export default HoracioMessage;
