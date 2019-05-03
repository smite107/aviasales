import React from "react";
import AsideToggle from "../other/AsideToggle";

const Header = () => (
  <header className="header">
    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Aviasales" className="header__logo" />
    <AsideToggle />
  </header>
);

export default Header;