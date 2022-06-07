import MaskedInput from "react-text-mask";
import { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const Cardnumber = forwardRef(
  ({ number, help, handleInput, handleBlur }, forwardedRef) => {
    return (
      <div className={giftcard.field}>
        <label
          htmlFor="cc-number"
          ref={forwardedRef}
          className={giftcard.label}
        >
          <FormattedMessage
            id="creditcard.number"
            defaultMessage="Kortnummer *"
          />
        </label>

        <MaskedInput
          mask={[
            /[1-9]/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          className={`form-control ${giftcard.input}`}
          placeholder="1234 1234 1234 1234"
          guide={false}
          value={number}
          id="cc-number"
          name="ccnumber"
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
              id="creditcard.number.error"
              defaultMessage="Kreditkortnummer skal være på 16 cifre"
            />
          )}{" "}
        </div>
      </div>
    );
  }
);

export default Cardnumber;
