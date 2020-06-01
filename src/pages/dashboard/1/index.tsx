import React from "react";
import Column from "src/components/Column";
import { Castle, InfoRoyalCard, Edit, EditIcon } from "src/styles/dashboard";
import MonetaryCard, { MonetaryCards } from "src/components/MonetaryCard";

const Dashboard = () => {
  return (
    <Column>
      <Castle />
      {/* <RoyalFamily> */}
      <InfoRoyalCard>
        <Edit as="a" href="#">
          <EditIcon /> Editar Cadastro
        </Edit>
      </InfoRoyalCard>
      {/* </RoyalFamily> */}
      <MonetaryCards>
        <MonetaryCard
          icon="/icons/coin.svg"
          name="Saldo Carteira Virtual"
          value="R$ 15,00"
        />
        <MonetaryCard
          as="a"
          href="/dashboard/1/prev"
          icon="/icons/big_chest.svg"
          name="Saldo Previdência"
          value="R$ 9.000,00"
        />
        <MonetaryCard
          icon="/icons/ruby.svg"
          name="Saldo no Jogo"
          value="R$ 50 Pontos"
        />
      </MonetaryCards>
    </Column>
  );
};

export default Dashboard;
