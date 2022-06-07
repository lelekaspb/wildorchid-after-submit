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
