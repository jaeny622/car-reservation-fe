import styled from "styled-components";

export const Container = styled.header`
  grid-area: title;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  position: relative;
  padding: 0 10px;

  display: inline-block;

  color: var(--secondary-purple-D);
  background: linear-gradient(#fafaff, #f8f8fe);

  &:before {
    content: "";
    height: 5px;
    border-top: 3px solid var(--secondary-purple-D);
    border-bottom: 3px solid var(--secondary-purple-D);
    position: absolute;
    width: 200%;
    top: 50%;
    left: -50%;
    z-index: -999;
  }
`;
