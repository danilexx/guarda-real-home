import React from "react";
import Column from "src/components/Column";
import { BigText } from "src/styles/welcome";
import { Castle, RoyalTitle } from "src/styles/dashboard";
import RoyalCard, { RoyalFamily } from "src/components/RoyalCard";
import { Buttons, ButtonP } from "src/components/Button";

const Dashboard = () => {
  return (
    <Column>
      <Castle />
      <BigText>
        Seja bem-vinda <br />
        <b>Rainha Ana!</b>
      </BigText>
      <RoyalTitle>Familía Real</RoyalTitle>
      <RoyalFamily>
        <RoyalCard as="a" href="/dashboard/1" />
      </RoyalFamily>
      <Buttons>
        <ButtonP as="a" href="/newPrince">
          Incluir Príncipe ou princesa
        </ButtonP>
      </Buttons>
    </Column>
  );
};

export default Dashboard;
