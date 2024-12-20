import { Outlet } from "react-router";

import * as S from "../Layouts/GlobalLayout.styles";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function GlobalLayout() {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.Container>
  );
}
