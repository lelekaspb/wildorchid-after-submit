import { forwardRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const Lastname = forwardRef(
  ({ value, help, handleInput, handleBlur }, forwardedRef) => {
    // in order to use translations in input placeholder
    const intl = useIntl();

    return (
      <div className={giftcard.field}>
        <label className={giftcard.label} htmlFor="giftcard_lname">
          <FormattedMessage
            id="giftcard.info.last_name_label"
            defaultMessage="Efternavn"
          />
          {" *"}
        </label>
        <span className={giftcard.directive}>
          <FormattedMessage
            id="giftcard.last_name.directive"
            defaultMessage="Gavekortmodtagers efternavn"
          />
        </span>
        <input
          className={giftcard.input}
          type="text"
          id="giftcard_lname"
          ref={forwardedRef}
          placeholder={intl.formatMessage({
            id: "giftcard.info.last_name_placeholder",
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
              id="giftcard.name.error"
              defaultMessage="{value} kan kun bestå af bogstaver"
              values={{
                value: (
                  <FormattedMessage
                    id="giftcard.info.last_name_label"
                    defaultMessage="Efternavn"
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

export default Lastname;
