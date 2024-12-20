import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);

  padding: 30px;

  background: linear-gradient(transparent, #c6c7f8);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr 50px;
  grid-template-areas: "title" "main" "footer";
`;

export const Main = styled.main`
  grid-area: main;
`;
