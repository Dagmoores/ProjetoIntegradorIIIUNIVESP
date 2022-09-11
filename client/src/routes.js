import { BrowserRouter, Routes, Route, } from "react-router-dom";

//import pages
import MainPage from "./pages/mainPage";
import LoginAndRegister from "./pages/loginAndRegister";



const App = () => {
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cadastroELogin" element={<LoginAndRegister />} />
    </Routes>
  </BrowserRouter>
    )
};

export default App;