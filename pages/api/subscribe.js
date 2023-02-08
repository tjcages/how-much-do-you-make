require("dotenv").config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  try {
    const response = await fetch(`${process.env.API_ROUTE}/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const json = await response.json();
    console.log(json);
    if (json.status == "success") {
      res.status(200).send({ message: "success", json });
      return;
    } else {
      res.status(500).send({ message: "error subscribing new user", json });
      return;
    }
  } catch (error) {
    res.status(500).send({ message: "error subscribing new user", error });
    return;
  }
}
