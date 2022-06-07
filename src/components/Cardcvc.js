import { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";
import creditcard from "../styles/Creditcard.module.css";
import MaskedInput from "react-text-mask";

const Cardcvc = forwardRef(
  ({ cvc, help, handleInput, handleBlur }, forwardedRef) => {
    return (
      <div className={giftcard.field}>
        <label htmlFor="card-cvc" className={giftcard.label} ref={forwardedRef}>
          <FormattedMessage
            id="creditcard.cvc"
            defaultMessage="Sikkerhedskode *"
          />
        </label>

        <MaskedInput
          mask={[/[0-9]/, /\d/, /\d/, /\d/]}
          className={`form-control ${creditcard.cvc_input}`}
          placeholder="123"
          guide={false}
          value={cvc}
          id="card-cvc"
          name="cccsc"
          inputMode="numeric"
          onChange={handleInput}
          onBlur={handleBlur}
        />

        <div
          className={`${
            help === "hidden"
              ? giftcard.hidden
              : help === "error"
              ? giftcard.error
              : giftcard.success
          }`}
        >
          {" "}
          {help === "success" ? (
            <FormattedMessage id="giftcard.success" defaultMessage="Godt" />
          ) : (
            <FormattedMessage
              id="creditcard.cvc.error"
              defaultMessage="Sikkerhedskoden skal være på 3 cifre"
            />
          )}{" "}
        </div>
      </div>
    );
  }
);

export default Cardcvc;
