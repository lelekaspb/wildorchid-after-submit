import MaskedInput from "react-text-mask";
import { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";
import creditcard from "../styles/Creditcard.module.css";

const Cardexpiry = forwardRef(
  ({ expiry, help, invalid, handleInput, handleBlur }, forwardedRef) => {
    return (
      <div className={giftcard.field}>
        <label
          htmlFor="card-expiry"
          className={giftcard.label}
          ref={forwardedRef}
        >
          <FormattedMessage
            id="creditcard.expiry"
            defaultMessage="Udløbsdato *"
          />
        </label>

        <MaskedInput
          mask={[/[0-9]/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          className={`form-control ${creditcard.expiry_input}`}
          placeholder="04/23"
          guide={false}
          value={expiry}
          id="card-expiry"
          name="ccexp"
          inputMode="numeric"
          onChange={handleInput}
          onBlur={handleBlur}
        />

        <div
          className={`${
            help === "hidden"
              ? giftcard.hidden
              : help === "error" || invalid
              ? giftcard.error
              : giftcard.success
          }`}
        >
          {invalid ? (
            <FormattedMessage
              id="creditcard.expiry.invalid"
              defaultMessage="Ugyldigt format"
            />
          ) : help === "error" ? (
            <FormattedMessage
              id="creditcard.expiry.error"
              defaultMessage="Udløbsdatoen skal være 4 cifre"
            />
          ) : (
            <FormattedMessage id="giftcard.success" defaultMessage="Godt" />
          )}
        </div>
      </div>
    );
  }
);

export default Cardexpiry;
