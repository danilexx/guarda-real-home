import React from "react";
import HoracioMessage from "../HoracioMessage";
import { Overlay, AbsoluteWrapper } from "./styles";
import { useLockBodyScroll } from "react-use";

interface Props {
  message: string;
  show: boolean;
  close: any;
}

const HoracioPopup: React.FC<Props> = ({ message, show, close }) => {
  useLockBodyScroll(show);
  return (
    <Overlay onClick={close} show={show}>
      <AbsoluteWrapper>
        <HoracioMessage width="40rem" message={message} />
      </AbsoluteWrapper>
    </Overlay>
  );
};

export default HoracioPopup;
