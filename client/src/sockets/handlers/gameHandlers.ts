import { Socket } from 'socket.io-client';
import type { Dispatch } from 'react';
import type { GameAction } from '../../types/actions';
import type { Suit } from '../../types/Suit';

export const registerGameHandlers = (
  socket: Socket,
  dispatch: Dispatch<GameAction>
) => {
  const handleCardPlayed = ({ card, player }: { card: { suit: Suit; rank: number }; player: string }) => {
    dispatch({ type: 'CARD_PLAYED', payload: { card, player } });
  };

  socket.on('card-played', handleCardPlayed);

  return () => {
    socket.off('card-played', handleCardPlayed);
  };
};