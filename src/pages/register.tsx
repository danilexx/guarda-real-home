import React from "react";
import Column from "src/components/Column";
import HoracioMessage from "src/components/HoracioMessage";
import Form from "src/components/Form";
import Input from "src/components/Input";
import { FormHandles } from "@unform/core";
import { Buttons, ButtonP, ButtonS } from "src/components/Button";
import { Title } from "src/styles/register";

const Register = () => {
  const handleSubmit = () => {
    console.log("ok");
  };
  const formRef = React.useRef<FormHandles>(null);
  return (
    <>
      <Column>
        <Title>Fazer Cadastro</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          <Input name="name" placeholder="Nome" />
          <Input name="password" placeholder="Senha" />
          <Input name="passwordConfirmation" placeholder="Confirmar a Senha" />
          <Buttons>
            <ButtonP>Enviar</ButtonP>
          </Buttons>
        </Form>
      </Column>
      <HoracioMessage message="Não se preocupe, enviaremos todas as instruções por email!" />
    </>
  );
};

export default Register;
