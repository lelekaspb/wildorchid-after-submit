import burger from "./../styles/Burger.module.css";
import { useContext } from "react";
import { Context } from "./ContextWrapper";

function Burger() {
  const context = useContext(Context);
  return (
    <div
      className={burger.wrapper}
      onClick={() => {
        context.setMenuOpen(!context.menuOpen);
      }}
    >
      <button className={burger.button} title="menu mobile">
        <div
          className={`${burger.line} ${
            context.menuOpen ? burger.line1_open : burger.line1_closed
          }`}
        ></div>
        <div
          className={`${burger.line} ${
            context.menuOpen ? burger.line2_open : burger.line2_closed
          }`}
        ></div>
        <div
          className={`${burger.line} ${
            context.menuOpen ? burger.line3_open : burger.line3_closed
          }`}
        ></div>
      </button>
    </div>
  );
}

export default Burger;
