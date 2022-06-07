import data from "./../procedures/spraytan.json";
import styles from "./../styles/Procedures.module.css";
import { getDOMProcedures } from "./../utilities/procedures.js";
import Products from "./Products";
import Gallery from "./Gallery";
import Procedures from "./Procedures";

function Spraytan() {
  const procedures = getDOMProcedures(data);
  return (
    <section className={styles.section}>
      <Products
        webpSrc="./../photos/spraytan_products.webp"
        jpegSrc="./../photos/spraytan_products.jpg"
        altText="spraytan products"
        messages={[
          {
            id: "services.spraytan.intro_one",
            text: "For at få det bedste resultat med vores spray tan, peel huden dagen før (eller om morgenen på behandlingsdagen). Det kan enten gøres med en bodyscrub, handske eller bare et håndklæde efter badet. Det er vigtigt, at du skrubber hele din krop.",
          },
          {
            id: "services.spraytan.intro_two",
            text: "Den spray tan vi bruger i vores behandling består af naturlige ingredienser, der ikke kun får din hud til at gløde, men også har en fugtgivende effekt, der fører til blød og glat hud. Hos Wild Orchid får du gylden intens hudfarve med anti-aging effekt.",
          },
        ]}
      />

      <Procedures procedures={procedures} />

      <Gallery
        images={[
          {
            webpSrc: "./../photos/spraytan_gallery_1.webp",
            jpegSrc: "./../photos/spraytan_gallery_1.jpg",
            altText: "spraytan gallery",
          },
          {
            webpSrc: "./../photos/spraytan_gallery_2.webp",
            jpegSrc: "./../photos/spraytan_gallery_2.jpg",
            altText: "spraytan gallery",
          },
          {
            webpSrc: "./../photos/spraytan_gallery_3.webp",
            jpegSrc: "./../photos/spraytan_gallery_3.jpg",
            altText: "spraytan gallery",
          },
        ]}
      />
    </section>
  );
}

export default Spraytan;
