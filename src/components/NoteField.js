import { FormattedMessage, useIntl } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";

const Note = ({ value, handleInput }) => {
  // in order to use translations in input placeholder
  const intl = useIntl();

  return (
    <div className={giftcard.field}>
      <label className={giftcard.label} htmlFor="giftcard_note">
        <FormattedMessage
          id="giftcard.info.note_label"
          defaultMessage="Bemærk"
        />
      </label>
      <span className={giftcard.directive}>
        <FormattedMessage
          id="giftcard.note.directive"
          defaultMessage="Hvis der er noget andet vi bør at vide (valgfri)"
        />
      </span>
      <textarea
        rows="6"
        className={giftcard.input}
        id="giftcard_note"
        type="text"
        placeholder={intl.formatMessage({
          id: "giftcard.info.note_placeholder",
          defaultMessage: "Skriv bemærk her...",
        })}
        value={value}
        onChange={handleInput}
      ></textarea>
    </div>
  );
};

export default Note;
