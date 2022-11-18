import { createContext, useContext, useState } from "react";
import {
  getCardsRequest
} from "../api/cards.api";

import { CardContext } from "./CardContext";

export const useCards = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCards must be used within a CardContextProvider");
  }
  return context;
};

export const CardContextProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
  
    async function loadCards() {
      const response = await getCardsRequest();
      setCards(response.data);
    };
  
    return (
      <CardContext.Provider
        value={{
          cards,
          loadCards,

        }}
      >
        {children}
      </CardContext.Provider>
    );
  };