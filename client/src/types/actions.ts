import type { Suit } from "./Suit";

export type GameAction =
  | {
      type: "CARD_PLAYED";
      payload: { player: string; card: { suit: Suit; rank: number } };
    }
  | {
      type: "PLAYER_JOINED";
      payload: { playerId: string; allPlayerIds: Array<string> };
    }
  | {
      type: "PLAYER_LEFT";
      payload: { playerId: string; allPlayerIds: Array<string> };
    };
