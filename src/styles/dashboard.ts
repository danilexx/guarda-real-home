import styled from "src/lib/StyledComponents";
import RoyalCard from "src/components/RoyalCard";

export const Castle = styled.img.attrs({
  src: "/icons/castle.svg"
})`
  width: 80%;
  max-width: 200px;
  margin: 1rem auto;
  display: block;
`;

export const RoyalTitle = styled.h1`
  margin: 1rem;
  color: ${p => p.theme.primary};
  font-size: 2.4rem;
  font-weight: bold;
`;

export const InfoRoyalCard = styled(RoyalCard)`
  background-color: transparent;
  box-shadow: none;
  margin: 1rem auto;
`;

export const EditIcon = styled.img.attrs({
  src: "/icons/edit.svg"
})`
  margin-right: 0.5rem;
`;

export const Edit = styled.div`
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
