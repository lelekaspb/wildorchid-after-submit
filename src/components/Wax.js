import { FormattedMessage } from "react-intl";
import waxing from "./../procedures/waxing.json";
import sugaring from "./../procedures/sugaring.json";
import styles from "./../styles/Procedures.module.css";
import { getWaxingDOMProcedures } from "./../utilities/procedures.js";
import Products from "./Products";
import Gallery from "./Gallery";
import WaxingProcedures from "./WaxingProcedures";

function Wax() {
  const waxingProcedures = getWaxingDOMProcedures(waxing);
  const sugaringProcedures = getWaxingDOMProcedures(sugaring);

  return (
    <section className={styles.section}>
      <Products
        webpSrc="./../photos/waxing_products.webp"
        jpegSrc="./../photos/waxing_products.jpg"
        altText="waxing products"
        messages={[
          {
            id: "services.waxing.intro_one",
            text: "Hos Wild Orchid fjerner vi hår med sukkerpasta og med voks.",
          },
          {
            id: "services.waxing.intro_two",
            text: "Vi bruger højkvalitets, EU-producerede produkter i voks- og sukkerbehandlingsprocedurerne. Med disse produkter sørger vi for, at hår ikke knækker under indgrebet, men fjernes med en hårsæk. Det betyder, at hårhuden ser glattere ud, og håret vokser langsommere.",
          },
          {
            id: "services.waxing.intro_three",
            text: "Over en længere periode med hårfjerning opnås så meget reduktion af hårvæksten, at vækstfasen stoppes.",
          },
          {
            id: "services.waxing.intro_four",
            text: "Hver voks-/sukkerbehandling inkluderer {value}",
            values: {
              value: (
                <strong>
                  {""}
                  {
                    <FormattedMessage
                      id="services.waxing.ingrown_hair"
                      defaultMessage="indgroet hår behandling"
                    />
                  }
                  {""}
                </strong>
              ),
            },
          },
        ]}
      />

      <article className={styles.procedures}>
        <WaxingProcedures
          procedures={sugaringProcedures}
          headerMessage={{ id: "services.sugaring", text: "Sugaring" }}
        />

        <WaxingProcedures
          procedures={waxingProcedures}
          headerMessage={{ id: "services.waxing", text: "Voks" }}
        />
      </article>

      <Gallery
        images={[
          {
            webpSrc: "./../photos/waxing_gallery_1.webp",
            jpegSrc: "./../photos/waxing_gallery_1.jpg",
            altText: "waxing gallery",
          },
          {
            webpSrc: "./../photos/waxing_gallery_2.webp",
            jpegSrc: "./../photos/waxing_gallery_2.jpg",
            altText: "waxing gallery",
          },
          {
            webpSrc: "./../photos/waxing_gallery_3.webp",
            jpegSrc: "./../photos/waxing_gallery_3.jpg",
            altText: "waxing gallery",
          },
        ]}
      />
    </section>
  );
}

export default Wax;
