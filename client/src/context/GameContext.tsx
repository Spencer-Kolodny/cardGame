import { act, createContext } from 'react';
import type { Dispatch } from 'react';
import type { GameAction } from '../types/actions';
import type { Suit } from '../types/Suit';

// --- Types ---
export interface GameState {
  players: string[];
  gameState: {
    hands: Record<string, Array<{ suit: Suit; rank: number }>> | null;
    table: Array<{ suit: Suit; rank: number }>;
    turn: number;
  };
}

interface GameContextType {
  state: GameState;
  dispatch: Dispatch<GameAction>;
}

// --- Initial State ---
export const initialState: GameState = {
  players: [],
  gameState: {
    hands: null,
    table: [],
    turn: 0,
  },
};

// --- Reducer ---
export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CARD_PLAYED':
      return { 
        ...state, 
        gameState: { 
          ...state.gameState, 
          table: [...state.gameState.table, action.payload.card]      
        }
      };
    case 'PLAYER_JOINED':
      return { ...state, players: action.payload.allPlayerIds };
    case 'PLAYER_LEFT':
      return { ...state, players: action.payload.allPlayerIds };
  }
}

// --- Context ---
export const GameContext = createContext<GameContextType | undefined>(undefined);