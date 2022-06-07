import styles from "./../styles/Procedures.module.css";
import { FormattedMessage } from "react-intl";

export const getDOMProcedures = (data) => {
  const procedures = data.map((procedure, index) => {
    return (
      <div key={index} className={styles.line}>
        <span className={styles.name}>
          <FormattedMessage
            id={procedure.translId}
            defaultMessage={procedure.translDefould}
          />
        </span>
        <span className={styles.price}> {procedure.price},- </span>
      </div>
    );
  });
  return procedures;
};

export const getWaxingDOMProcedures = (data) => {
  const procedures = data.map((procedure, index) => {
    return (
      <div key={index} className={styles.line_waxing}>
        <span className={styles.name}>
          <FormattedMessage
            id={procedure.translId}
            defaultMessage={procedure.translDefould}
          />
        </span>
        <span className={styles.price_smaller}>
          {" "}
          {procedure.priceBeforeSixWeeks},-{" "}
        </span>
        <span className={styles.price_bigger}>
          {" "}
          {procedure.priceAfterSixWeeks}
          {procedure.priceAfterSixWeeks !== "-" ? ",-" : ""}
        </span>
      </div>
    );
  });
  return procedures;
};
