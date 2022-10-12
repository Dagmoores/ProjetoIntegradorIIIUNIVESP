import { BrowserRouter, Routes, Route, } from "react-router-dom";

//import pages
import MainPage from "./pages/mainPage";
import LoginAndRegister from "./pages/loginAndRegister";
import Profile from "./pages/profile";
import Teste1 from "./pages/test1";




const App = () => {
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cadastroELogin" element={<LoginAndRegister />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/teste1" element={<Teste1 />} />

    </Routes>
  </BrowserRouter>
    )
};

export default App;