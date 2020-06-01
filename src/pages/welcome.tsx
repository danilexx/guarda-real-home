import React from "react";

import { BigLogo, BigText, Desc } from "src/styles/welcome";

import { ButtonT, Buttons } from "src/components/Button";
import Column from "src/components/Column";

const Welcome = () => {
  return (
    <Column style={{ margin: "5rem auto" }}>
      <BigLogo />
      <BigText>
        Seja bem-vinda <br />
        <b>Rainha Ana!</b>
      </BigText>
      <Desc>Para começar cadastre o jovem que deseja entrar na realeza:</Desc>
      <Buttons>
        <ButtonT as="a" href="/newPrince">
          Incluir Príncipe ou princesa
        </ButtonT>
      </Buttons>
    </Column>
  );
};

export default Welcome;
