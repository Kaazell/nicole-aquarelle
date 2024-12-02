import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";
import "./style.scss";

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      right
      noOverlay
      width={"100%"}
      pageWrapId={"page-wrap"}
      isOpen={isOpen}
      onStateChange={handleStateChange}
    >
      <Link
        id="home"
        className="menu-item"
        smooth
        to="/#home_section"
        onClick={closeMenu}
      >
        Accueil
      </Link>
      <Link
        id="skills"
        className="menu-item"
        smooth
        to="/#skills_section"
        onClick={closeMenu}
      >
        Compétences
      </Link>
      <Link
        id="portfolio"
        className="menu-item"
        smooth
        to="/#portfolio_section"
        onClick={closeMenu}
      >
        Portfolio
      </Link>
      <Link
        id="contact"
        className="menu-item"
        smooth
        to="/#contact_form"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </Menu>
  );
};

export default Burger;
