import { FormattedMessage } from "react-intl";
import styles from "./../styles/Procedures.module.css";

function Procedures({ procedures }) {
  return (
    <article className={styles.procedures}>
      {procedures}
      <div className={styles.book}>
        <a className={styles.book_btn} href="https://wildorchid.onlinebooq.dk/">
          <FormattedMessage id="book" defaultMessage="Book nu" />
        </a>
      </div>
    </article>
  );
}

export default Procedures;
