import { FormattedMessage } from "react-intl";
import styles from "./../styles/Procedures.module.css";

function WaxingProcedures({ headerMessage, procedures }) {
  return (
    <section className={styles.sugaring}>
      <div className={styles.table_header}>
        <span className={styles.table_name}>
          <FormattedMessage
            id={headerMessage.id}
            defaultMessage={headerMessage.text}
          />
        </span>
        <span className={styles.table_price_smaller}>
          <FormattedMessage
            id="services.waxing.before_six_weeks"
            defaultMessage="Inden 6 uger"
          />
        </span>
        <span className={styles.table_price_bigger}>
          <FormattedMessage
            id="services.waxing.after_six_weeks"
            defaultMessage="Efter 6 uger*"
          />
        </span>
      </div>
      {procedures}
      <div className={styles.book_waxing}>
        <a className={styles.book_btn} href="https://wildorchid.onlinebooq.dk/">
          <FormattedMessage id="book" defaultMessage="Book nu" />
        </a>
        <span className={styles.valid_for}>
          <FormattedMessage
            id="services.waxing.valid_for"
            defaultMessage="*gælder også for barbering eller førstegangskunde"
          />
        </span>
      </div>
    </section>
  );
}

export default WaxingProcedures;
