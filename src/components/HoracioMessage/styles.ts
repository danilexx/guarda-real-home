import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.div`
  /* background-image: url("icons/talk-bg.svg"); */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* background-size: cover; */
  background-color: white;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.15);
  /* width: 27.472rem; */
  height: fit-content;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    background-image: url("/icons/talk-bg.svg");
    width: 35px;
    height: 15px;
    position: absolute;
    bottom: 3px;
    right: 1px;
    transform: translateX(100%);
    /* box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.15); */
  }
`;

export const HoracioTalking = styled.img.attrs({
  src: "/icons/horacio-talk.svg"
})`
  /* position: absolute; */
  /* top: 0; */
  /* right: 0; */
`;
