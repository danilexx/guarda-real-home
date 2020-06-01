import React from "react";
import {
  Container,
  Title,
  Desc,
  Cod,
  Icon,
  Info,
  Name,
  Value,
  Card,
  GraphRow,
  GraphColumn,
  Rect,
  RectName,
  Dol,
  NDol,
  InfoRow,
  CHKRow
} from "./styles";

const months = [
  {
    name: "OUT",
    height: 30
  },
  {
    name: "NOV",
    height: 33
  },
  {
    name: "DEZ",
    height: 36
  },
  {
    name: "JAN",
    height: 25
  },
  {
    name: "FEV",
    height: 31
  },
  {
    name: "MAR",
    height: 24
  },
  {
    name: "ABR",
    height: 20
  },
  {
    name: "MAI",
    height: 26
  },
  {
    name: "HOJE",
    height: 40
  },
  {
    name: "JUL",
    height: 42
  },
  {
    name: "AGO",
    height: 41
  },
  {
    name: "SET",
    height: 38
  },
  {
    name: "OUT",
    height: 50
  },
  {
    name: "NOV",
    height: 50
  },
  {
    name: "NOV",
    height: 45
  }
];

const PrevCard = () => {
  return (
    <Container>
      <Title>Previdência</Title>
      <Desc>Fundo de Pensão Nobre Cavalheiro</Desc>
      <Cod>Código 121239092-00</Cod>
      <Card>
        <Icon src="/icons/big_chest.svg" />
        <Info>
          <Name>Saldo Total</Name>
          <Value>R$ 9.000,00</Value>
        </Info>
      </Card>
      <GraphRow>
        {months.map((e, key) => (
          <GraphColumn key={key}>
            <Rect height={`${e.height / 2}rem`} />
            <RectName>{e.name}</RectName>
          </GraphColumn>
        ))}
      </GraphRow>
      <InfoRow>
        Rendimentos no mês <Dol>+ R$ 30,00</Dol>
      </InfoRow>
      <InfoRow>
        Depósitos <Dol>+ R$ 150,00</Dol>
      </InfoRow>
      <InfoRow>
        Retiradas <NDol>- R$ 40,00</NDol>
      </InfoRow>
      <CHKRow>
        <input id="chk1" type="checkbox" />
        <label for="chk1">
          Permitir que o Príncipe Vinícius acesse as informações da previdência
          no aplicativo
        </label>
      </CHKRow>
    </Container>
  );
};

export default PrevCard;
