import styles from "./../styles/Procedures.module.css";

function Gallery({ images }) {
  const pictureTags = images.map((imageObj, index) => {
    return (
      <picture key={index}>
        <source type="image/webp" srcSet={imageObj.webpSrc} />
        <source type="image/jpeg" srcSet={imageObj.jpegSrc} />
        <img
          className={styles.gallery_img}
          src={imageObj.jpegSrc}
          loading="lazy"
          alt={imageObj.altText}
        />
      </picture>
    );
  });
  return <article className={styles.gallery}>{pictureTags}</article>;
}

export default Gallery;
