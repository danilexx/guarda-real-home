import styled from "src/lib/StyledComponents";

export const RoyalFamily = styled.div`
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
  max-width: 350px;
  margin: 1rem;
  text-decoration: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RoyalName = styled.h1`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  text-align: left;
  margin: 0.5rem 0;
`;

export const RoyalIcon = styled.img.attrs({
  src: "/icons/royal.svg"
})`
  height: 100%;
  width: auto;
  margin: 0 0.5rem;
`;

export const RoyalAge = styled.p`
  font-size: 1.8rem;
`;
