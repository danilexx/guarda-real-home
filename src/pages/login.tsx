import React from "react";
import Column from "src/components/Column";
import HoracioMessage from "src/components/HoracioMessage";
import Form from "src/components/Form";
import Input from "src/components/Input";
import { FormHandles } from "@unform/core";
import { Buttons, ButtonP, ButtonS } from "src/components/Button";
import { navigate } from "gatsby";
import isValid from "src/utils/isValid";
import setIntl from "src/utils/setIntl";
import * as Yup from "yup";

setIntl();
const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});
const Login = () => {
  const formRef = React.useRef<FormHandles>(null);
  const handleSubmit = async (data: any) => {
    const valid = await isValid(schema, data, formRef);
    if (valid) {
      navigate("/welcome");
    }
  };
  return (
    <>
      <HoracioMessage message="Coloque suas informações aqui para entrar no castelo, Majestade!" />
      <Column>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Senha" type="password" />
          <Buttons>
            <ButtonP type="submit">Entrar</ButtonP>
            <ButtonS>Cadastrar</ButtonS>
          </Buttons>
        </Form>
      </Column>
    </>
  );
};

export default Login;
