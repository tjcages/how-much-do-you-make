// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  try {
    const response = await fetch(`${process.env.API_ROUTE}/getCards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.status == "success") {
      res.status(200).send({ message: "success", json });
      return;
    } else {
      res.status(500).send({ message: "error getting card data", json });
      return;
    }
  } catch (error) {
    res.status(500).send({ message: "error getting card data", error });
    return;
  }
}
