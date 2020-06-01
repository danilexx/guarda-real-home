import React from "react";
import Column from "src/components/Column";
import { Title } from "src/styles";
import { Avatar, AvatarDesc } from "src/styles/newPrince";
import Form from "src/components/Form";
import Input, { TextArea } from "src/components/Input";
import * as Yup from "yup";
import isValid from "src/utils/isValid";
import setIntl from "src/utils/setIntl";
import { FormHandles } from "@unform/core";
import { Buttons, ButtonP, ButtonS } from "src/components/Button";
import Selector from "src/components/Selector";
import InputMask from "src/components/InputMask";

setIntl();
const titleOptions = [
  { label: "Principe", value: "principe" },
  { label: "Princesa", value: "princesa" },
  { label: "Duque", value: "duque" },
  { label: "Duquesa", value: "principe" }
];
const afiliationOptions = [
  { label: "Filho ou Filha", value: "son" },
  { label: "Neto ou Neta", value: "grandson" },
  { label: "Bis-Neto ou Bis-Neta", value: "grand-grandson" },
  { label: "Sobrinho ou Sobrinha", value: "sobrinho" },
  { label: "Afilhado ou Afilhada", value: "afilhado" }
];
import { navigate } from "gatsby";
const schema = Yup.object().shape({
  name: Yup.string().required(),
  birth: Yup.string().required(),
  cpf: Yup.string().required(),
  title: Yup.string().required(),
  afiliation: Yup.string().required(),
  nickname: Yup.string().required()
});
const newPrince = () => {
  const formRef = React.useRef<FormHandles>(null);
  const handleSubmit = async (data: any) => {
    const valid = await isValid(schema, data, formRef);
    if (valid) {
      navigate("/dashboard");
    }
  };
  return (
    <Column>
      <Title>Incluir príncipe ou princesa</Title>
      <Avatar />
      <AvatarDesc>Avatar</AvatarDesc>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Selector name="title" options={titleOptions} placeholder="Titulo" />
        <Input name="nickname" placeholder="Apelido (como ele será chamado)" />
        <InputMask
          mask="99/99/9999"
          name="birth"
          placeholder="Data de Nascimento"
        />
        <InputMask mask="999.999.999-99" name="cpf" placeholder="CPF" />
        <Selector
          name="afiliation"
          options={afiliationOptions}
          placeholder="Relação de Parentesco"
        />

        <Buttons>
          <ButtonP>Enviar</ButtonP>
          <ButtonS as="a" href="/welcome">
            Voltar
          </ButtonS>
        </Buttons>
      </Form>
    </Column>
  );
};

export default newPrince;
