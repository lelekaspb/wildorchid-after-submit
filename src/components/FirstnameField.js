import { forwardRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const Firstname = forwardRef(
  ({ value, help, handleInput, handleBlur }, forwardedRef) => {
    // in order to use translations in input placeholder
    const intl = useIntl();

    return (
      <div className={giftcard.field}>
        <label className={giftcard.label} htmlFor="giftcard_fname">
          <FormattedMessage
            id="giftcard.info.first_name_label"
            defaultMessage="Fornavn"
          />{" "}
          {"*"}
        </label>
        <input
          className={giftcard.input}
          type="text"
          id="giftcard_fname"
          name="fname"
          ref={forwardedRef}
          placeholder={intl.formatMessage({
            id: "giftcard.info.first_name_placeholder",
            defaultMessage: "Skriv dit fornavn her...",
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
              id="giftcard.name.error"
              defaultMessage="{value} kan kun bestå af bogstaver"
              values={{
                value: (
                  <FormattedMessage
                    id="giftcard.info.first_name_label"
                    defaultMessage="Fornavn"
                  />
                ),
              }}
            />
          )}{" "}
        </div>
      </div>
    );
  }
);

export default Firstname;
