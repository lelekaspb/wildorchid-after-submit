export const postGiftcard = async (payload, url) => {
  const options = {
    method: "POST",
    headers: {
      "x-apikey": "6082d28c28bf9b609975a5db",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  };

  try {
    const request = await fetch(url, options);
    const data = await request.json();
    return data;
  } catch (err) {
    console.log("Caught error " + err);
    return undefined;
  }
};

export const sendEmail = async (response, type) => {
  const payload = preparePayload(response, type);
  const endpoint = "https://kea0209-5a57.restdb.io/mail";
  const options = {
    method: "POST",
    headers: {
      "x-apikey": "6082d28c28bf9b609975a5db",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  };

  try {
    await fetch(endpoint, options);
  } catch (err) {
    console.log("Caught error " + err);
  }
};

const preparePayload = (response, type) => {
  let payload;
  if (type === "giftcard") {
    const date = new Date(response.date_receive).toLocaleDateString("en-GB");
    payload = {
      to: "olga.baeva86@gmail.com",
      subject: "New gift card order",
      html: `<p>Dear Julia</p> 
          <p>We have received new gift card order. Find the order information below.</p>
          <p>First name: <b>${response.first_name}</b></p> 
          <p>Last name: <b>${response.last_name}</b></p>
          <p>Email: <b>${response.email}</b></p>
          <p>Amount: <b>${response.amount} dkk</b></p>
          <p>Date of receiving: <b>${date}</b></p>
          <p>Note: <b>${response.note}</b></p>
          `,
      company: "restdb",
      sendername: "giftcard collection",
    };
  } else if (type === "contact") {
    payload = {
      to: "olga.baeva86@gmail.com",
      subject: "New contact query",
      html: `<p>Dear Julia</p> <p>We have received new contact query. Find the query information below.</p>
          <p>Name: <b>${response.name}</b></p> 
          <p>Email: <b>${response.email}</b></p>
          <p>Phone: <b>${response.phone} </b></p>
          <p>Message: <b>${response.message}</b></p>
          `,
      company: "restdb",
      sendername: "contact collection",
    };
  }
  return payload;
};
