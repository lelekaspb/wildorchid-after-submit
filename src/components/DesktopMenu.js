import menu from "./../styles/Desktopmenu.module.css";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

function DesktopMenu() {
  return (
    <div className={menu.menu}>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
      >
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
      >
        <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
      >
        <FormattedMessage id="navigation.contact" defaultMessage="Kontakt" />
      </NavLink>

      <NavLink
        to="/giftcard"
        className={({ isActive }) =>
          ` ${menu.link} ${isActive ? menu.underline : ""}`
        }
      >
        <FormattedMessage id="navigation.giftcard" defaultMessage="Gavekort" />
      </NavLink>

      <a
        className={menu.link}
        href="https://wildorchid.onlinebooq.dk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="navigation.book" defaultMessage="Bestil tid" />
      </a>
    </div>
  );
}

export default DesktopMenu;
