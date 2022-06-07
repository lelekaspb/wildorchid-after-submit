import data from "./../procedures/nails.json";
import styles from "./../styles/Procedures.module.css";
import { getDOMProcedures } from "./../utilities/procedures.js";
import Products from "./Products";
import Gallery from "./Gallery";
import Procedures from "./Procedures";

function Nails() {
  const procedures = getDOMProcedures(data);
  return (
    <section className={styles.section}>
      <Products
        webpSrc="./../photos/nails_products.webp"
        jpegSrc="./../photos/nails_products.jpg"
        altText="nails products"
        messages={[
          {
            id: "services.nails-intro_one",
            text: "Vi har både styrkende neglebehandlinger og forskellige former for shellakbehandlinger.",
          },
          {
            id: "services.nails.intro_two",
            text: "Vi bruger produkter af høj kvalitet, som ikke indeholder skadelige kemikalier, og som holder længe. Vores behandlinger giver et smukt og holdbart resultat i flere uger. Vi har utallige farver at vælge imellem, og vi kan også lave neglekunst såsom tegninger, mønstre og glitter.",
          },
        ]}
      />

      <Procedures procedures={procedures} />

      <Gallery
        images={[
          {
            webpSrc: "./../photos/nails_gallery_1.webp",
            jpegSrc: "./../photos/nails_gallery_1.jpg",
            altText: "nails gallery",
          },
          {
            webpSrc: "./../photos/nails_gallery_2.webp",
            jpegSrc: "./../photos/nails_gallery_2.jpg",
            altText: "nails gallery",
          },
          {
            webpSrc: "./../photos/nails_gallery_3.webp",
            jpegSrc: "./../photos/nails_gallery_3.jpg",
            altText: "nails gallery",
          },
        ]}
      />
    </section>
  );
}

export default Nails;
