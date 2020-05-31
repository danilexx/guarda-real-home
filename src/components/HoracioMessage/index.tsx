import React from "react";
import { Container, MessageContainer, HoracioTalking, Wrapper } from "./styles";

interface Props {
  message: string;
}

const HoracioMessage: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <Wrapper>
        <MessageContainer>{message}</MessageContainer>
        <HoracioTalking />
      </Wrapper>
    </Container>
  );
};

export default HoracioMessage;
