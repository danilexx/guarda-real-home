import React from "react";
import Column from "src/components/Column";
import HoracioMessage from "src/components/HoracioMessage";
import Form from "src/components/Form";
import Input, { TextArea } from "src/components/Input";
import { FormHandles } from "@unform/core";
import { Buttons, ButtonP, ButtonS } from "src/components/Button";
import { Title } from "src/styles/register";
import HoracioPopup from "src/components/HoracioPopup";
import { useToggle } from "react-use";
import isValid from "src/utils/isValid";
import setIntl from "src/utils/setIntl";

import * as Yup from "yup";

setIntl();
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
});
const Support = () => {
  const formRef = React.useRef<FormHandles>(null);
  const [isSend, toggleSend] = useToggle(false);
  const handleSubmit = async (data: any) => {
    const valid = await isValid(schema, data, formRef);
    if (valid) {
      toggleSend(true);
    }
  };
  return (
    <>
      <Column>
        <Title>Fale Conosco</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          <Input name="name" placeholder="Nome" />
          <TextArea
            rows={5}
            name="message"
            placeholder="Escreva sua mensagem aqui"
          />

          <Buttons>
            <ButtonP>Enviar</ButtonP>
          </Buttons>
        </Form>
      </Column>
      <HoracioPopup
        show={isSend}
        close={() => {
          toggleSend(false);
        }}
        message="Obrigado por entrar em contato! Responderemos assim que possível!"
      />
    </>
  );
};

export default Support;
