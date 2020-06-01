import styled from "src/lib/StyledComponents";

export const Avatar = styled.img.attrs({
  src: "/icons/avatar.svg"
})`
  display: block;
  margin: 1rem auto;
  width: 100%;
  max-width: 10rem;
`;

export const AvatarDesc = styled.p`
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
`;
