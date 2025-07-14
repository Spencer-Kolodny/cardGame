import { Socket } from 'socket.io-client';
import type { Dispatch } from 'react';
import type { GameAction } from '../../types/actions';

export const registerRoomHandlers = (
  socket: Socket,
  dispatch: Dispatch<GameAction>
) => {
  const handlePlayerJoined = (payload: { playerId: string; allPlayerIds: string[] }) => {
    dispatch({ type: 'PLAYER_JOINED', payload });
  };

  const handlePlayerLeft = (payload: { playerId: string; allPlayerIds: string[] }) => {
    dispatch({ type: 'PLAYER_LEFT', payload });
  };

  socket.on('player-joined', handlePlayerJoined);
  socket.on('player-left', handlePlayerLeft);

  return () => {
    socket.off('player-joined', handlePlayerJoined);
    socket.off('player-left', handlePlayerLeft);
  };
};
