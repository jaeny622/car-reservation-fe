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

    width: 112%;
    top: 50%;
    right: 0%;
    z-index: -999;
  }

  &:after {
    content: "";
    height: 5px;
    border-top: 3px solid var(--secondary-purple-D);
    border-bottom: 3px solid var(--secondary-purple-D);
    position: absolute;

    width: 112%;
    top: 50%;
    left: 0%;
    z-index: -999;
  }
`;
