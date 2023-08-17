import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./router/Router";
import { theme } from "./styles/theme";
import Login from './components/LoginPage/Login'; 
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setScreenSize();
  window.addEventListener("resize", setScreenSize);

  const RenderLogin = () => (
    <div>
      <h1>로그인 페이지</h1>
      <Login />
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
         {/* 여기에  다른 컴포넌트나 페이지 넣을 수 있음. */}
      <SignupPage />
      <Router renderLogin={RenderLogin} />
    </ThemeProvider>
  );
}

export default App;
