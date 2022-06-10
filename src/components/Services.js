import services from "./../styles/Services.module.css";
import { FormattedMessage } from "react-intl";
import { Outlet, NavLink, useLocation } from "react-router-dom";

function Services() {
  let location = useLocation();
  return (
    <>
      <div className={services.page}>
        <nav className={services.navbar}>
          <NavLink
            to="eyes"
            className={({ isActive }) =>
              ` ${services.link} ${
                isActive || location.pathname === "/services"
                  ? services.underline
                  : ""
              }`
            }
          >
            <FormattedMessage
              id="navigation.services.eyes"
              defaultMessage="Bryn og vipper"
            />
          </NavLink>

          <NavLink
            to="wax"
            className={({ isActive }) =>
              ` ${services.link} ${isActive ? services.underline : ""}`
            }
          >
            <FormattedMessage
              id="navigation.services.wax"
              defaultMessage="Hårfjerning"
            />
          </NavLink>

          <NavLink
            to="spraytan"
            className={({ isActive }) =>
              ` ${services.link} ${isActive ? services.underline : ""}`
            }
          >
            <FormattedMessage
              id="navigation.services.spraytan"
              defaultMessage="Spraytan"
            />
          </NavLink>

          <NavLink
            to="nails"
            className={({ isActive }) =>
              ` ${services.link} ${isActive ? services.underline : ""}`
            }
          >
            <FormattedMessage
              id="navigation.services.nails"
              defaultMessage="Negle"
            />
          </NavLink>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default Services;
