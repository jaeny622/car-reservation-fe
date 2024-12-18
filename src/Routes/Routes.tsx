import { lazy } from "react";
import { Routes, Route } from "react-router";

import GlobalLayout from "../Layouts/GlobalLayout";

const Home = lazy(() => import("../Pages/Home"));
const Join = lazy(() => import("../Pages/Join"));
const Login = lazy(() => import("../Pages/Login"));
const Detail = lazy(() => import("../Pages/Detail"));
const Edit = lazy(() => import("../Pages/Edit"));
const Upload = lazy(() => import("../Pages/Upload"));
const NotFound = lazy(() => import("../Pages/NotFound"));

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path="video">
          <Route path="upload" element={<Upload />} />
          <Route path="edit" element={<Edit />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
