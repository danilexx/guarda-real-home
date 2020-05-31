import styled, { css } from "src/lib/StyledComponents";

export const Container = styled.footer`
  ${props => props.theme.texture};
  width: 100%;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;

  .mailchip {
    display: flex;
    width: 100%;
    max-width: 300px;
    margin: 1rem 0;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
    .msg-alert {
      width: 100%;
    }
    /* width: fit-content; */
    height: 5rem;
    input {
      flex: 1;
      height: 100%;
      border-radius: 5px;
      padding: 1.2rem;
      border: 1px solid ${props => props.theme.primary};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    button {
      height: 100%;
      background-color: ${props => props.theme.primary};
      color: white;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const Section = styled.div``;

export const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  margin: 1rem 0;
`;

export const Description = styled.p`
  color: #575757;
  font-size: 1.5rem;
  line-height: 100%;
  margin: 0.5rem 0;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

export const SocialMedia = styled.a`
  display: flex;
  flex-direction: row;
  margin: 0 0.5rem;
`;

export const SocialMediaName = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  margin: 0 1rem;
`;

export const SocialMediaIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;
