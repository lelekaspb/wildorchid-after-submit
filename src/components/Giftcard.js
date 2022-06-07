import { FormattedMessage, FormattedDate } from "react-intl";
import giftcard from "../styles/Giftcard.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/day-picker.css";
import { enGB, da } from "date-fns/locale";
import { Context } from "./ContextWrapper";
import { useContext } from "react";
import Firstname from "./FirstnameField";
import Lastname from "./LastnameField";
import Email from "./EmailField";
import Amount from "./AmountField";
import Note from "./NoteField";

function Giftcard() {
  // for redirecting user to the payment page after form validation
  let navigate = useNavigate();
  const redirectToPayment = () => {
    navigate("/payment");
  };

  // fetch states and functions from context provider
  const { locale, info, dispatch } = useContext(Context);

  // validating functions for required inputs
  const validateName = (string) => {
    const spacesRegex = new RegExp("^ +$");
    if (string.match(spacesRegex) || string.length < 2) {
      return "error";
    } else {
      return "success";
    }
  };

  const validateEmail = (string) => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (string.match(emailRegex)) {
      return "success";
    } else {
      return "error";
    }
  };

  const validateAmount = (string) => {
    const amountRegex = new RegExp("^[0-9]+$");
    if (string.match(amountRegex)) {
      const num = parseInt(string);
      if (num > 49 && num < 2001) {
        return "success";
      } else {
        return "error";
      }
    } else {
      return "error";
    }
  };

  // datePicker footer
  const dpFooter = info.giftcard.date ? (
    <p>
      <FormattedMessage
        id="giftcard.datepicker.footer.selected"
        defaultMessage="Du valgte"
      />{" "}
      <FormattedDate
        value={info.giftcard.date}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
    </p>
  ) : (
    <p>
      <FormattedMessage
        id="giftcard.datepicker.footer.select"
        defaultMessage="Vælg venligst en dag."
      />
    </p>
  );
  // locale for datePicker
  const dpLocale = {
    da: da,
    en: enGB,
  };

  // refs for accessing input elements
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const amountRef = useRef("");

  const checkForErrors = () => {
    // highlight all the incorrectly filled in input fields
    dispatch({
      type: "fnameHelp",
      data: validateName(info.giftcard.firstName),
    });
    dispatch({ type: "lnameHelp", data: validateName(info.giftcard.lastName) });
    dispatch({ type: "emailHelp", data: validateEmail(info.giftcard.email) });
    dispatch({
      type: "amountHelp",
      data: validateAmount(info.giftcard.amount),
    });

    // check if there are incorrectly filled in input fields
    if (validateName(info.giftcard.firstName) === "error") {
      return firstNameRef;
    } else if (validateName(info.giftcard.lastName) === "error") {
      return lastNameRef;
    } else if (validateEmail(info.giftcard.email) === "error") {
      return emailRef;
    } else if (validateAmount(info.giftcard.amount) === "error") {
      return amountRef;
    }
  };

  // scroll up to the first found error
  const scrollToError = (errorField) => {
    const offset = errorField.current.offsetTop;
    window.scroll({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  };

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate
    const errorField = checkForErrors();
    if (!errorField) {
      // if validated correctly, redirect to payment
      dispatch({ type: "validated", data: true });
      redirectToPayment();
    } else {
      // if not, scroll up to the first error field in the flow
      scrollToError(errorField);
    }
  };

  return (
    <>
      <div className={giftcard.wrapper}>
        <h2 className={giftcard.heading}>
          <FormattedMessage
            id="navigation.giftcard"
            defaultMessage="Gavekort"
          />
        </h2>

        {/* navigation scheme */}
        <div className={giftcard.nav_scheme}>
          <div className={giftcard.step_done}>1</div>
          <div className={giftcard.step_middle}></div>
          <div className={giftcard.step_pending}>2</div>
        </div>

        {/* gift card infornation form */}
        <form className={giftcard.info_form} autoComplete="off">
          <fieldset>
            <div className={giftcard.name}>
              {/* first name field */}
              <Firstname
                value={info.giftcard.firstName}
                help={info.giftcard.firstNameHelp}
                ref={firstNameRef}
                handleInput={(e) => {
                  dispatch({ type: "fname", data: e.target.value });
                }}
                handleBlur={(e) => {
                  dispatch({
                    type: "fnameHelp",
                    data: validateName(e.target.value),
                  });
                }}
              />

              {/* last name field */}
              <Lastname
                value={info.giftcard.lastName}
                help={info.giftcard.lastNameHelp}
                ref={lastNameRef}
                handleInput={(e) => {
                  dispatch({ type: "lname", data: e.target.value });
                }}
                handleBlur={(e) => {
                  dispatch({
                    type: "lnameHelp",
                    data: validateName(e.target.value),
                  });
                }}
              />
            </div>

            {/* email field */}
            <Email
              value={info.giftcard.email}
              help={info.giftcard.emailHelp}
              ref={emailRef}
              handleInput={(e) => {
                dispatch({ type: "email", data: e.target.value });
              }}
              handleBlur={(e) => {
                dispatch({
                  type: "emailHelp",
                  data: validateEmail(e.target.value),
                });
              }}
            />

            {/* amount field */}
            <Amount
              value={info.giftcard.amount}
              help={info.giftcard.amountHelp}
              ref={amountRef}
              handleInput={(e) => {
                dispatch({ type: "amount", data: e.target.value });
              }}
              handleBlur={(e) => {
                dispatch({
                  type: "amountHelp",
                  data: validateAmount(e.target.value),
                });
              }}
            />

            {/* note field */}
            <Note
              value={info.giftcard.note}
              handleInput={(e) => {
                dispatch({ type: "note", data: e.target.value });
              }}
            />
          </fieldset>

          {/* date of receiving fieldset */}
          <fieldset className={giftcard.day_picker}>
            {/* datepicker */}
            <div>
              <label className={giftcard.label} htmlFor="day_picker">
                <FormattedMessage
                  id="giftcard.info.date_label"
                  defaultMessage="Dato modtaget *"
                />
              </label>
              <DayPicker
                id="day_picker"
                mode="single"
                required
                disabled={[{ before: new Date() }]}
                locale={dpLocale[locale]}
                selected={info.giftcard.date}
                onSelect={(day) => {
                  dispatch({ type: "date", data: day });
                }}
                footer={dpFooter}
              />
            </div>
          </fieldset>

          {/* submit button */}
          <button
            className={giftcard.next_btn}
            type="submit"
            onClick={handleSubmit}
          >
            <FormattedMessage id="giftcard.next_btn" defaultMessage="Næste" />
          </button>
        </form>
        {/* gift card information form  --- end*/}

        {/* photo of gift card for desktop view */}
        <section className={giftcard.giftcard_photo}>
          <div className={giftcard.photo_wrapper}>
            <picture>
              <source
                type="image/webp"
                srcSet="./../photos/giftcard_photo.webp"
              />
              <source
                type="image/jpeg"
                srcSet="./../photos/giftcard_photo.jpg"
              />
              <img
                className={giftcard.photo}
                loading="lazy"
                src="./../photos/giftcard_photo.jpg"
                alt="gift card "
              />
            </picture>
          </div>
        </section>

        {/* illustration of orchid for tablet view */}
        <img
          className={giftcard.orchid}
          loading="lazy"
          src="./../illustrations/giftcard-info-orchid.svg"
          alt="orchid illustration"
        />
      </div>
    </>
  );
}

export default Giftcard;
