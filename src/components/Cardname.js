import { forwardRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const Cardname = forwardRef(
  ({ name, help, handleInput, handleBlur }, forwardedRef) => {
    // in order to use translations in input placeholder
    const intl = useIntl();

    return (
      <div className={giftcard.field}>
        <label htmlFor="card-name" className={giftcard.label}>
          <FormattedMessage
            id="creditcard.name"
            defaultMessage="Navn på kort *"
          />
        </label>

        <input
          type="text"
          name="ccname"
          className={giftcard.input}
          id="card-name"
          placeholder={intl.formatMessage({
            id: "creditcard.name.placeholder",
            defaultMessage: "Skriv dit navn her...",
          })}
          ref={forwardedRef}
          value={name}
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
              id="creditcard.name.error"
              defaultMessage="Vær sød at skrive dit navn"
            />
          )}{" "}
        </div>
      </div>
    );
  }
);

export default Cardname;
