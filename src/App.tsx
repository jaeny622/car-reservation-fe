import { Suspense, useEffect } from "react";
import axios from "axios";

import GlobalRoutes from "./Routes/Routes";

import Loading from "./Pages/Loading";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:4000";
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <GlobalRoutes />
    </Suspense>
  );
}

export default App;
