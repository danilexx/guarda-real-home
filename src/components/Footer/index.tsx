import React from "react";
import {
  Container,
  Section,
  Title,
  Description,
  SocialMedias,
  SocialMediaIcon,
  SocialMediaName,
  SocialMedia
} from "./styles";
import Mailchimp from "react-mailchimp-form";
import Column from "../Column";

const Footer = () => (
  <Container>
    <Column>
      <Section>
        <Title>Assinar o boletim Real:</Title>
        <Description>
          Assine nossa newsletter e receba semanalmente os melhores conteúdos
          sobre educação finaceira!
        </Description>
        <Mailchimp
          action="https://gmail.us4.list-manage.com/subscribe/post?u=ee9c5bed6b557deb28882c39b&amp;id=aa377ea68d"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true
            }
          ]}
          className="mailchip"
          messages={{
            sending: "Enviando...",
            success: "Obrigado por sua inscrição !",
            error: "Um erro ocorreu.",
            empty: "Você devê escrever um email.",
            duplicate: "Email Duplicado",
            button: "Assinar"
          }}
        />
      </Section>
      <Section>
        <Title>Assinar o boletim Real:</Title>
        <Description>
          Assine nossa newsletter e receba semanalmente os melhores conteúdos
          sobre educação finaceira!
        </Description>
        <SocialMedias>
          <SocialMedia>
            <SocialMediaIcon src="/icons/socialmedia/instagram.svg" />
            <SocialMediaName>Instagram</SocialMediaName>
          </SocialMedia>
          <SocialMedia>
            <SocialMediaIcon src="/icons/socialmedia/facebook.svg" />
            <SocialMediaName>facebook</SocialMediaName>
          </SocialMedia>
        </SocialMedias>
      </Section>
    </Column>
  </Container>
);

export default Footer;
