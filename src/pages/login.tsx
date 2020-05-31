import React from "react";
import Column from "src/components/Column";
import HoracioMessage from "src/components/HoracioMessage";
import Form from "src/components/Form";
import Input from "src/components/Input";
import { FormHandles } from "@unform/core";
import { Buttons, ButtonP, ButtonS } from "src/components/Button";

const Login = () => {
  const handleSubmit = () => {
    console.log("ok");
  };
  const formRef = React.useRef<FormHandles>(null);
  return (
    <>
      <HoracioMessage message="Coloque suas informações aqui para entrar no castelo, Majestade!" />
      <Column>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Senha" />
          <Buttons>
            <ButtonP>Entrar</ButtonP>
            <ButtonS>Cadastrar</ButtonS>
          </Buttons>
        </Form>
      </Column>
    </>
  );
};

export default Login;
