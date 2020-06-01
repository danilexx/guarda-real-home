import styled from "src/lib/StyledComponents";

export const MonetaryCards = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  flex-wrap: wrap;
  /* justify-content: center; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.2);
  padding: 0 2rem;
  padding-top: 1rem;
  width: 90%;
  max-width: 300px;
  margin: 1rem;
  text-decoration: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Name = styled.h1`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.9);
  flex: 1;
  text-align: center;
  margin: 0.5rem 0;
`;

export const Icon = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 0.5rem 0;
  margin-right: 1.5rem;
`;

export const Value = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  flex: 1;
  text-align: center;
  color: ${props => props.theme.primary};
`;
