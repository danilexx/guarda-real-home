import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  background-color: #f5f5f5;
  box-shadow: -4px 4px 5px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 2rem;
  margin: 1rem auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  text-align: left;
  margin: 0.3rem 0;
  text-align: center;
`;

export const Desc = styled.p`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  text-align: left;
  margin: 0.2rem 0;
  text-align: center;
`;

export const Cod = styled.p`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  text-align: left;
  margin: 0.2rem 0;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* flex: 1; */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
  /* flex: 1; */
  text-align: center;
  margin: 0.5rem 0;
`;

export const Icon = styled.img`
  height: 6.5rem;
  width: 6%5rem;
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

export const GraphRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
`;

export const GraphColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.05rem;
  width: 1rem;
  /* width: 100%; */
`;

export const Rect = styled.div<{ height?: string }>`
  height: ${props => props.height};
  width: 1rem;
  /* flex: 1; */
  background-color: ${props => props.theme.primary};
`;

export const RectName = styled.p`
  writing-mode: vertical-lr;
  margin-top: 0.5rem;

  /* margin-left: 0.5rem; */
`;

export const InfoRow = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 350px;
  margin: 1rem auto;
`;

export const Dol = styled.p`
  color: #27ae60;
  margin-left: auto;
  margin-bottom: 0.2rem;
`;

export const NDol = styled(Dol)`
  color: #eb5757;
`;

export const CHKRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 350px;
  margin: 1rem auto;
  align-items: flex-start;

  input {
    margin-right: 1rem;
    height: 4rem;
    width: 4rem;
  }

  label {
    color: #313131;
    font-size: 2rem;
  }
`;
