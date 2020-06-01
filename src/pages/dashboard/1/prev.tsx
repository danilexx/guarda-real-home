import React from "react";
import Column from "src/components/Column";
import { Castle, InfoRoyalCard, Edit, EditIcon } from "src/styles/dashboard";
import MonetaryCard, { MonetaryCards } from "src/components/MonetaryCard";
import PrevCard from "src/components/PrevCard";

const Dashboard = () => {
  return (
    <Column>
      <Castle />
      <InfoRoyalCard>
        <Edit as="a" href="#">
          <EditIcon /> Editar Cadastro
        </Edit>
      </InfoRoyalCard>
      <PrevCard />
    </Column>
  );
};

export default Dashboard;
