import { forwardRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const SenderEmail = forwardRef(
  ({ value, help, handleInput, handleBlur }, forwardedRef) => {
    // in order to use translations in input placeholder
    const intl = useIntl();

    return (
      <div className={giftcard.field}>
        <label className={giftcard.label} htmlFor="giftcard_email_sender">
          <FormattedMessage
            id="giftcard.info.sender_email_label"
            defaultMessage="Afsender email"
          />
        </label>
        <span className={giftcard.directive}>
          <FormattedMessage
            id="giftcard.sender_email.directive"
            defaultMessage="Gavekort afsenderens email (valgfri)"
          />
        </span>
        <input
          className={giftcard.input}
          id="giftcard_email_sender"
          type="text"
          ref={forwardedRef}
          placeholder={intl.formatMessage({
            id: "giftcard.info.email_placeholder",
            defaultMessage: "Skriv dit efternavn her...",
          })}
          inputMode="email"
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
              id="giftcard.email.error"
              defaultMessage="Indtast venligst en gyldig e-mailadress"
            />
          )}{" "}
        </div>
      </div>
    );
  }
);

export default SenderEmail;
