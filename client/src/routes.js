import { BrowserRouter, Routes, Route, } from "react-router-dom";

//import pages
import MainPage from "./pages/mainPage";
import LoginAndRegister from "./pages/loginAndRegister";
import Teste1 from "./pages/test1";
import Teste2 from "./pages/test2";



const App = () => {
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cadastroELogin" element={<LoginAndRegister />} />
      <Route path="/teste1" element={<Teste1 />} />
      <Route path="/teste2" element={<Teste2 />} />
    </Routes>
  </BrowserRouter>
    )
};

export default App;