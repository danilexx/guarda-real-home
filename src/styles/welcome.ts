import styled from "src/lib/StyledComponents";

export const BigText = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.8);
  margin: 1rem auto;
  text-align: center;
`;

export const BigLogo = styled.img.attrs({
  src: "/icons/logos/big.svg"
})`
  display: block;
  margin: 1rem auto;
  width: 90%;
  max-width: 30rem;
`;

export const Desc = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.7);
  margin: 1rem auto;
  text-align: center;
`;
