import { FormattedMessage } from "react-intl";
import home from "../styles/Homepage.module.css";

function Home() {
  return (
    <>
      <div className={home.navbarWrapper}></div>
      <div className={home.background}>
        <div className={home.AllWelcomeWrap}>
          <div className={home.WelcomeWrap}>
            <h2 className={home.Welcomeh2}>
              <FormattedMessage
                id="greeting.one"
                defaultMessage="Velkommen til"
              />
            </h2>
            <h1 className={home.Welcomeh1}>Wild Orchid</h1>
            <h2 className={home.Welcomeh2}>
              <FormattedMessage
                id="greeting.two"
                defaultMessage="Vi venter på dig i vores udsøgte skønhedssklinik"
                values={{
                  breakingLine: <br />,
                }}
              />
            </h2>
          </div>

          <div className={home.WelcomePicWrap}>
            <div className={home.WelcomePicBorder}>
              <picture>
                <source
                  type="image/webp"
                  srcSet="./photos/homepage-girl.webp"
                />
                <source type="image/jpeg" srcSet="./photos/homepage-girl.jpg" />
                <img
                  className={home.WelcomePic}
                  src="./photos/homepage-girl.jpg"
                  alt="Beautiful girl with flowers"
                ></img>
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className={home.FeatureWrap}>
        <div className={home.FeatureSectionWrap}>
          <img
            src="./icons/relax.svg"
            className={home.FeatureIcon}
            alt="Nails"
          ></img>
          <div className={home.FeatureTitleText}>
            <h4 className={home.FeatureTitle}>
              <FormattedMessage
                id="home.relax.title"
                defaultMessage="Afslappende atmosfære"
              />
            </h4>
            <p className={home.FeatureText}>
              <FormattedMessage
                id="home.relax.text"
                defaultMessage="Hos Wild Orchid kan du glemme dine daglige bekymringer, slappe af og nyde en procedure."
              />
            </p>
          </div>
        </div>
        <div className={home.FeatureSectionWrap}>
          <img
            src="./icons/satisfaction.svg"
            className={home.FeatureIcon}
            alt="Happy customer"
          ></img>
          <div className={home.FeatureTitleText}>
            <h4 className={home.FeatureTitle}>
              <FormattedMessage
                id="home.satisfaction.title"
                defaultMessage="Kundetilfredshed"
              />
            </h4>
            <p className={home.FeatureText}>
              <FormattedMessage
                id="home.satisfaction.text"
                defaultMessage="90 % af alle vores kunder er faste kunder, som bruger salonens tjenester mindst en gang om måneden."
              />
            </p>
          </div>
        </div>
        <div className={home.FeatureSectionWrap}>
          <img
            src="./icons/service.svg"
            className={home.FeatureIcon}
            alt="Hands offering heart"
          ></img>
          <div className={home.FeatureTitleText}>
            <h4 className={home.FeatureTitle}>
              <FormattedMessage
                id="home.services.title"
                defaultMessage="Kvalitetstjenester"
              />
            </h4>
            <p className={home.FeatureText}>
              <FormattedMessage
                id="home.services.text"
                defaultMessage="Vi sætter en stor ære i vores arbejde, og vi er klar til at gå de ekstra mil for vores kunder."
              />
            </p>
          </div>
        </div>
      </div>

      <img
        src="./illustrations/burger-menu-orchid.svg"
        className={` ${home.OrchidDrawing} ${home.hidden}  `}
        alt="Orchid"
      ></img>
      <div className={home.IGsection}>
        <h2 className={home.IGtitle}>
          <FormattedMessage
            id="home.instagram"
            defaultMessage="Tjek vores Instagram-opslag"
          />
        </h2>
        <div className={home.IGpics}>
          <a
            href="https://www.instagram.com/p/CdBsY0kovgt/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={home.IGpicHover}>
              <picture>
                <source type="image/webp" srcSet="./photos/instagram-1.webp" />
                <source type="image/jpeg" srcSet="./photos/instagram-1.jpg" />
                <img
                  src="./photos/instagram-1.jpg"
                  className={home.IGpic}
                  loading="lazy"
                  alt="Eye with eyelash done"
                ></img>
              </picture>
              <div className={home.IGpicHoverBox}>
                <div className={home.InsideHoverBoxWrap}>
                  <img
                    src="./icons/Instagram.svg"
                    className={home.IGicon}
                    alt="Instagram logo"
                  ></img>
                  <div className={home.ClockTextWrap}>
                    <img
                      src="./icons/clock.svg"
                      className={home.ClockIcon}
                      alt="Clock"
                    ></img>
                    <p>May 1</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/p/CaGJbDLosw_/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={home.IGpicHover}>
              <picture>
                <source type="image/webp" srcSet="./photos/instagram-2.webp" />
                <source type="image/jpeg" srcSet="./photos/instagram-2.jpg" />
                <img
                  src="./photos/instagram-2.jpg"
                  className={home.IGpic}
                  loading="lazy"
                  alt="Eye with eyelash done"
                ></img>
              </picture>
              <div className={home.IGpicHoverBox}>
                <div className={home.InsideHoverBoxWrap}>
                  <img
                    src="./icons/Instagram.svg"
                    className={home.IGicon}
                    alt="Instagram logo"
                  ></img>
                  <div className={home.ClockTextWrap}>
                    <img
                      src="./icons/clock.svg"
                      className={home.ClockIcon}
                      alt="Clock"
                    ></img>
                    <p>Feb 17</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/p/CVYVdL1o6s-/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={home.IGpicHover}>
              <picture>
                <source type="image/webp" srcSet="./photos/instagram-3.webp" />
                <source type="image/jpeg" srcSet="./photos/instagram-3.jpg" />
                <img
                  src="./photos/instagram-3.jpg"
                  className={home.IGpic}
                  loading="lazy"
                  alt="Hand with nails painted"
                ></img>
              </picture>
              <div className={home.IGpicHoverBox}>
                <div className={home.InsideHoverBoxWrap}>
                  <img
                    src="./icons/Instagram.svg"
                    className={home.IGicon}
                    alt="Instagram logo"
                  ></img>
                  <div className={home.ClockTextWrap}>
                    <img
                      src="./icons/clock.svg"
                      className={home.ClockIcon}
                      alt="Clock icon"
                    ></img>
                    <p>Oct 23</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
