import React from "react";
import { Container, MessageContainer, HoracioTalking, Wrapper } from "./styles";

interface Props {
  message: string;
  width?: string;
}

const HoracioMessage: React.FC<Props> = ({ message, width }) => {
  return (
    <Container>
      <Wrapper>
        <MessageContainer width={width}>{message}</MessageContainer>
        <HoracioTalking />
      </Wrapper>
    </Container>
  );
};

export default HoracioMessage;
