import React from 'react';
import NavbarBottom from "./components/navbar/navbarbottom";
import NavbarTop from "./components/navbar/navbarTop";
import Routes from "./components/routes";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div>
      <NavbarTop/>
      <NavbarBottom />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
