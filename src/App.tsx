import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/loading";
import NoPage from "./pages/nopage";
import LogIn from "./components/login_form";
import Sign from "./components/sign_form";
import Home from "./components/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Loading />} />
          <Route path="login" element={<Home />} />
          <Route path="signup" element={<Sign />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
