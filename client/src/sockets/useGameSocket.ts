import { useEffect } from "react";
import { registerGameHandlers } from "./handlers/gameHandlers";
import { registerRoomHandlers } from "./handlers/roomHandlers";
import type { Dispatch } from "react";
import type { GameAction } from "../types/actions";
import { useSocket } from "../hooks/useSocket";

export const useGameSocket = (dispatch: Dispatch<GameAction>) => {
  const socket = useSocket();

  useEffect(() => {
    const cleanups = [
      registerGameHandlers(socket, dispatch),
      registerRoomHandlers(socket, dispatch),
    ];

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, [socket, dispatch]);
  return socket;
};
