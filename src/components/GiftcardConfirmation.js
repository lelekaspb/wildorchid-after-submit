import { FormattedMessage, FormattedDate } from "react-intl";
import confirmation from "./../styles/Confirmation.module.css";
import giftcard from "../styles/Giftcard.module.css";
import payment from "./../styles/Payment.module.css";
import { Context } from "./ContextWrapper";
import { useContext } from "react";

function GiftcardConfirmation() {
  // fetch the info state and dispatch function from context provider
  const { info } = useContext(Context);

  return (
    <div className={confirmation.page}>
      <div className={confirmation.content_wrapper}>
        {/* heading */}
        <h2 className={payment.heading}>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>

        {/* navigation scheme */}
        <div className={payment.nav_scheme}>
          <div className={giftcard.step_done}>&#10004;&#xFE0E;</div>
          <div className={giftcard.step_middle}></div>
          <div className={giftcard.step_done}>&#10004;&#xFE0E;</div>
        </div>

        {/* thank you text */}
        <div className={confirmation.text}>
          <p>
            <FormattedMessage
              id="giftcard.thanks"
              defaultMessage="Tak for dit køb og for at støtte vores virksomhed!"
            />
          </p>

          <p>
            <FormattedMessage
              id="giftcard.promise"
              defaultMessage="Gavekortet sendes på email {date}."
              values={{
                date: (
                  <FormattedDate
                    value={info.response.date}
                    year="numeric"
                    month="long"
                    day="numeric"
                    weekday="long"
                  />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default GiftcardConfirmation;
