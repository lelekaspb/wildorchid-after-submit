import { useNavigate } from "react-router-dom";
import { Context } from "./ContextWrapper";
import { useContext } from "react";
import { postGiftcard, sendEmail } from "./../utilities/post.js";
import mobilepay from "./../styles/Mobilepay.module.css";

function Mobilepay() {
  // fetch the info state and dispatch function from context provider
  const { info, dispatch } = useContext(Context);

  // for redirecting user to confirmation page
  let navigate = useNavigate();
  const redirectToConfirmation = () => {
    navigate("/confirmation");
  };

  // for re-setting the info state  to initial value after posting giftcard order
  const setInfoToInitial = () => {
    dispatch({ type: "reset", data: true });
  };

  // handle qr code click
  const handleClick = async () => {
    if (info.giftcard.validated) {
      const payload = {
        first_name: info.giftcard.firstName,
        last_name: info.giftcard.lastName,
        email: info.giftcard.email,
        amount: parseInt(info.giftcard.amount),
        note: info.giftcard.note,
        date_receive: info.giftcard.date,
      };
      const url = "https://kea0209-5a57.restdb.io/rest/wildorchid-giftcard";
      const response = await postGiftcard(payload, url);
      if (response !== undefined) {
        // if post request was successful, set state to initial,
        // and redirect user to confirmation page
        setInfoToInitial();
        redirectToConfirmation();
        // send notifying email to Wild Orchid
        sendEmail(response, "giftcard");
      } else {
        alert("failed to post");
      }
    } else {
      alert(
        "Looks like something is wrong with the information in gift card form."
      );
    }
  };

  return (
    <section className={mobilepay.picture}>
      <img src="./../photos/qr-code.png" alt="qr code" onClick={handleClick} />
    </section>
  );
}

export default Mobilepay;
