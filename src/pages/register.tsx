import React from "react";
import Column from "src/components/Column";
import HoracioMessage from "src/components/HoracioMessage";
import Form from "src/components/Form";
import Input from "src/components/Input";
import { FormHandles } from "@unform/core";
import { Buttons, ButtonP, ButtonS } from "src/components/Button";
import { Title } from "src/styles/register";
import isValid from "src/utils/isValid";
import setIntl from "src/utils/setIntl";
import * as Yup from "yup";
import { navigate } from "gatsby";

setIntl();
const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  passwordConfirmation: Yup.string().required()
});
const Register = () => {
  const formRef = React.useRef<FormHandles>(null);
  const handleSubmit = async (data: any) => {
    const valid = await isValid(schema, data, formRef);
    if (valid) {
      navigate("/welcome");
    }
  };
  return (
    <>
      <Column>
        <Title>Fazer Cadastro</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          <Input name="name" placeholder="Nome" />
          <Input name="password" placeholder="Senha" type="password" />
          <Input
            name="passwordConfirmation"
            placeholder="Confirmar a Senha"
            type="password"
          />
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
