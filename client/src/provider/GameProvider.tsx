import React, { useReducer } from "react";
import { GameContext } from "../context/GameContext";
import { gameReducer, initialState } from "../context/GameContext";
import type { ReactNode } from "react";

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
