import styled from "src/lib/StyledComponents";
import { darken } from "polished";

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const BaseButton = styled.button`
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  border: none;
  padding: 1.5rem 4rem;
  margin: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonP = styled(BaseButton)`
  background-color: ${props => props.theme.primary};
  color: white;
  transition: 0.1s ease-in-out;
  transition-property: background-color;
  &:hover {
    background-color: ${props => darken(0.1, props.theme.primary)};
  }
`;

export const ButtonS = styled(BaseButton)`
  background-color: white;
  border: 0.2rem solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  transition: 0.1s ease-in-out;
  transition-property: background-color, color;
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`;
