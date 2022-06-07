import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import menu from "./../styles/Burgermenu.module.css";
import { useContext } from "react";
import { Context } from "./ContextWrapper";

function Burgermenu() {
  const context = useContext(Context);

  return (
    <div
      className={`${menu.menu} ${context.menuOpen ? menu.open : menu.closed}`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img className={menu.icon} src="./../icons/home.svg" alt="home icon" />
        <FormattedMessage id="navigation.home" defaultMessage="Forside" />
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="./../icons/services.svg"
          alt="services icon"
        />
        <FormattedMessage
          id="navigation.services"
          defaultMessage="Behandlinger"
        />
      </NavLink>

      <NavLink
        to="/about_us"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="./../icons/about.svg"
          alt="about us icon"
        />
        <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="./../icons/contact.svg"
          alt="contact icon"
        />
        <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
      </NavLink>

      <NavLink
        to="/giftcard"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
        onClick={() => {
          context.setMenuOpen(!context.menuOpen);
        }}
      >
        <img
          className={menu.icon}
          src="./../icons/giftcard.svg"
          alt="giftcard icon"
        />
        <FormattedMessage id="navigation.giftcard" defaultMessage="Gavekort" />
      </NavLink>

      <a
        className={menu.link}
        href="https://wildorchid.onlinebooq.dk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={menu.icon} src="./../icons/book.svg" alt="book icon" />
        <FormattedMessage id="navigation.book" defaultMessage="Bestil tid" />
      </a>

      <img
        className={menu.orchid}
        src="./../illustrations/burger-menu-orchid.svg"
        alt="orchid flower"
      />
    </div>
  );
}

export default Burgermenu;
