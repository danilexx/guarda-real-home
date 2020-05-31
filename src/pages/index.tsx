import React from "react";
import { useTitle } from "react-use";
import {
  Garden,
  Title,
  Content,
  Icon,
  Section,
  Stores,
  Store,
  CenterLink,
  Button
} from "src/styles";
import Column from "src/components/Column";
// import ApresentationSection from "src/Sections/Apresentation";

const Home: React.FC = () => {
  useTitle("Guarda Real | Home");

  return (
    <>
      <Garden />
      <Column>
        <Section>
          <Title>Os seus maiores tesouros protegidos!</Title>
          <Content>
            Nós somos a <b>Guarda Real</b> e aqui você é nosso Rei e seus
            pequenos tesouros nossos príncipes e princesas! Nosso objetivo é
            ajudar vossa Alteza a poupar suas riquezas e guardar o Tesouro do
            Reino para ser usado com sabedoria!
          </Content>
        </Section>
        <Section>
          <Icon src="/icons/crown.svg" />
          <Title>O melhor aplicativo de educação financeira</Title>
          <Content>
            Através da nossa plaforma, crianças desde o primeiro contato com
            dinheiro até os 18 anos são incentivadas a poupar e definir metas
            para entender o valor do dinheiro aplicado e a importância de
            economizar para atingir seus objetivos financeiros.
          </Content>
          <Stores>
            <Store href="#" src="/icons/appstore.svg" />
            <Store href="#" src="/icons/playstore.svg" />
          </Stores>
        </Section>
        <Section>
          <Icon src="/icons/chest.svg" />
          <Title>
            Ensine os seus tesouros a poupar o deles desde pequenos!
          </Title>
          <Content>
            Para ter acesso a experiência completa, você pode dar o primeiro
            passo em relação ao futuro financeiro do seu maior tesouro e abrir
            uma previdência privada. Sem burocracia, na palma da sua mão! Assim,
            você contribui para o futuro e para a educação financeira dele, além
            de muitas outras vantagens de começar a investir no futuro hoje!
            Saiba mais
          </Content>
          <CenterLink href="#">Saiba Mais</CenterLink>
        </Section>
        <Section>
          <Icon src="/icons/chest.svg" />
          <Title>Nada de pergaminhos, é tudo digital!</Title>
          <Content>
            Comece a previdênvia do seu tesouro agora mesmo, sem sair de casa!
          </Content>
          <Button>Cadastre-se</Button>
        </Section>
      </Column>
    </>
  );
};

export default Home;
