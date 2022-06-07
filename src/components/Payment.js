import { Outlet, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import payment from "./../styles/Payment.module.css";
import giftcard from "../styles/Giftcard.module.css";
import { useState } from "react";

function Payment() {
  const sessionMethod = sessionStorage.getItem("method");
  const [method, setMethod] = useState(sessionMethod || "creditcard");
  const changeMethod = (e) => {
    const methodChosen = e.target.closest("a").getAttribute("data-method");
    setMethod(methodChosen);
  };

  return (
    <>
      <div className={payment.wrapper}>
        {/* link back to info form */}
        <div className={payment.backlink}>
          <Link className={payment.link} to="/giftcard">
            <img src="./../icons/enter-back.svg" alt="enter icon" />
            <FormattedMessage
              id="payment.back_to_form"
              defaultMessage="tilbage til formularen"
            />
          </Link>
        </div>

        {/* heading */}
        <h2 className={payment.heading}>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>

        {/* navigation scheme */}
        <div className={payment.nav_scheme}>
          <div className={giftcard.step_done}>&#10004;</div>
          <div className={giftcard.step_middle}></div>
          <div className={giftcard.step_done}>2</div>
        </div>
      </div>

      <h3 className={payment.method}>
        <FormattedMessage
          id="payment.method"
          defaultMessage="Betalingsmetode"
        />
      </h3>
      <div className={payment.links}>
        <Link
          to="creditcard"
          className={`${
            method === "creditcard" ? payment.chosen : payment.ignored
          }`}
          data-method="creditcard"
          onClick={changeMethod}
        >
          <img src="./../icons/creditcard-logo.svg" alt="credit card icon" />
        </Link>
        <Link
          to="mobilepay"
          className={`${
            method === "mobilepay" ? payment.chosen : payment.ignored
          }`}
          data-method="mobilepay"
          onClick={changeMethod}
        >
          <img src="./../icons/mobilepay_original.svg" alt="mobilepay icon" />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Payment;
