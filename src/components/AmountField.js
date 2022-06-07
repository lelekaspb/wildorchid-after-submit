import { forwardRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const Amount = forwardRef(
  ({ value, help, handleInput, handleBlur }, forwardedRef) => {
    // in order to use translations in input placeholder
    const intl = useIntl();

    return (
      <div className={giftcard.field}>
        <label className={giftcard.label} htmlFor="giftcard_amount">
          <FormattedMessage
            id="giftcard.info.amount_label"
            defaultMessage="Beløb (DKK) *"
          />
        </label>
        <span className={giftcard.directive}>
          <FormattedMessage
            id="giftcard.amount.directive"
            defaultMessage="Du kan vælge beløb mellem 50 og 2000"
          />
        </span>
        <input
          className={giftcard.input}
          id="giftcard_amount"
          type="text"
          ref={forwardedRef}
          placeholder={intl.formatMessage({
            id: "giftcard.info.amount_placeholder",
            defaultMessage: "Skriv dit efternavn her...",
          })}
          value={value}
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
              id="giftcard.amount.error"
              defaultMessage="Indtast venligst et beløb mellem 50 og 2000, kun cifre"
            />
          )}{" "}
        </div>
      </div>
    );
  }
);

export default Amount;
