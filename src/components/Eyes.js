import styles from "./../styles/Procedures.module.css";
import data from "./../procedures/eyes.json";
import { getDOMProcedures } from "./../utilities/procedures.js";
import Products from "./Products";
import Gallery from "./Gallery";
import Procedures from "./Procedures";

function Eyes() {
  const procedures = getDOMProcedures(data);
  return (
    <section className={styles.section}>
      <Products
        webpSrc="./../photos/eyes_products.webp"
        jpegSrc="./../photos/eyes_products.jpg"
        altText="brows and lashes products"
        messages={[
          {
            id: "services.eyes.intro_one",
            text: "Vi farver bryn og vipper, og vi tilbyder både Lash Lift og vippeextensions.",
          },
          {
            id: "services.eyes.intro_two",
            text: "Med Lash Lift løfter og former vi dine naturlige øjenvipper, så de fremstår buede og større. Det åbner øjnene op og vipperne virker længere. Effekten efter behandlingen varer i cirka fire uger.",
          },
          {
            id: "services.eyes.intro_three",
            text: "Vi bruger kendte og betroede mærker, som kombineret med vores professionalisme giver flotte resultater. De mærker, vi bruger, giver os et bredt udvalg af nuancer, som vi kan blande for at matche enhver hudtype og hårfarve.",
          },
        ]}
      />

      <Procedures procedures={procedures} />

      <Gallery
        images={[
          {
            webpSrc: "./../photos/eyes_gallery_3.webp",
            jpegSrc: "./../photos/eyes_gallery_3.jpg",
            altText: "brows and lashes",
          },
          {
            webpSrc: "./../photos/eyes_gallery_2.webp",
            jpegSrc: "./../photos/eyes_gallery_2.jpg",
            altText: "brows and lashes",
          },
          {
            webpSrc: "./../photos/eyes_gallery_1.webp",
            jpegSrc: "./../photos/eyes_gallery_1.jpg",
            altText: "brows and lashes",
          },
        ]}
      />
    </section>
  );
}

export default Eyes;
