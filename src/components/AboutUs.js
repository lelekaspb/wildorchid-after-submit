import about from "../styles/About.module.css";
import { FormattedMessage } from "react-intl";

function AboutUs() {
  return (
    <>
      <div className={` ${about.div} `}>
        <h2 className={` ${about.title} `}>
          <FormattedMessage id="navigation.about_us" defaultMessage="Om os" />
        </h2>
      </div>

      <div className={` ${about.section} `}>
        <div className={` ${about.SubSection} ${about.MobileHidden}  `}>
          <div className={` ${about.PicContainer} `}>
            <picture>
              <source type="image/webp" srcSet="./photos/Julia.webp" />
              <source type="image/jpeg" srcSet="./photos/Julia.jpg" />
              <img
                src="./photos/Julia.jpg"
                className={` ${about.SectionPic} `}
                loading="lazy"
                alt="Julia smiling"
              ></img>
            </picture>
          </div>
          <h3 className={` ${about.SubTitle} `}>
            <FormattedMessage
              id="about.julia.title"
              defaultMessage="OM JULIA"
            />
          </h3>
          <p className={` ${about.BodyText} `}>
            <FormattedMessage
              id="about.julia.body"
              defaultMessage="“Jeg er meget åben over for mine kunder. Jeg fortæller om mit liv, og de fortæller mig om deres. Mine behandlinger er gode og tilfredsstillende, og jeg er meget grundig. Jeg kan finde på at tage resten af de hår, der skal fjernes, med en pincet, hvis jeg ikke er tilfreds. Derfor kalder flere af mine kunder mig for perfektionist,” fortæller Julia Kurkova, der kommer fra Rusland."
            />
          </p>
        </div>
        <div className={` ${about.SubSection} `}>
          <div className={` ${about.PicContainer} `}>
            <picture>
              <source type="image/webp" srcSet="./photos/Salon.webp" />
              <source type="image/jpeg" srcSet="./photos/Salon.jpg" />
              <img
                src="./photos/Salon.jpg"
                className={` ${about.SectionPic} `}
                loading="lazy"
                alt="Julia doing customer's nails"
              ></img>
            </picture>
          </div>
          <h3 className={` ${about.SubTitle} `}>
            <FormattedMessage
              id="about.salon.title"
              defaultMessage="OM SALONEN"
            />
          </h3>
          <p className={` ${about.BodyText} `}>
            <FormattedMessage
              id="about.salon.body"
              defaultMessage="Hos Wild Orchid er du sikker på at få en god og grundig behandling  uanset hvilken du vælger. Julia Kurkova elsker sit arbejde med skønhedsbehandlinger og går op i at levere en god service og fantastiske behandlinger hver gang. Julia Kurkova har arbejdet med skønhed siden 2014 og er efterhånden en ekspert inden for de behandlinger, hun tilbyder."
            />
          </p>
        </div>

        <div className={` ${about.SubSection} `}>
          <div className={` ${about.PicContainer} `}>
            <picture>
              <source type="image/webp" srcSet="./photos/Clean.webp" />
              <source type="image/jpeg" srcSet="./photos/Clean.jpg" />
              <img
                src="./photos/Clean.jpg"
                className={` ${about.SectionPic} `}
                loading="lazy"
                alt="Machine used for sterilizing equipment"
              ></img>
            </picture>
          </div>
          <h3 className={` ${about.SubTitle} `}>
            <FormattedMessage
              id="about.clean.title"
              defaultMessage="VI PAS PÅ DIG"
            />
          </h3>
          <p className={` ${about.BodyText} `}>
            <FormattedMessage
              id="about.clean.body"
              defaultMessage="Hos Wild Orchid vil vi sørge for, at du er sikker. Vi tager vores forholdsregler for at sikre, at ingen smitte spredes fra én kunde til en anden. For at opnå dette bruger vi engangsværktøj og steriliserer engangsudstyr korrekt. Vi tager også særligt hensyn til vores genanvendelige udstyr. Alle instrumenter vi bruger gennemgår en 4-trins rengøringsproces. Redskaberne er behandlet med desinficerende spray; for det andet, derefter vasket for at sikre, at der ikke er nogen hudpartikler tilbage efter en procedure; instrumenterne udsættes for varmluftsterilisering; og til sidst lægges værktøjerne i en UV-sterilisator, hvor de opbevares indtil næste procedure."
            />
          </p>
        </div>
      </div>

      <div className={` ${about.TrustpilotImageSection} `}>
        <div className={` ${about.TrustpilotSection} `}>
          <a
            href="https://trustpilot.com/review/wildorchid.dk"
            target="_blank"
            rel="noreferrer"
            className={about.TrustpilotLink}
          >
            <div className={about.TrustpilotAllIconText}>
              <p className={about.TrustpilotText}>
                <FormattedMessage
                  id="about.trustpilot.see"
                  defaultMessage="Se vores anmeldelser på"
                />
              </p>
              <div className={about.TrustpilotIconText}>
                <img
                  src="./icons/trustpilot.svg"
                  className={` ${about.TrustpilotIcon} `}
                  loading="lazy"
                  alt="Trustpilot icon (green star)"
                ></img>
                <p className={about.TrustpilotText}>Trustpilot</p>
              </div>
            </div>
          </a>

          <a
            href="https://trustpilot.com/evaluate/wildorchid.dk"
            target="_blank"
            rel="noreferrer"
            className={about.TrustpilotLink}
          >
            <div className={about.TrustpilotAllIconText}>
              <p className={about.TrustpilotText}>
                <FormattedMessage
                  id="about.trustpilot.review"
                  defaultMessage="Anmeld os på"
                />
              </p>
              <div className={about.TrustpilotIconText}>
                <img
                  src="./icons/trustpilot.svg"
                  className={` ${about.TrustpilotIcon} `}
                  alt="Trustpilot icon (green star)"
                ></img>
                <p className={about.TrustpilotText}>Trustpilot</p>
              </div>
            </div>
          </a>
        </div>

        <picture>
          <source type="image/webp" srcSet="./photos/Salon-outside.webp" />
          <source type="image/jpeg" srcSet="./photos/Salon-outside.jpg" />
          <img
            className={` ${about.FrontPic} ${about.MobileHidden}  `}
            src="./photos/Salon-outside.jpg"
            alt=""
          ></img>
        </picture>
      </div>
    </>
  );
}

export default AboutUs;
