import NavBar from "./navbar";
import Sign from "./sign_form";
import LogIn from "./login_form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <LogIn />
    </>
  );
}

export default Home;
