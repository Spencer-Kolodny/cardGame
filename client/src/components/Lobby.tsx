import { Button, TextField } from "@mui/material";
import { useGameContext } from "../hooks/useGameContext";
import { useGameSocket } from "../sockets/useGameSocket";
import { useCallback, useState } from "react";
import GameTable from "./GameTable";

function Lobby() {
  const [roomId, setRoomId] = useState<string>("");
  const { state, dispatch } = useGameContext();
  const socket = useGameSocket(dispatch);

  const joinRoom = useCallback(() => {
    if (roomId) {
      socket.emit("join-room", roomId);
    }
  }, [roomId, socket]);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Room ID"
        variant="outlined"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <Button variant="contained" onClick={joinRoom}>
        Join Room
      </Button>
      <h2>Players: {state.players.join(", ")}</h2>
      <GameTable />
    </>
  );
}

export default Lobby;
