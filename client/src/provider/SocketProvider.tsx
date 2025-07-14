import React, { useEffect } from "react";
import { socket } from "../lib/socket";
import { SocketContext } from "../context/SocketContext";

interface Props {
  children: React.ReactNode;
}

export const SocketProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
