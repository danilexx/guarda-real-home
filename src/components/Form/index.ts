import { Form as BaseForm } from "@unform/web";
import styled from "src/lib/StyledComponents";

const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1000px;
  padding: 2rem;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export default Form;
