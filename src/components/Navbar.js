import { useContext } from "react";
import { Context } from "./ContextWrapper";
import { NavLink, useLocation } from "react-router-dom";
import navbar from "./../styles/Navbar.module.css";
import Burgermenu from "./Burgermenu";
import Burger from "./Burger";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  const context = useContext(Context);

  let location = useLocation();

  return (
    <nav
      className={`${navbar.navbar} ${
        location.pathname === "/" ? navbar.bg : ""
      }`}
    >
      <Burger />
      <Burgermenu />

      <NavLink to="/" className={`${navbar.logo_link}`}>
        <img
          className={navbar.logo}
          src="./../logo/logo-merienda.svg"
          alt="logo"
          data-page="home"
        />
      </NavLink>

      <div className={navbar.pull_right}>
        <DesktopMenu />

        <div className={navbar.lang_buttons}>
          <button
            data-lang="da"
            className={`${navbar.mr_1} ${
              context.locale === "da"
                ? navbar.button_primary
                : navbar.button_outline
            }`}
            onClick={context.changeLang}
          >
            DK
          </button>

          <button
            data-lang="en"
            className={`${
              context.locale === "en"
                ? navbar.button_primary
                : navbar.button_outline
            }`}
            onClick={context.changeLang}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
