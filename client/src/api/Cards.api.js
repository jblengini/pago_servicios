import axios from "axios";

export const getCardsRequest = async () =>
  await axios.get("http://localhost:4000/cards");