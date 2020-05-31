import React from "react";
import styled from "styled-components";

const GardenImage = styled.img.attrs({
  src: "/images/garden.svg"
})`
  margin: auto;
  display: block;
`;

export const Garden = styled(props => (
  <div {...props}>
    <GardenImage />
  </div>
))`
  width: 100%;
  background-image: url("/icons/texture.svg");
  background-color: #e6dfb3;
  background-size: 33px;
  padding: 2rem 0;
`;

export const Stores = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem auto;
  justify-content: center;
`;

export const Store = styled(props => (
  <a href={props.href}>
    <img alt={props.alt} {...props} />
  </a>
))<{ href?: string }>`
  /* width: 15rem;
  height: 7rem; */
  margin: 1rem;
`;

export const Section = styled.div`
  width: 100%;
  margin: 2rem 0;
`;
export const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 3rem;
  margin: 1rem auto;
  text-align: center;
`;

export const Content = styled.p`
  font-size: 2rem;
  color: #575757;
  margin: 0.5rem auto;
  text-align: center;
  padding: 0 2rem;
`;

export const Icon = styled.img`
  display: block;
  margin: 1rem auto;
  width: 10rem;
`;

export const CenterLink = styled.a`
  margin: 1rem auto;
  display: block;
  text-align: center;
  color: ${props => props.theme.primary};
  font-size: 2.3rem;
  text-decoration: none;
`;

export const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.secondary};
  font-size: 2.6rem;
  color: white;
  margin: 1rem auto;
  display: block;
  width: 100%;
  max-width: 350px;
  padding: 1rem 4rem;
  border-radius: 5px;
`;
