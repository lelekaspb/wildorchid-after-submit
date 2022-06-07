import styles from "./../styles/Procedures.module.css";
import { FormattedMessage } from "react-intl";

function Products({ webpSrc, jpegSrc, altText, messages }) {
  const paragraphs = messages.map((message, index) => {
    return (
      <p key={index}>
        <FormattedMessage
          id={message.id}
          defaultMessage={message.text}
          values={message.values}
        />
      </p>
    );
  });
  return (
    <article className={styles.products}>
      <picture className={styles.products_img_wrapper}>
        <source type="image/webp" srcSet={webpSrc} />
        <source type="image/jpeg" srcSet={jpegSrc} />
        <img className={styles.products_img} src={jpegSrc} alt={altText} />
      </picture>

      <div className={styles.products_text}>{paragraphs}</div>
    </article>
  );
}

export default Products;
