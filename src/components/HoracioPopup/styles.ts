import styled from "src/lib/StyledComponents";

export const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const Overlay = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: ${p => (p.show ? 1 : 0)};
  pointer-events: ${p => (p.show ? "all" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 65;
`;
